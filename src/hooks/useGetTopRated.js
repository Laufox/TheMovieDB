/**
 * Hook used to get data about top rated movies from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useGetTopRated = (page) => {

    return useQuery( ['discoverTopRated', page], () => TheMovieDB.getTopRated(page) )

 }
 
 export default useGetTopRated