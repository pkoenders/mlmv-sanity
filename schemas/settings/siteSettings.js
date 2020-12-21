export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: [/*'create', 'delete'*/  'update', 'publish'],
  fields: [

    {
      name: 'siteTitle',
      title: 'Title of website',
      type: 'string',
    },

    {
      name: 'siteDescription',
      title: 'Description of website',
      type: 'text',
      rows: 3,
    },

    {
      name: 'coverImage',
      title: 'Site cover image',
      type: 'images',
    },


  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Site settings'
      }
    }
  }
}
