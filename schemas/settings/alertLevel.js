export default {
  name: 'alertLevel',
  title: 'Alert level',
  type: 'document',
  __experimental_actions: [/*'create', 'update', 'delete', 'publish'*/],
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
