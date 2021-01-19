export default {
  name: 'homepageAlert',
  title: 'Homepage Alerts',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Add a name for this alert (required)',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'active',
      title: 'Is this alert active?',
      type: 'boolean'
    },

    {
      name: 'expirey',
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
      name: 'dismiss',
      title: 'User can dismiss alert',
      type: 'boolean'
    },

    {
      name: 'level',
      title: 'Alert level (required)',
      type: 'reference',
      to: { type: 'alertLevel' },
      validation: Rule => Rule.required().error('Pleease select a level'),
    },

    {
      name: 'description',
      title: 'Add a description for this alert',
      type: 'localeBlockContent',
      description: 'Please provide description',
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
      date: 'expirey',
      alert: 'level.alertLevel',
    },
    prepare(selection) {
      const { title, active, date, alert } = selection
      const itemActive = `${active ? 'Active,' : ''}`
      const expireyDate = `${date ? 'Expires: ' + date.split('T')[0] + ',' : ''}`
      const alertLevel = `${alert ? alert : ''}`
      return {
        title: title,
        subtitle: `${itemActive} ${expireyDate} ${alertLevel}`
      }
    }
  }
}
