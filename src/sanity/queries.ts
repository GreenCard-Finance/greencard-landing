export const BLOG_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    category,
    summary,
    publishedAt,
    readTime,
    label,
    coverImage,
    body
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    category,
    summary,
    publishedAt,
    readTime,
    label,
    coverImage,
    body
  }
`;
