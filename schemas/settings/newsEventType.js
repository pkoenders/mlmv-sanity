export default {
  name: 'newsEventType',
  title: 'News or event type',
  type: 'document',
  fields: [

    {
      name: 'newsEventTypeTitle',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },

  ],
}
