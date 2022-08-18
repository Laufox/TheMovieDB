import Container from 'react-bootstrap/Container'
import useGenres from '../hooks/useGenres'

const HomePage = () => {

	const { data, error } = useGenres()

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