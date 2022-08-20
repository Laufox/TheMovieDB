/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useDiscoverPopular = (page) => {

    return useQuery( ['discoverPopular', page], () => TheMovieDB.discoverPopular(page) )

 }
 
 export default useDiscoverPopular