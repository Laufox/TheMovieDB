import { useQuery } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useGetActor = (id) => {

    return useQuery( ['getActor', id], () => TheMovieDB.getOneActor(id) )

}

export default useGetActor