export default {
  name: 'communityComments',
  title: 'Community comments',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Full name',
      description: 'Will not be displayed on website',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
      //   }),
    },

    {
      name: 'active',
      title: 'Is this comment active?',
      type: 'boolean'
    },

    {
      name: 'addToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
    },


    {
      name: 'shortName',
      title: 'First name',
      description: 'Friendly name (to be displayed on website)',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MMM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },

    {
      name: 'content',
      title: 'Short user comment',
      type: 'localeText',
      rows: 3,
      validation: Rule =>
        Rule.required({
          en: fieldRule => fieldRule.required().min(15).error('A title of min. 15 characters is required'),
        }),
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
      date: 'publishedAt'
    },
    prepare(selection) {
      const { title, date } = selection
      return {
        title: title,
        subtitle: 'Published: ' + date.split('T')[0] // YYYY-MM-DD --> YYYY
      }
    }
  }

}
