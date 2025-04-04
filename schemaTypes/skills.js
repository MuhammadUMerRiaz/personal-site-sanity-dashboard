// @ts-check
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Certification title (e.g., HTML)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Skill icon',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the certification',
    }),
    defineField({
      name: 'file',
      title: 'Certificate File',
      type: 'file',
      description: 'The PDF certificate file',
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'No Title',
        media,
      };
    },
  },
});
