export default {
  name: 'homepageIntro',
  title: 'Homepage intro',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [

    {
      name: 'homepageTitle',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
      //   }),
    },

    {
      name: 'homepageDescription',
      title: 'Add a description for this page',
      type: 'localeText',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
      //   }),
    },

    {
      name: 'homepageIntroActive',
      title: 'Is content active?',
      type: 'boolean'
    },

    {
      name: 'homepageIntroContent',
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
