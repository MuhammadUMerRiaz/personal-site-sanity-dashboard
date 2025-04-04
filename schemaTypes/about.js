// @ts-check
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'Main description about yourself',
    }),
    defineField({
      name: 'img',
      title: 'Profile Image',
      type: 'image',
      description: 'Profile image for the About section',
      options: {
        hotspot: true, // Enables image cropping and hotspot selection
      },
    }),
    defineField({
      name: 'subAboutHeading',
      title: 'Sub About Heading',
      type: 'string',
      description: 'Heading for the sub-about section',
    }),
    defineField({
      name: 'subAbout',
      title: 'Sub About',
      type: 'text',
      description: 'Short description about your expertise or focus',
    }),
    defineField({
      name: 'subAboutList',
      title: 'Sub About List',
      type: 'array',
      of: [
        {
          name: 'subAboutItem',
          title: 'Sub About Item',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              description: 'The heading for this item (e.g., City, Training)',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'string',
              description: 'The content corresponding to the heading',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'subAboutHeading',
      subtitle: 'about',
      media: 'img',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'No Heading',
        subtitle: subtitle ? subtitle.slice(0, 50) + '...' : 'No About Content',
        media,
      };
    },
  },
});
