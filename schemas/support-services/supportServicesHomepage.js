export default {
  name: 'supportServicesHomepage',
  title: 'Support services homepage',
  type: 'document',
  __experimental_actions: [/*'create', 'delete',*/ 'update', 'publish'],
  fields: [

    {
      name: 'title',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'description',
      title: 'Add a description for this page',
      type: 'localeText',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },
  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Peer supporters homepage'
      }
    }
  }
}
