const fs = require('fs')
const path = require('path')
const ts = require('typescript')

const blogFile = path.resolve(__dirname, '../src/lib/blog.ts')
const outputFile = path.resolve(__dirname, 'initial-blog-posts.ndjson')
const source = ts.createSourceFile(
  blogFile,
  fs.readFileSync(blogFile, 'utf8'),
  ts.ScriptTarget.Latest,
)

function readLiteral(node) {
  if (ts.isStringLiteral(node)) return node.text

  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map(readLiteral)
  }

  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties.map((property) => {
        if (!ts.isPropertyAssignment(property)) {
          throw new Error('Expected a property assignment in legacy blog content')
        }

        const key = ts.isIdentifier(property.name)
          ? property.name.text
          : ts.isStringLiteral(property.name)
            ? property.name.text
            : undefined

        if (!key) throw new Error('Expected a named property in legacy blog content')

        return [key, readLiteral(property.initializer)]
      }),
    )
  }

  throw new Error(`Unsupported content node: ${ts.SyntaxKind[node.kind]}`)
}

const declaration = source.statements
  .filter(ts.isVariableStatement)
  .flatMap((statement) => statement.declarationList.declarations)
  .find((item) => ts.isIdentifier(item.name) && item.name.text === 'legacyBlogPosts')

if (!declaration?.initializer) {
  throw new Error('Could not find legacy blog posts')
}

const legacyPosts = readLiteral(declaration.initializer)

function portableText(sections, slug) {
  return sections.flatMap((section, sectionIndex) => [
    {
      _key: `${slug}-heading-${sectionIndex}`,
      _type: 'block',
      children: [
        {
          _key: `${slug}-heading-span-${sectionIndex}`,
          _type: 'span',
          marks: [],
          text: section.heading,
        },
      ],
      markDefs: [],
      style: 'h2',
    },
    ...section.paragraphs.map((text, paragraphIndex) => ({
      _key: `${slug}-paragraph-${sectionIndex}-${paragraphIndex}`,
      _type: 'block',
      children: [
        {
          _key: `${slug}-paragraph-span-${sectionIndex}-${paragraphIndex}`,
          _type: 'span',
          marks: [],
          text,
        },
      ],
      markDefs: [],
      style: 'normal',
    })),
  ])
}

function dateToIso(date) {
  return new Date(`${date} UTC`).toISOString()
}

const documents = legacyPosts.map((post) =>
  JSON.stringify({
    _id: `post.${post.slug}`,
    _type: 'post',
    title: post.title,
    slug: {_type: 'slug', current: post.slug},
    category: post.category,
    summary: post.summary,
    publishedAt: dateToIso(post.publishedAt),
    readTime: post.readTime,
    label: post.label,
    body: portableText(post.body, post.slug),
  }),
)

fs.mkdirSync(path.dirname(outputFile), {recursive: true})
fs.writeFileSync(outputFile, `${documents.join('\n')}\n`)
console.log(`Wrote ${documents.length} blog posts to ${outputFile}`)
