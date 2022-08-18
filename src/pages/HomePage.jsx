import Container from 'react-bootstrap/Container'
import AlertBox from '../components/AlertBox'
import FilterBox from '../components/FilterBox'
import LoadingSpinner from '../components/LoadingSpinner'
import useGenres from '../hooks/useGenres'
import { Outlet } from 'react-router-dom'

const HomePage = () => {

	// Get query data from useGenre hook
	const { data: genres, error, isError, isLoading } = useGenres()

	return (
		<Container className="py-3">
			<h1>The Movie DB Collection</h1>

			{
				isLoading && <LoadingSpinner />
			}
			
			{
				isError && <AlertBox variant={'danger'} message={error.message} />
			}

			{
				// genres && genres.genres.map( genre => <p key={genre.id}>{genre.name}</p> )
			}

			{
				genres && (
					<div>
						<header>
							<FilterBox genres={genres.genres} />
						</header>
						<main>
							<Outlet />
						</main>
					</div>
				)
			}

		</Container>
	)
}

export default HomePage