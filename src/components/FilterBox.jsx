import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const FilterBox = ( { genres } ) => {
    
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

        </>
    )

}

export default FilterBox