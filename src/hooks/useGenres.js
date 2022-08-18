/**
 * Hook used to get data about all genres from the API service
 */

import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGenres = () => {
    return useQuery('genres', TheMovieDB.getGenres)
}

export default useGenres