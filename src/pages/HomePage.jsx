import useGetGenres from '../hooks/useGetGenres'
import PrevSeenMovies from '../components/PrevSeenMovies'
import AlertBox from '../components/AlertBox'
import FilterBox from '../components/FilterBox'
import LoadingSpinner from '../components/LoadingSpinner'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const HomePage = () => {

	// Get query data from useGetGenres hook
	const { data: genres, error, isError, isLoading } = useGetGenres()

	return (
		<Container fluid className="py-3">
			<h1>The Movie DB Collection</h1>

			{
				isLoading && <LoadingSpinner />
			}
			
			{
				isError && <AlertBox variant={'danger'} headingMessage={'Failed to load'} bodyMessage={error.message} />
			}

			{
				genres && (
					<div>
						<header>
							<FilterBox genres={genres.genres} />
						</header>
						<main className='main-outlet'>
							<div className='outlet-wrapper'>
								<Outlet />
							</div>
							
							<aside>
								{
									<PrevSeenMovies />
								}
							</aside>
						</main>
					</div>
				)
			}

		</Container>
	)
}

export default HomePage