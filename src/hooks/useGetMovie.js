/**
 * Hook used to get data about a single movie from the API service
 */

import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetMovie = (id) => {

   return useQuery( ['getMovie', id], () => TheMovieDB.getOneMovie(id) )

}

export default useGetMovie