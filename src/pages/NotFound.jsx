import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<Container className="py-3">
			<h1>Sorry, that page could not be found 😔</h1>
			<Link to={'/'}>Back to start</Link>
		</Container>
	)
}

export default NotFound
