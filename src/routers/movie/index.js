
export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  
  children : [
    {
      path:'city',
      component:()=>import('@/components/city')
    },
    {
      path:'nowPlaying',
      component:()=>import('@/components/NowPlaying')
    },
    {
      path:'comingSoon',
      component:()=>import('@/components/ComingSoon')
    },
    {
      path:'search',
      component:()=>import('@/components/Search')
    },

  ]
}