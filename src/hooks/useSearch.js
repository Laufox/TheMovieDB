import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useSearch = (query, page) => {

    return useQuery( ['useSearch', query, page], () => TheMovieDB.searchMovie(query, page) )

}

export default useSearch