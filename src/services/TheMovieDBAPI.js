import axios from 'axios'

// Set base URL for att future requests
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get user API key from env file
const apiKey = import.meta.env.VITE_TMDB_API_KEY

/**
 * Function that returns movie genres from API
 */
const getGenres = async () => {
    
    const respons = await axios.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)

    return respons.data
}

/**
 * Function that returns array of movies from a specific genre
 */
const discoverGenre = async (genreId, page = 1) => {

    const respons = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&with_genres=${genreId}&page=${page}`)

    return respons.data

}

const discoverLatest = async (page = 1) => {

    const respons = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&sort_by=release_date.desc&page=${page}`)

    return respons.data

}

const discoverPopular = async (page = 1) => {

    const respons = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&sort_by=popularity.desc&page=${page}`)

    return respons.data

}

// Functions available to use in other files
const exports = {
    getGenres,
    discoverGenre,
    discoverLatest,
    discoverPopular,
}

export default exports