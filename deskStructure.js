import S from '@sanity/desk-tool/structure-builder'


const hiddenDocTypes = listItem => ![
    "homepageIntro",
    "accessibilityContent",
    "termsOfUseContent",
    "aboutContent",
    "contactContent"
].includes(listItem.getId())

export default () =>
    S.list()
        .title('Content')
        .items([

            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        .title('Settings')
                        .items([

                            S.listItem()
                                .title('Site settings')
                                .schemaType('siteSettings')
                                .child(S.documentTypeList('siteSettings').title('Site settings')),

                            S.listItem()
                                .title('Add or edit tags')
                                .schemaType('tags')
                                .child(S.documentTypeList('tags').title('Add or edit tags')),

                            S.listItem()
                                .title('Add or edit gender')
                                .schemaType('gender')
                                .child(S.documentTypeList('gender').title('Add or edit gender')),

                            S.listItem()
                                .title('Add or edit locations')
                                .schemaType('location')
                                .child(S.documentTypeList('location').title('Add or edit locations')),

                            S.listItem()
                                .title('Add or edit alert levels')
                                .schemaType('alertLevel')
                                .child(S.documentTypeList('alertLevel').title('Add or edit alerts levels')),

                            S.listItem()
                                .title('Add or edit news and event types')
                                .schemaType('newsEventType')
                                .child(S.documentTypeList('newsEventType').title('Add or edit news and event types')),

                        ]),
                ),

            S.listItem()
                .title('Homepage')
                .child(
                    S.list()
                        .title('Homepage')
                        .items([

                            S.listItem()
                                .title('Edit homepage settings')
                                .schemaType('homepageSettings')
                                .child(S.documentTypeList('homepageSettings').title('Edit homepage settings')),


                            S.listItem()
                                .title('Add or edit homepage alerts')
                                .schemaType('homepageAlert')
                                .child(S.documentTypeList('homepageAlert').title('Add or edit homepage alerts')),


                            S.listItem()
                                .title('Edit intro')
                                .child(
                                    S.editor()
                                        .id('homepageIntro')
                                        .schemaType('homepageIntro'),

                                    ...S.documentTypeListItems()
                                        .filter(hiddenDocTypes)
                                ),

                            S.listItem()
                                .title('Edit header image')
                                .child(
                                    S.editor()
                                        .id('homepageHeader')
                                        .schemaType('homepageHeader'),

                                    ...S.documentTypeListItems()
                                        .filter(hiddenDocTypes)
                                ),

                            // S.listItem()
                            //     .title('Edit intro')
                            //     .schemaType('homepageIntro')
                            //     .child(S.documentTypeList('homepageIntro').title('Edit intro')),



                            S.listItem()
                                .title('Add or edit community comments')
                                .schemaType('communityComments')
                                .child(S.documentTypeList('communityComments').title('Add or edit community comments')),
                        ]),


                ),



            S.listItem()
                .title('Peer supporters')
                .child(
                    S.list()
                        .title('Peer supporters')
                        .items([

                            S.listItem()
                                .title('Peer supporters hompepage')
                                .schemaType('peerSupportersHomepage')
                                .child(S.documentTypeList('peerSupportersHomepage').title('Peer supporters hompepage')),

                            S.listItem()
                                .title('All peer supporters')
                                .schemaType('peerSupporters')
                                .child(S.documentTypeList('peerSupporters').title('All peer supporters')),

                        ]),
                ),


            S.listItem()
                .title('Support services')
                .child(
                    S.list()
                        .title('Support services')
                        .items([

                            S.listItem()
                                .title('Support services hompepage')
                                .schemaType('supportServicesHomepage')
                                .child(S.documentTypeList('supportServicesHomepage').title('Support services hompepage')),

                            S.listItem()
                                .title('All Support services')
                                .schemaType('supportServices')
                                .child(S.documentTypeList('supportServices').title('All Support services')),

                        ]),
                ),


            S.listItem()
                .title('News and events')
                .child(
                    S.list()
                        .title('News and events')
                        .items([

                            S.listItem()
                                .title('News and events hompepage')
                                .schemaType('newsEventsHomepage')
                                .child(S.documentTypeList('newsEventsHomepage').title('News and events hompepage')),

                            S.listItem()
                                .title('All news and events')
                                .schemaType('newsEvent')
                                .child(S.documentTypeList('newsEvent').title('All news and events')),

                        ]),
                ),




            S.listItem()
                .title('About us')
                .child(
                    S.editor()
                        .id('aboutContent')
                        .schemaType('aboutContent'),

                    ...S.documentTypeListItems()
                        .filter(hiddenDocTypes)
                ),

            // S.listItem()
            //     .title('Terms of use')
            //     .schemaType('termsOfUseContent')
            //     .child(S.documentTypeList('termsOfUseContent').title('Terms of use')),


            S.listItem()
                .title('Contact us')
                .child(
                    S.editor()
                        .id('contactContent')
                        .schemaType('contactContent'),

                    ...S.documentTypeListItems()
                        .filter(hiddenDocTypes)
                ),


            S.listItem()
                .title('Terms of use')
                .child(
                    S.editor()
                        .id('termsOfUseContent')
                        .schemaType('termsOfUseContent'),

                    ...S.documentTypeListItems()
                        .filter(hiddenDocTypes)
                ),

            // S.listItem()
            //     .title('Terms of use')
            //     .schemaType('termsOfUseContent')
            //     .child(S.documentTypeList('termsOfUseContent').title('Terms of use')),


            S.listItem()
                .title('Accessibility')
                .child(
                    S.editor()
                        .id('accessibilityContent')
                        .schemaType('accessibilityContent'),

                    ...S.documentTypeListItems()
                        .filter(hiddenDocTypes)
                ),

            // S.listItem()
            //     .title('Accessibility')
            //     .schemaType('accessibilityContent')
            //     .child(S.documentTypeList('accessibilityContent').title('Accessibility')),







        ])

