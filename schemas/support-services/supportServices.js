import tags from "../settings/tags";

export default {
  name: 'supportServices',
  title: 'Support services',
  type: 'document',
  fields: [

    {
      name: 'title',
      title: 'Title or name',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The url of the page (required)',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },

    {
      name: 'active',
      title: 'Is this service active?',
      type: 'boolean'
    },

    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },

    {
      name: 'url',
      title: 'Web address',
      description: 'Use format - www.location.com (No HTTP://...)',
      type: 'string',
    },

    {
      name: 'telephone',
      title: 'Contact number',
      type: 'string',
    },

    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: { type: 'location' }
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }]
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },

    {
      name: 'description',
      title: 'Description',
      description: 'Please provide a short description for SEO and preview text (required)',
      type: 'localeText',
      rows: 3,
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },


    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },

  ],

  preview: {
    select: {
      title: 'title.en',
      active: 'active',
      tag0: 'tags.0.tagsTitle.en',
      tag1: 'tags.1.tagsTitle.en',
      tag2: 'tags.2.tagsTitle.en',
      tag3: 'tags.3.tagsTitle.en',
      tag4: 'tags.4.tagsTitle.en',
    },



    prepare: ({ title, active, tag0, tag1, tag2, tag3, tag4 }) => {
      const tags = [tag0, tag1, tag2, tag3].filter(Boolean)
      //const subtitle = tags.length > 0 ? `Tags: ${tags.join(', ')}` : ''
      const subtitle = `This service is active: ${active}`
      const hasMorecats = Boolean(tag4)
      return {
        title,
        subtitle
      }
    }
  }
}
