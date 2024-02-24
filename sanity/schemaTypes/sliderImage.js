import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Poster',
  name: 'poster',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
  },

  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
    defineField({
       name: 'attribution',
      type: 'string',
      title: 'Attribution',
    })

  ],
})
