/**
 * Hook used to get data about all movies
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useGetAllMovies = (page) => {

    return useQuery( ['allMovies', page], () => TheMovieDB.getAllMovies(page) )

 }
 
 export default useGetAllMovies