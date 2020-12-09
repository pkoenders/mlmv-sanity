export default {
  name: 'contactContent',
  title: 'About us',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'contactTitle',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
        }),
    },

    {
      name: 'contactDescription',
      title: 'Add a description for this page',
      type: 'localeText',
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
        }),
    },

    {
      name: 'contactContentActive',
      title: 'Is content active?',
      type: 'boolean'
    },

    {
      name: 'contactContent',
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
