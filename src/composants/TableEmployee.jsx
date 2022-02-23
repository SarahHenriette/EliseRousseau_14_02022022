import React from 'react'
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter } from 'react-table'
import './../sass/style.scss';
import pages from "../datas/pages.js";
import FilterTable from "./FilterTable.jsx";
import Pagination from "./Pagination";

/**
 * @return table of employee list
 * @param columns - name of columns 
 * @param data - datas of table
 */
export default function TableEmployee({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      nextPage,
      previousPage,
      setPageSize,
      state,
      state: { pageIndex, pageSize},
      preGlobalFilteredRows,
      setGlobalFilter,
    } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters, 
    useGlobalFilter,
    useSortBy, 
    usePagination,
    )
    // Render the UI for your table
    return (
      <div className="employeeList-table">
          <FilterTable pages={pages} pageSize={pageSize} 
          preGlobalFilteredRows={preGlobalFilteredRows} 
          state={state} setGlobalFilter={setGlobalFilter} 
          setPageSize={setPageSize}/>
          <table {...getTableProps()}>
            {/* header of table */}
            <thead>
                {<tr {...headerGroups[1].getHeaderGroupProps()}>
                    {headerGroups[1].headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? column.isSortedDesc ? " 🔽" : " 🔼" : "" }  
                      </span>  
                    </th>
                  ))}
                </tr>}
            </thead>
            {/* body of table */}
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <br />
          <Pagination 
          pageIndex={pageIndex} 
          rows={rows} 
          canPreviousPage={canPreviousPage} 
          canNextPage={canNextPage} 
          previousPage={previousPage} 
          nextPage={nextPage}/>
      </div>
      )
  }