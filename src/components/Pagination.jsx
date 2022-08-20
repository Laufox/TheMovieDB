import Button from 'react-bootstrap/Button'

const Pagination = ( { onPageClick, currentPage, totalPages } ) => {
    return (
        <>
            <Button 
                onClick={()=>{
                    onPageClick(-1)
                }}
                disabled = { currentPage <= 1 }
            >
                prev page
            </Button>
            <p>You are on page: { currentPage }/{ totalPages <= 500 ? totalPages : 500 }</p>
            <Button 
                onClick={()=>{
                    onPageClick(1)
                }}
                disabled = { currentPage >= (totalPages <= 500 ? totalPages : 500) }
            >
                next page
            </Button>
        </>
    )
}

export default Pagination