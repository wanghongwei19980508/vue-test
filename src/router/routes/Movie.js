import Movies from '@/views/Movies'
import HotMovie from '@/views/movie/HotMovie'
import UpcomingMovie from '@/views/movie/UpcomingMovie'
import FilmDetails from '@/views/movie/FilmDetails'

var MoviesRouter = {
  path: '/Movies',
  component: Movies,
  redirect: '/movie/HotMovie',
  children: [
    { path: '/movie/HotMovie', component: HotMovie },
    { path: '/movie/UpcomingMovie', component: UpcomingMovie },
    { path: '/movie/FilmDetails', component: FilmDetails },
  ]
};
export default MoviesRouter
