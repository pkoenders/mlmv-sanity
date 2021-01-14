export default {
  name: 'homepageHeader',
  title: 'Homepage header',
  type: 'document',
  __experimental_actions: [/*'create', 'delete',*/ 'update', 'publish'],
  fields: [

    {
      name: 'title',
      title: 'Header text',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'images',
    },

    {
      name: 'active',
      title: 'Is content active?',
      type: 'boolean'
    },

  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Homepage header'
      }
    }
  }
}
