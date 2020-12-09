export default {
  name: 'peerSupportersHomepage',
  title: 'Peer supporters homepage',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'peerSupportersTitle',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
        }),
    },

    {
      name: 'peerSupportersDescription',
      title: 'Add a description for this page',
      type: 'localeText',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
        }),
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
        title: 'Peer supporters homepage'
      }
    }
  }
}
