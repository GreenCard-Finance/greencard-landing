import {defineField, defineType} from 'sanity'

const categories = [
  {title: 'Send Money Home', value: 'Send Money Home'},
  {title: 'Rates and Fees', value: 'Rates and Fees'},
  {title: 'Safety', value: 'Safety'},
  {title: 'Nigeria Payouts', value: 'Nigeria Payouts'},
  {title: 'Family Support', value: 'Family Support'},
]

export const postType = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  initialValue: {
    category: 'Send Money Home',
    label: 'GreenCard Finance',
    readTime: '3 min read',
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {list: categories, layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(40).max(240),
    }),
    defineField({
      name: 'label',
      title: 'Card label',
      description: 'A short label such as Launch note, Checklist, or Rates.',
      type: 'string',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Reading time',
      type: 'string',
      options: {
        list: ['2 min read', '3 min read', '4 min read', '5 min read', '6 min read'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      description: 'Optional. The website uses its existing illustration if this is empty.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'body',
      title: 'Article',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.uri({allowRelative: true}),
                  }),
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
