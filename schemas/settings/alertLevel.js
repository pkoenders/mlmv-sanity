export default {
  name: 'alertLevel',
  title: 'Alert level',
  type: 'document',
  fields: [
    {
      name: 'alertLevel',
      title: 'Alert level name',
      type: 'string'
      //type: 'localeString',
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
      title: 'alertLevel'
    }
  }

}
