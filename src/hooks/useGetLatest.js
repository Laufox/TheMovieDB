/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useGetLatest = (page) => {

    return useQuery( ['discoverLatest', page], () => TheMovieDB.getLatest(page) )

 }
 
 export default useGetLatest