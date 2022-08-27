import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FilterBox = ( { genres } ) => {

    const [isBoxOpen, setIsBoxOpen] = useState(true)
    // State for search query typed in search form
    const [searchInput, setSearchInput] = useState('')
    // Call useNavigate for possibillity to redirect to other pages
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        // Prevent default browser behaviour
        e.preventDefault()
        // Redirect user to page for search result
        navigate(`/search?query=${searchInput}&page=1`)

    }
    
    return (
        <div className='filterbox'>

            <div>
                <ListGroup className={ isBoxOpen ? 'genre-list' : 'hidden'}>
                    {
                        // Render existing genres
                        genres.map(genre => (
                            <ListGroup.Item key={genre.id}>
                                <Link to={`/genre/${genre.id}/${genre.name.replace(/\s/g, '-').toLowerCase()}?page=1`}>{genre.name}</Link>
                            </ListGroup.Item>
                        ))
                    }

                </ListGroup>
                <div className='toggle-genre-list' onClick={() => {setIsBoxOpen( prevState => !prevState )}}>
                    { isBoxOpen ? '⬆️' : '⬇️' }
                </div>
            </div>

            <div>
                <ListGroup className={ isBoxOpen ? 'popular-list' : 'hidden'}>

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
            </div>

            <Form onSubmit={handleSubmit} className='movie-search'>
                <Form.Control 
                    required type='text' 
                    onChange={ e => setSearchInput(e.target.value) } 
                    placeholder='🔍 Search movie'
                />
                <Button type='submit'>Search</Button>
            </Form>

            <ListGroup className='show-all-movies'>
                <ListGroup.Item>
                    <Link to={`/`}>Show all movies</Link>
                </ListGroup.Item>
            </ListGroup>
            {/* <Button as={Link} to={'/'} variant='primary' className='btn-show-all' >Show all movies</Button> */}

        </div>
    )

}

export default FilterBox