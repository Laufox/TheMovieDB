import { useParams } from "react-router-dom"

const GenreList = () => {
    const { id } = useParams()
    return (
        <p>Results for genre with id { id }</p>
    )
}

export default GenreList