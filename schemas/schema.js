
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// We import object and document schemas
import blockContent from './blockContent'
import images from './images'

// Settings
import siteSettings from './settings/siteSettings'
import gender from './settings/genderType'
import tags from './settings/tags'
import location from './settings/location'
import alertLevel from './settings/alertLevel'
import newsEventType from './settings/newsEventType'

// Homepage
import homepageSettings from './homepage/homepageSettings'
import homepageHeader from './homepage/homepageHeader'
import homepageIntro from './homepage/homepageContent'
import communityComments from './homepage/communityComments'
import homepageAlert from './homepage/homepageAlert'

//Peer Supporters
import peerSupportersHomepage from './peer-supporters/peerSupportersHomepage'
import peerSupporters from './peer-supporters/peerSupporters'

//Support services
import supportServicesHomepage from './support-services/supportServicesHomepage'
import supportServices from './support-services/supportServices'


//News and events
import newsEventsHomepage from './news-events/newsEventsHomepage'
import newsEvents from './news-events/newsEvents'

// About us
import aboutContent from './about/aboutContent'

// Contact us
import contactContent from './contact/contactContent'

// Terms of use
import termsOfUseContent from './terms-conditions/termsOfUseContent'

// Accessibility
import accessibilityContent from './accessibility/accessibilityContent'


//Locale Object Types
import localeString from './localeTypes/localeString'
import localeSlug from './localeTypes/localeSlug'
import localeBlockContent from './localeTypes/localeBlockContent'
import localeText from './localeTypes/localeText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    //Settings,
    siteSettings,
    tags,
    gender,
    location,
    alertLevel,
    images,
    newsEventType,


    //Homepage
    homepageSettings,
    homepageHeader,
    homepageAlert,
    homepageIntro,
    communityComments,

    //Peer Supporters
    peerSupportersHomepage,
    peerSupporters,

    //Support services
    supportServicesHomepage,
    supportServices,

    //News and events
    newsEventsHomepage,
    newsEvents,

    //About us
    aboutContent,

    //Contact us
    contactContent,

    //Terms of use
    termsOfUseContent,

    // Accessibility
    accessibilityContent,

    //Local Types
    localeString,
    localeSlug,
    localeBlockContent,
    localeText,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas

    blockContent,
  ])
})
