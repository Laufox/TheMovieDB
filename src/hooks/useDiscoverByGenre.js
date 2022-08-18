/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useDiscoverByGenre = (genreId, page) => {

    return useQuery( ['discoverByGenre', genreId, page], () => TheMovieDB.discoverGenre(genreId, page) )

 }
 
 export default useDiscoverByGenre