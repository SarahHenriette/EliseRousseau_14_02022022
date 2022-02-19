import React from 'react'
import { Link } from "react-router-dom";
import Table from "./../composants/Table";
import './../sass/style.scss';
import columns from '../constantes/columnsTableEmployee.js';
import Styles from "../styled/customStyleTableEmployee.js";
import employees from "../constantes/employeesList"

/**
 * @return table of the employee list
 * @const { array } data - contains datas of employee list
 */
export default function EmployeeList () {
    const data = React.useMemo(() => employees, [])
    return(
        <div className="employeeList">
                <h1>Current Employees</h1>
                <Styles>
                   {data !== null && data.length > 0? 
                    <Table columns={columns} data={data}/>
                    : <p className="employeeList-alert">Aucun employé(e) enregistré !</p>}
                </Styles>
                <Link to="/" className="employeeList_link">Home</Link>
        </div>
    )
}