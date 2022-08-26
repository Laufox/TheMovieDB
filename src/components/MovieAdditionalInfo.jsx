
const MovieAdditionalInfo = ( { date, language, score } ) => {

    return (
        
        <div className="movie-info-additional">
            <span>{ date ? date.slice(0, date.indexOf('-')) : 'XXXX' }</span>
            <span>|</span>
            <span>{ language.toUpperCase() }</span>
            <span>|</span>
            <span>{ score }</span>
        </div>

    )

}

export default MovieAdditionalInfo