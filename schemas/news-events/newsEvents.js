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
      to: { type: 'newsEventType' },
    },


    {
      name: 'startTime',
      title: 'If event, event start date/time',
      type: 'datetime',
      options: {
        dateFormat: 'dddd DD MMM, YYYY',
        timeFormat: 'HH:mm',
        inputDate: true,
        inputTime: true,
        timeStep: 15,
        calendarTodayLabel: 'Today',
      }
    },

    {
      name: 'endTime',
      title: 'If event, event end date/time',
      type: 'datetime',
      options: {
        dateFormat: 'dddd DD MMM, YYYY',
        timeFormat: 'HH:mm ',
        inputDate: true,
        inputTime: true,
        timeStep: 15,
        calendarTodayLabel: 'Today',
      }
    },

    {
      name: 'location',
      title: 'If event, event location',
      type: 'reference',
      to: { type: 'location' }
    },

    {
      name: 'addToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
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
      type: 'datetime',
      options: {
        dateFormat: 'dddd DD MMM, YYYY',
        timeFormat: 'HH:mm ',
        inputDate: true,
        inputTime: true,
        timeStep: 15,
        calendarTodayLabel: 'Today',
      }
    },

    {
      name: 'expiryDate',
      title: 'Expires when',
      description: 'Add a date when this item expires from being shown on website',
      type: 'datetime',
      options: {
        dateFormat: 'dddd DD MMM, YYYY',
        timeFormat: 'HH:mm ',
        inputDate: true,
        inputTime: true,
        timeStep: 15,
        calendarTodayLabel: 'Today',
      }
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
      itemActive: 'itemActive',
      newsEventType: 'newsEventType.newsEventTypeTitle',
      publishedAt: 'publishedAt',
    },



    prepare: ({ title, itemActive, newsEventType, publishedAt }) => {
      const subtitle = newsEventType + ' - Active: ' + itemActive + ', Published: ' + publishedAt
      return {
        title,
        subtitle,
      }
    }
  }
}
