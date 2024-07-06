import {defineArrayMember, defineField, defineType} from 'sanity'

const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'subtitle', type: 'string'}),

    defineField({
      name: 'subheading',
      title: 'SubHeading',
      type: 'blockContent',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subheaders',
              title: 'Subheaders',
              type: 'string',
            },
            defineArrayMember({
              name: 'posts',
              type: 'reference',
              to: [{type: 'post'}],
            }),

            defineArrayMember({
              name: 'callToAction',
              type: 'reference',
              to: [{type: 'promotion'}],
            }),
          ],
        },

        // etc...
      ],
    }),
  ],
})

export default pageType
