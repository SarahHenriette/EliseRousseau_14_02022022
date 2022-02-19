/**
 * @return pagination of table
 */
function Pagination(props) {
    return (
        <div className="employeeList-table-pagination">
            <div>Showing {props.pageIndex + 1} to {props.pageSize} of {props.rows.length} entries</div>
            <div className="employeeList-table-pagination_buttons">
            <button onClick={() => props.previousPage()} disabled={!props.canPreviousPage}>
                {'<'}
            </button>{' '}
            <button>{props.pageIndex + 1}</button>{' '}
            <button onClick={() => props.nextPage()} disabled={!props.canNextPage}>
                {'>'}
            </button>{' '}
            </div>
        </div>
    )
}

export default Pagination