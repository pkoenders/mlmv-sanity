export default {
  name: 'accessibilityContent',
  title: 'Accessibility content',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [

    {
      name: 'title',
      title: 'Add a title for this page',
      type: 'localeString',
      validation: Rule => Rule.required().error('A min of 2 characters is required'),

      // validation: Rule =>
      //   Rule.fields({
      //     en: fieldRule => fieldRule.required().min(5).error('A title of min. 5 characters is required'),
      //   }),
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
        title: 'Accessibility content'
      }
    }
  }
}
