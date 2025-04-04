// @ts-check
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'profile',
  title: 'Profile Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Your full name displayed on the website.',
    }),
    defineField({
      name: 'cv',
      title: 'CV File',
      type: 'file',
      description: 'Upload your CV in PDF format.',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
      description: 'Your GitHub profile URL.',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Link',
      type: 'url',
      description: 'Your LinkedIn profile URL.',
    }),
    defineField({
      name: 'typingOptions',
      title: 'Typing Effect Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Strings for the typing effect (e.g., SOFTWARE DEVELOPER, FULL STACK DEVELOPER)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'linkedin',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'No Name Provided',
        subtitle: subtitle ? `LinkedIn: ${subtitle}` : 'No LinkedIn URL',
      };
    },
  },
});
