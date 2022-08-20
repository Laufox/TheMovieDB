import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import GenreList from './pages/GenreList'
import Latest from './pages/Latest'
import Popular from './pages/Popular'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path='/genre/:id/:genre' element={<GenreList />} />
					<Route path='/new' element={<Latest />} />
					<Route path='/popular' element={<Popular />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
