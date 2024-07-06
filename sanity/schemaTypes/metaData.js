import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'MetaData',
  title: 'Meta Data',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
  ],
})
