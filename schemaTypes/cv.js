// @ts-check
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
      name: 'softwareTraineeship',
      title: 'Software Traineeship',
      type: 'array',
      of: [
        {
          name: 'traineeship',
          title: 'Traineeship',
          type: 'object',
          fields: [
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'institute', title: 'Institute', type: 'string'}),
            defineField({
              name: 'tenure',
              title: 'Tenure',
              type: 'object',
              fields: [
                defineField({name: 'start', title: 'Start Date', type: 'string'}),
                defineField({name: 'end', title: 'End Date', type: 'string'}),
              ],
            }),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'otherAttribute',
              title: 'Other Attribute',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'professionalExperience',
      title: 'Professional Experience',
      type: 'array',
      of: [
        {
          name: 'experience',
          title: 'Experience',
          type: 'object',
          fields: [
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'institute', title: 'Institute', type: 'string'}),
            defineField({
              name: 'tenure',
              title: 'Tenure',
              type: 'object',
              fields: [
                defineField({name: 'start', title: 'Start Date', type: 'string'}),
                defineField({name: 'end', title: 'End Date', type: 'string'}),
              ],
            }),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'otherAttribute',
              title: 'Other Attribute',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          name: 'educationItem',
          title: 'Education Item',
          type: 'object',
          fields: [
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'institute', title: 'Institute', type: 'string'}),
            defineField({
              name: 'tenure',
              title: 'Tenure',
              type: 'object',
              fields: [
                defineField({name: 'start', title: 'Start Date', type: 'string'}),
                defineField({name: 'end', title: 'End Date', type: 'string'}),
              ],
            }),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'otherAttribute',
              title: 'Other Attribute',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'professionalExperience[0].role',
      subtitle: 'education[0].institute',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'No Title',
        subtitle: subtitle || 'No Institute',
      }
    },
  },
})
