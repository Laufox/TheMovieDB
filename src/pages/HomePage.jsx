import Container from 'react-bootstrap/Container'
import useGenres from '../hooks/useGenres'

const HomePage = () => {

	// Get query data from useGenre hook
	const { data: genres, error } = useGenres()

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			{
				error && (
					<p>There was an error</p>
				)
			}
			{
				genres && genres.genres.map( genre => <p key={genre.id}>{genre.name}</p> )
			}
		</Container>
	)
}

export default HomePage