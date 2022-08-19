import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const FilterBox = ( { genres } ) => {
    
    return (
        <ListGroup horizontal>
            {
                genres.map(genre => (
                    <ListGroup.Item key={genre.id}>
                        <Link to={`/genre/${genre.id}/${genre.name.replace(/\s/g, '-').toLowerCase()}`}>{genre.name}</Link>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )

}

export default FilterBox