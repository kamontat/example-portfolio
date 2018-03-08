// import axios from 'axios'
import information from './src/models/personal'

export default {
  getSiteData: () => ({
    title: 'My Awesome Website',
    lastBuilt: Date.now()
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({ information })
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post
      //     })
      //   }))
      // },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  },
  // Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
  //   <Html lang='en-US'>
  //     <Head>
  //       <meta charSet='UTF-8' />
  //       <meta name='viewport' content='width=device-width, initial-scale=1' />
  //     </Head>
  //     <Body>{children}</Body>
  //   </Html>
  // ),
  onStart: ({ devServerConfig }) => {
    console.log('The dev server is working!')
    // console.log(devServerConfig)
  },
  onBuild: async () => {
    console.log('Everything is done building!')
  }
}
