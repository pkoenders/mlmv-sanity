import tags from "../settings/tags";

export default {
  name: 'peerSupporters',
  title: 'Peer Supporter',
  type: 'document',
  fields: [
    {
      name: 'peerSupporterFullName',
      title: 'Peer supporter full name',
      type: 'localeString',

      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
        }),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The url of the page',
      options: {
        source: 'peerSupporterFullName.en',
        maxLength: 96,
        //type: 'slug',
        // slugify: input => input
        //   .toLowerCase()
        //   .replace(/\s+/g, '-')
        //   .slice(0, 200)
      },
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
        }),
    },

    {
      name: 'peerSupporterActive',
      title: 'Is this peer supporter active?',
      type: 'boolean'
    },

    {
      name: 'peerSupporterAddToHomepage',
      title: 'Add to homepage',
      type: 'boolean'
    },


    {
      name: 'peerSupporterFriendlyName',
      title: 'Peer supporter first name',
      description: 'Peer supporter friendly name (required)',
      type: 'localeString',
      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule =>
        Rule.fields({
          en: fieldRule => fieldRule.required().min(2).error('A title of min. 2 characters is required'),
        }),
    },

    {
      name: 'peerSupporterEmail',
      title: 'Peer supporter email address',
      type: 'string',
      // validation: Rule => [
      //   Rule.required().min(10).error('A title of min. 10 characters is required'),
      //   Rule.max(50).warning('Shorter titles are usually better')
      // ],
      validation: Rule => [
        Rule.required().min(2).error('A title of min. 2 characters is required'),
      ],
    },

    {
      name: 'gender',
      title: 'Gender',
      type: 'reference',
      to: { type: 'gender' }
    },

    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: { type: 'location' }
    },

    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'images',
    },


    // {
    //   name: 'coverImage',
    //   title: 'Cover Image',
    //   type: 'reference',
    //   to: { type: 'images' }
    // },


    // {
    //   name: 'coverImage',
    //   title: 'Cover image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'caption',
    //       //type: 'string',
    //       type: 'localeString',
    //       title: 'Caption',
    //       options: {
    //         isHighlighted: true // <-- make this field easily accessible
    //       }
    //     },
    //     {
    //       // Editing this field will be hidden behind an "Edit"-button
    //       name: 'altText',
    //       // type: 'string',
    //       type: 'localeString',
    //       title: 'Alternative text',
    //       description: 'Important for SEO and accessibility',
    //       options: {
    //         isHighlighted: true // <-- make this field easily accessible
    //       }
    //     }
    //   ]
    // },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }]
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },

    {
      name: 'peerShortDescription',
      title: 'Short description',
      description: 'Please provide a short description for SEO and preview text',
      type: 'localeText',
      rows: 3,
      validation: Rule =>
        Rule.required({
          en: fieldRule => fieldRule.required().min(15).error('A title of min. 15 characters is required'),
        }),
    },

    {
      name: 'peerLongDescription',
      title: 'Long descriotion',
      //type: 'blockContent',
      type: 'localeBlockContent',
      description: 'Please provide a long description',
    },



    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },

  ],

  preview: {
    select: {
      title: 'peerSupporterFullName.en',
      tag0: 'tags.0.Tags.en',
      tag1: 'tags.1.Tags.en',
      tag2: 'tags.2.Tags.en',
      tag3: 'tags.3.Tags.en',
      tag4: 'tags.4.Tags.en',


      //categories: 'location.location'
      //subtitle: 'location.location'
      //subtitle: 'categories.array.categories'
      //subtitle: 'categories.name'
      //author: 'author.name',
      // media: 'mainImage'
    },
    // prepare(selection) {
    //   const { title, categories } = selection
    //   return {
    //     title: title,
    //     subtitle: `Categories: ${categories ? categories : 'None'}`
    //   }
    // }


    prepare: ({ title, tag0, tag1, tag2, tag3, tag4 }) => {
      const tags = [tag0, tag1, tag2, tag3].filter(Boolean)
      const subtitle = tags.length > 0 ? `Categories: ${tags.join(', ')}` : ''
      const hasMorecats = Boolean(tag4)
      return {
        title,
        subtitle: hasMorecats ? `${subtitle}…` : subtitle
      }
    }
  }
}
