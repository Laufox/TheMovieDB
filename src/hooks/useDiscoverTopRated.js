/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useDiscoverTopRated = (page) => {

    return useQuery( ['discoverTopRated', page], () => TheMovieDB.discoverTopRated(page) )

 }
 
 export default useDiscoverTopRated