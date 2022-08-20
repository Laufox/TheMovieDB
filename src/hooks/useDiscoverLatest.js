/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useDiscoverLatest = (page) => {

    return useQuery( ['discoverLatest', page], () => TheMovieDB.discoverLatest(page) )

 }
 
 export default useDiscoverLatest