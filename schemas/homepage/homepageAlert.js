export default {
  name: 'homepageAlert',
  title: 'Homepage Alerts',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [

    {
      name: 'homepageAlertName',
      title: 'Add a name for this alert',
      type: 'string',
      description: 'This is a required field',

      validation: Rule => [
        Rule.required().min(2).error('A title of min. 2 characters is required'),
      ],
    },

    {
      name: 'homepageAlertActive',
      title: 'Is this alert active?',
      type: 'boolean'
    },

    {
      name: 'homepageAlertExpirey',
      title: 'Expires on',
      type: 'datetime',
      options: {
        dateFormat: 'dddd DD MMM, YYYY',
        timeFormat: 'HH:mm a',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },

    {
      name: 'homepageAlertDismiss',
      title: 'User can dismiss alert',
      type: 'boolean'
    },

    {
      name: 'alertLevel',
      title: 'Alert level',
      type: 'reference',
      to: { type: 'alertLevel' }
    },


    {
      name: 'homepageAlertTitle',
      title: 'Add a title for this alert',
      description: 'This alert will appear on the homepage when activated',
      type: 'localeString',
    },



    {
      name: 'homepageAlertDescription',
      title: 'Add a description for this alert',
      type: 'localeBlockContent',
      description: 'Please provide description',
    },

    // {
    //   name: 'accessibilityContent',
    //   title: ' ',
    //   //type: 'blockContent',
    //   type: 'localeBlockContent',
    // },

    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },


  ],

  preview: {
    select: {
      title: 'homepageAlertName',
    },
  }
}
