import tags from "../settings/tags";

export default {
  name: 'newsEvent',
  title: 'News and Events',
  type: 'document',
  fields: [

    {
      name: 'newsEventName',
      title: 'Name of news or event item',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The url of the page (required)',
      options: {
        source: 'newsEventName.en',
        maxLength: 96,
      },
    },

    {
      name: 'itemActive',
      title: 'Is this item active?',
      type: 'boolean'
    },

    {
      name: 'newsEventType',
      title: 'Post type',
      type: 'reference',
      to: { type: 'newsEventType' }
    },

    {
      name: 'addToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
    },

    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: { type: 'location' }
    },

    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'images',
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
      name: 'expireyDate',
      title: 'Expires when',
      description: 'Add a date when this item expires from being shown on website',
      type: 'datetime'
    },

    {
      name: 'shortDescription',
      title: 'Short description',
      description: 'Please provide a short description for SEO and preview text (required)',
      type: 'localeText',
      rows: 3,
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'longDescription',
      title: 'Long descriotion',
      type: 'localeBlockContent',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
      description: 'Please provide a long description (required)',
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
      title: 'newsEventName.en',
      tag0: 'tags.0.tagsTitle.en',
      tag1: 'tags.1.tagsTitle.en',
      tag2: 'tags.2.tagsTitle.en',
      tag3: 'tags.3.tagsTitle.en',
      tag4: 'tags.4.tagsTitle.en',
    },



    prepare: ({ title, tag0, tag1, tag2, tag3, tag4 }) => {
      const tags = [tag0, tag1, tag2, tag3].filter(Boolean)
      const subtitle = tags.length > 0 ? `Tags: ${tags.join(', ')}` : ''
      const hasMorecats = Boolean(tag4)
      return {
        title,
        subtitle: hasMorecats ? `${subtitle}…` : subtitle
      }
    }
  }
}
