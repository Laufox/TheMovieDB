import Button from 'react-bootstrap/Button'

const Pagination = ( { onPageClick, currentPage, totalPages } ) => {
    return (
        <div className='pagination-container'>
            <Button 
                onClick={()=>{
                    onPageClick(-1)
                }}
                disabled = { currentPage <= 1 }
                className='pagination-button'
            >
                Prev
            </Button>

            <div className='page-info'>{ currentPage }/{ totalPages <= 500 ? totalPages : 500 }</div>

            <Button 
                onClick={()=>{
                    onPageClick(1)
                }}
                disabled = { currentPage >= (totalPages <= 500 ? totalPages : 500) }
                className='pagination-button'
            >
                Next
            </Button>
        </div>
    )
}

export default Pagination