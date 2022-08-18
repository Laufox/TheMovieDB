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

// Functions available to use in other files
const exports = {
    getGenres,
}

export default exports