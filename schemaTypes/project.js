// @ts-check
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'A unique identifier for the project (e.g., gazetteer, deskillz)',
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'The display title of the project (e.g., Gazetteer)',
    }),
    defineField({
      name: 'mainImg',
      title: 'Main Image',
      type: 'image',
      description: 'Main image of the project',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imgUrls',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      description: 'Upload additional images for the project gallery',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies used in the project (e.g., React, PHP, Node.js)',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Categories of the project (e.g., Web Development, MERN)',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'The live URL of the project',
    }),
    defineField({
      name: 'stagingUrl',
      title: 'Staging URL',
      type: 'url',
      description: 'The staging URL of the project',
    }),
    defineField({
      name: 'demoCredentials',
      title: 'Demo Credentials',
      type: 'object',
      fields: [
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'password', title: 'Password', type: 'string' }),
      ],
      description: 'Demo credentials for accessing the project (if applicable)',
    }),
    defineField({
      name: 'techDescription',
      title: 'Technical Description',
      type: 'text',
      description: 'A detailed explanation of the technologies and tools used',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      description: 'A detailed description of the project',
    }),
    defineField({
      name: 'imgStyle',
      title: 'Image Style',
      type: 'string',
      description: 'Style applied to images (e.g., img-fixed, img-fluid)',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role in the project (e.g., Full Stack Developer)',
    }),
    defineField({
      name: 'otherAttribute',
      title: 'Other Attributes',
      type: 'object',
      fields: [
        defineField({
          name: 'html',
          title: 'HTML Content',
          type: 'text',
          description: 'Any additional HTML content to be rendered',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'role',
      media: 'mainImg',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'No Title',
        subtitle: subtitle || 'No Role Defined',
        media,
      };
    },
  },
});
