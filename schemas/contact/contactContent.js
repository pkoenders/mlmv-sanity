export default {
  name: 'contactContent',
  title: 'About us',
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

    {
      name: 'content',
      title: ' ',
      //type: 'blockContent',
      type: 'localeBlockContent',
    },

  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Contact us'
      }
    }
  }
}
