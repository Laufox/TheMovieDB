import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetMovie = (id) => {

   return useQuery( ['getMovie', id], () => TheMovieDB.getOneMovie(id) )

}

export default useGetMovie