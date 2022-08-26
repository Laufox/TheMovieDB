/**
 * Hook used to get data about a single actor from the API service
 */

import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetActor = (id) => {

    return useQuery( ['getActor', id], () => TheMovieDB.getOneActor(id) )

}

export default useGetActor