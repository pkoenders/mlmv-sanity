export default {
  name: 'newsEventsHomepage',
  title: 'News and events supporters homepage',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'newsEventsHomepageTitle',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
      //   }),
    },

    {
      name: 'newsEventsHomepageDescription',
      title: 'Add a description for this page',
      type: 'localeText',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
      //   }),
    },

    // {
    //   name: 'peerSupportersActive',
    //   title: 'Is content active?',
    //   type: 'boolean'
    // },

    // {
    //   name: 'accessibilityContent',
    //   title: ' ',
    //   //type: 'blockContent',
    //   type: 'localeBlockContent',
    // },

  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'News and events homepage'
      }
    }
  }
}
