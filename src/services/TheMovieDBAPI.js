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
const getMoviesByGenre = async (genreId, page = 1) => {

    const respons = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&with_genres=${genreId}&page=${page}`)

    return respons.data

}

const getLatest = async (page = 1) => {

    const respons = await axios.get(`/movie/now_playing?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

const getPopular = async (page = 1) => {

    const respons = await axios.get(`/movie/popular?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

const getTopRated = async (page=1) => {

    const respons = await axios.get(`/movie/top_rated?api_key=${apiKey}&page=${page}`)

    return respons.data

}

const getOneMovie = async (id) => {

    const respons = await axios.get(`/movie/${id}?api_key=${apiKey}&append_to_response=credits,similar`)

    return respons.data

}

const getOneActor = async (id) => {

    const respons = await axios.get(`/person/${id}?api_key=${apiKey}&append_to_response=movie_credits`)

    return respons.data

}

const searchMovie = async(query, page) => {

    const respons = await axios.get(`/search/movie?api_key=${apiKey}&include_adult=false&query=${query}&page=${page}`)

    return respons.data

}

const getTrendingMovies = async (timeFrame, page = 1) => {

    const respons = await axios.get(`/trending/movie/${timeFrame}?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

const getLatestViewedMovies = () => {

    return JSON.parse(window.localStorage.getItem("test"))

}

const addToLatestViewedMovies = async (movieId) => {

    let currentLocalItems = JSON.parse(window.localStorage.getItem("test"))
    console.log(currentLocalItems)

    if ( currentLocalItems && currentLocalItems.find( item => Number(item.id) === Number(movieId) ) ) {
        return
    }

    let movie = await axios.get(`/movie/${movieId}?api_key=${apiKey}`)

    if (currentLocalItems) {
        if (currentLocalItems.length >= 10) {
            currentLocalItems[0] = movie.data
        } else {
            currentLocalItems = [...currentLocalItems, movie.data]
        }
    } else {
        currentLocalItems = [movie.data]
    }
        
    window.localStorage.setItem("test", JSON.stringify(currentLocalItems))

}

// Functions available to use in other files
const exports = {
    getGenres,
    getMoviesByGenre,
    getLatest,
    getPopular,
    getTopRated,
    getOneMovie,
    getOneActor,
    searchMovie,
    getLatestViewedMovies,
    addToLatestViewedMovies,
    getTrendingMovies,
}

export default exports