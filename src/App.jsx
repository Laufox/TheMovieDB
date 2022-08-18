import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import GenreList from './pages/GenreList'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path='/genre/:id' element={<GenreList />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
