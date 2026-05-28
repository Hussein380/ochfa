import { defineField, defineType } from 'sanity'

export const albumType = defineType({
  name: 'album',
  title: 'Gallery Album',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The name of the event or collection (e.g. "Summer English Classes 2026")',
    }),
    defineField({
      name: 'category',
      title: 'Program Category',
      type: 'string',
      options: {
        list: [
          { title: 'English Literacy & Proficiency', value: 'English Literacy' },
          { title: 'Employment Readiness', value: 'Employment Readiness' },
          { title: 'Youth Mentorship', value: 'Youth Mentorship' },
          { title: 'Women & Family Support', value: 'Women & Family Support' },
          { title: 'Seniors Support', value: 'Seniors Support' },
          { title: 'General Community Event', value: 'General Community Event' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Album Cover Image',
      type: 'image',
      description: 'The main image that will represent this album on the Gallery page.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Bulk Image Upload',
      type: 'array',
      description: 'Drag and drop multiple images here.',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'videos',
      title: 'Bulk Video Upload',
      type: 'array',
      description: 'Drag and drop multiple video files here.',
      of: [
        {
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
      ],
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
