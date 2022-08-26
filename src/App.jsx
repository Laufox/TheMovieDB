import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AllMoviesPage from './pages/AllMoviesPage'
import GenreList from './pages/GenreList'
import Latest from './pages/Latest'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import SearchPage from './pages/SearchPage'
import TrendingPage from './pages/TrendingPage'
import Navigation from './components/Navigation'
import './assets/scss/App.scss'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path='/genre/:id/:genre' element={<GenreList />} />
					<Route path='/new' element={<Latest />} />
					<Route path='/popular' element={<Popular />} />
					<Route path='/toprated' element={<TopRated />} />
					<Route path='/movie/:id' element={<MoviePage />} />
					<Route path='/actor/:id' element={<ActorPage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/trending/:timeframe' element={<TrendingPage />} />
					<Route path="/" element={<AllMoviesPage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
