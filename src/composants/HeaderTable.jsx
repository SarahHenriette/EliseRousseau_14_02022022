import React from 'react'
import { useAsyncDebounce } from 'react-table'
import Select from 'react-select';

/**
 * @return contain of select  
 */
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <span>
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          style={{
            fontSize: '1.1rem',
          }}
        />
      </span>
    )
}

/**
 * @param { array } props - properties for display of the number employee by page
 */
function HeaderTable(props){
    return (  
      <div className="employeeList-table-header">
        <div className="employeeList-table-header_select">
            Show  <Select options={props.pages}  placeholder={props.pageSize}  onChange={e => {props.setPageSize(Number(e.value)) }}/>  entries
        </div>
        <GlobalFilter
            preGlobalFilteredRows={props.preGlobalFilteredRows}
            globalFilter={props.state.globalFilter}
            setGlobalFilter={props.setGlobalFilter}
            />
    </div>
    )
}

export default HeaderTable;