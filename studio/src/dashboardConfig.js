export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec76b279cce6764db1f3655',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-basho-thebigsur-studio',
                  apiId: 'b8515469-c663-4651-9254-08d75570e958'
                },
                {
                  buildHookId: '5ec76b27d9b78775c82a12d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-basho-thebigsur',
                  apiId: '5986f3a7-3efa-4f0a-99b3-cce5d0a4eac4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LEMSingapore/sanity-gatsby-basho-thebigsur',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-basho-thebigsur.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
