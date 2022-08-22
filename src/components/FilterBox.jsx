import ListGroup from 'react-bootstrap/ListGroup'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FilterBox = ( { genres } ) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        navigate('/search')

    }
    
    return (
        <>
        
            <ListGroup horizontal>
                {
                    genres.map(genre => (
                        <ListGroup.Item key={genre.id}>
                            <Link to={`/genre/${genre.id}/${genre.name.replace(/\s/g, '-').toLowerCase()}?page=1`}>{genre.name}</Link>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

            <ListGroup>

                <ListGroup.Item>
                    <Link to={`/new?page=1`}>Latest</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/popular?page=1`}>Popular</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/toprated?page=1`}>Top Rated</Link>
                </ListGroup.Item>

            </ListGroup>

            <Form onSubmit={handleSubmit}>
                <Form.Control required type='text' />
                <Button type='submit'>Search</Button>
            </Form>

        </>
    )

}

export default FilterBox