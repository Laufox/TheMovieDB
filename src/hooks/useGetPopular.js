/**
 * Hook used to get data about the most popular movies from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useGetPopular = (page) => {

    return useQuery( ['discoverPopular', page], () => TheMovieDB.getPopular(page) )

 }
 
 export default useGetPopular