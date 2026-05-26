import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Alt Text',
      type: 'string',
      description: 'A brief description of the image for accessibility and SEO.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Youth Programs', value: 'youth' },
          { title: 'Learning Support', value: 'learning' },
          { title: 'Community Gatherings', value: 'community' },
          { title: 'Workshops', value: 'workshops' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, category, media } = selection
      return {
        title,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'No category',
        media,
      }
    },
  },
})
