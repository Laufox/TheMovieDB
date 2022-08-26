/**
 * Hook used to get data about movies by genre from the API service
 */

 import { useQuery } from 'react-query'
 import TheMovieDB from '../services/TheMovieDBAPI'
 
 const useGetMoviesByGenre = (genreId, page) => {

    return useQuery( ['moviesByGenre', genreId, page], () => TheMovieDB.getMoviesByGenre(genreId, page) )

 }
 
 export default useGetMoviesByGenre