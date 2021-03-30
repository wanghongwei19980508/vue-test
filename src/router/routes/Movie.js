import Movies from '@/views/Movies'
import HotMovie from '@/views/movie/HotMovie'
import UpcomingMovie from '@/views/movie/UpcomingMovie'

var MoviesRouter =  {
    path:'/Movies',
    component:Movies,
    children:[
      {path:'/HotMovie',component:HotMovie},
      {path:'/UpcomingMovie',component:UpcomingMovie},
    ]
};
export default MoviesRouter
