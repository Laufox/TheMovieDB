/**
 * Hook used to add movie to latest visited movie pages through the API service
 */

import { useQueryClient, useMutation } from 'react-query'
import TheMovieDB from '../services/TheMovieDBAPI'

const useAddToLatestViewedMovies = () => {

    const queryClient = useQueryClient()

    return useMutation(TheMovieDB.addToLatestViewedMovies, {

		onSuccess: () => {

			// Force browser to re render movies 
			queryClient.invalidateQueries('pastMovies')

		}

	})

}

export default useAddToLatestViewedMovies