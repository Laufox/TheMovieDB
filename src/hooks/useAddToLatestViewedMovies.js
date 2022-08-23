import { useQueryClient, useMutation } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useAddToLatestViewedMovies = () => {

    const queryClient = useQueryClient()

    return useMutation(TheMovieDB.addToLatestViewedMovies, {
		onError: (error) => {
			
            console.log('something went wrong', error)

		},

		onSuccess: () => {

			queryClient.invalidateQueries('pastMovies')

		}
	})

}

export default useAddToLatestViewedMovies