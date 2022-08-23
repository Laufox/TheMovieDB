import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetTrendingMovies = (timeFrame, page) => {

    return useQuery( ['trendingMovies', timeFrame, page], () => TheMovieDB.getTrendingMovies(timeFrame, page) )

 }
 
 export default useGetTrendingMovies