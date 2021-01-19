export default {
  name: 'homepageIntro',
  title: 'Homepage intro',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [

    {
      name: 'title',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'active',
      title: 'Is content active?',
      type: 'boolean'
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
        title: 'Home page intro'
      }
    }
  }
}
