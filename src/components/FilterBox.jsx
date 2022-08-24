import ListGroup from 'react-bootstrap/ListGroup'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef } from 'react'

const FilterBox = ( { genres } ) => {

    const [searchInput, setSearchInput] = useState('')
    const searchRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        navigate(`/search?query=${searchInput}&page=1`)

    }
    
    return (
        <div className='filterbox'>
        
            <ListGroup className='genre-list'>
                {
                    genres.map(genre => (
                        <ListGroup.Item key={genre.id}>
                            <Link to={`/genre/${genre.id}/${genre.name.replace(/\s/g, '-').toLowerCase()}?page=1`}>{genre.name}</Link>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

            <ListGroup className='popular-list'>

                <ListGroup.Item>
                    <Link to={`/new?page=1`}>Latest</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/popular?page=1`}>Popular</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/toprated?page=1`}>Top Rated</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/trending/day?page=1`}>Trending 24h</Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/trending/week?page=1`}>Trending 7d</Link>
                </ListGroup.Item>

            </ListGroup>

            <Form onSubmit={handleSubmit} className='movie-search'>
                <Form.Control 
                    required type='text' 
                    onChange={ e => setSearchInput(e.target.value) } 
                    ref={ searchRef }
                    placeholder='🔍 Search movie'
                />
                <Button type='submit'>Search</Button>
            </Form>

        </div>
    )

}

export default FilterBox