export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: [/*'create', 'delete'*/  'update', 'publish'],
  fields: [

    {
      name: 'title',
      title: 'Title of website',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Short description of this website',
      description: 'Please provide a short description for SEO and preview text (required)',
      type: 'localeText',
      rows: 3,
      validation: Rule => Rule.required().error('A min of 2 characters is required'),
    },

    {
      name: 'coverImage',
      title: 'Site cover image',
      type: 'images',
    },
  ],

  preview: {
    select: {
      title: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Site settings'
      }
    }
  }
}
