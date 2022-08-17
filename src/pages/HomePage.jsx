import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import TheMovieDBAPI from '../services/TheMovieDBAPI'

const HomePage = () => {

	const { data, error } = useQuery('genres', TheMovieDBAPI.getGenres)

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			{
				error && (
					<p>There was an error</p>
				)
			}
			{
				data && data.genres.map( genre => <p key={genre.id}>{genre.name}</p> )
			}
		</Container>
	)
}

export default HomePage