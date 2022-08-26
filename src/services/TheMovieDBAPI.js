import axios from 'axios'

// Set base URL for att future requests
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// Get user API key from env file
const apiKey = import.meta.env.VITE_TMDB_API_KEY

/**
 * Function that returns movie genres from API
 */
const getGenres = async () => {
    
    // Get data from API
    const respons = await axios.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)

    return respons.data
}

/**
 * Function that returns array of movies from a specific genre
 */
const getMoviesByGenre = async (genreId, page = 1) => {

    // Get data from API
    const respons = await axios.get(`/discover/movie?api_key=${apiKey}&include_adult=false&with_genres=${genreId}&page=${page}`)

    return respons.data

}

/**
 * Function that return current theatre movies
 */
const getLatest = async (page = 1) => {

    // Get data from API
    const respons = await axios.get(`/movie/now_playing?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

/**
 * Function that return most popular movies
 */
const getPopular = async (page = 1) => {

    // Get data from API
    const respons = await axios.get(`/movie/popular?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

/**
 * Function that return top rated movies
 */
const getTopRated = async (page=1) => {

    // Get data from API
    const respons = await axios.get(`/movie/top_rated?api_key=${apiKey}&page=${page}`)

    return respons.data

}

/**
 * Function that return one specific movie
 */
const getOneMovie = async (id) => {

    // Get data from API
    const respons = await axios.get(`/movie/${id}?api_key=${apiKey}&append_to_response=credits,similar`)

    return respons.data

}

/**
 * Function that return one specific actor
 */
const getOneActor = async (id) => {

    // Get data from API
    const respons = await axios.get(`/person/${id}?api_key=${apiKey}&append_to_response=movie_credits`)

    return respons.data

}

/**
 * Function that return results from a search query
 */
const searchMovie = async(query, page) => {

    // Get data from API
    const respons = await axios.get(`/search/movie?api_key=${apiKey}&include_adult=false&query=${query}&page=${page}`)

    return respons.data

}

/**
 * Function that return trending movies
 */
const getTrendingMovies = async (timeFrame, page = 1) => {

    // Get data from API
    const respons = await axios.get(`/trending/movie/${timeFrame}?api_key=${apiKey}&include_adult=false&page=${page}`)

    return respons.data

}

/**
 * Function that return latest seen movies from browsers local storage
 */
const getLatestViewedMovies = () => {

    return JSON.parse(window.localStorage.getItem("pastmovies"))

}

/**
 * Function that adds a movie to browsers local storage for latest movies
 */
const addToLatestViewedMovies = async (movieId) => {

    // Get movies that are currently saved in local storage
    let currentLocalItems = JSON.parse(window.localStorage.getItem("pastmovies"))

    // If movie already exists in loaclstorage, break out of the function
    if ( currentLocalItems && currentLocalItems.find( item => Number(item.id) === Number(movieId) ) ) {
        return
    }

    // Get API data about the movie thats supposed to get added to local storage
    let movie = await axios.get(`/movie/${movieId}?api_key=${apiKey}`)

    if (currentLocalItems) {
        // If current list array has no more space, replace first item with new movie
        if (currentLocalItems.length >= 10) {
            currentLocalItems[0] = movie.data
        } else {
            // Otherwise, attach new movie to the other movies in list
            currentLocalItems = [...currentLocalItems, movie.data]
        }
    } else {
        // If current list is empty, apply the new movie to it
        currentLocalItems = [movie.data]
    }
        
    // Apply new list to browsers local storage
    window.localStorage.setItem("pastmovies", JSON.stringify(currentLocalItems))

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