export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'sanity-tutorials'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Netlify',
              sites: [
                {
                  buildHookId: '',
                  name: 'Content Studio',
                  siteId: ''
                },
                {
                  buildHookId: '',
                  name: 'Content Studio',
                  siteId: ''
                }
              ]
            }
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10}
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', limit: 10, types: ['post']}
    }
  ]
}
