import Movies from '@/views/Movies'
import HotMovie from '@/views/movie/HotMovie'
import UpcomingMovie from '@/views/movie/UpcomingMovie'

var MoviesRouter =  {
    path:'/Movies',
    component:Movies,
    redirect:'/movie/HotMovie',
    children:[
      {path:'/movie/HotMovie',component:HotMovie},
      {path:'/movie/UpcomingMovie',component:UpcomingMovie},
    ]
};
export default MoviesRouter
