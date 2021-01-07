export default {
  name: 'gender',
  title: 'Gender',
  type: 'document',
  fields: [

    {
      name: 'genderTitle',
      title: 'Title',
      type: 'localeString',
    },

    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },

  ],
  preview: {
    select: {
      title: 'genderTitle.en'
    }
  }
}
