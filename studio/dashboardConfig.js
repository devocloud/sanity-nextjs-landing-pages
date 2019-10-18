export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5da95cb19fdb9de6b169082e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wmghva5i',
                  apiId: '8450074d-011f-44e6-a0cd-d5ffb1294e34'
                },
                {
                  buildHookId: '5da95cb16de98fbbd6facba4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p6gtehpe',
                  apiId: '6ffc53f2-d96f-44c7-ad7a-a4a973c20f28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devocloud/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p6gtehpe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
