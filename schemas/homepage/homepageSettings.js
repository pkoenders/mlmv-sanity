export default {
  name: 'homepageSettings',
  title: 'Homepage settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'homepageAlertsActive',
      title: 'Enabe or disable all alerts',
      type: 'boolean'
    },

    // {
    //   name: 'homepageSupportsActive',
    //   title: 'Enabe or disable all peer supports',
    //   type: 'boolean'
    // },

    {
      name: 'homepageCommentsActive',
      title: 'Enabe or disable all comments',
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
        title: 'Home page settings'
      }
    }
  }
}
