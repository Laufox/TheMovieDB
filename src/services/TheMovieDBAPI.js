import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const apiKey = import.meta.env.VITE_TMDB_API_KEY

const getGenres = async () => {
    const respons = await axios.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)

    return respons.data
}

const exports = {
    getGenres,
}

export default exports