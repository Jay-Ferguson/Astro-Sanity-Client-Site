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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        //    defineArrayMember({
        //      name: 'hero',
        //      type: 'hero',
        //    }),
        //    defineArrayMember({
        //      name: 'gallery',
        //      type: 'gallery',
        //    }),
        //    defineArrayMember({
        //      name: 'form',
        //      type: 'form',
        //    }),
        //    defineArrayMember({
        //      name: 'video',
        //      type: 'video',
        //    }),

        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{type: 'promotion'}],
        }),
        // etc...
      ],
    }),
  ],
})

export default pageType
