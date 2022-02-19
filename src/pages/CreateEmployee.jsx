import React from 'react'
import { Link } from "react-router-dom";
import  Form  from "../composants/Form"
import './../sass/style.scss';

/**
 * @return page for add employee
 */
export default function CreateEmployee () {
    return(
        <div className="createEmployee">
            <div className="createEmployee-header">
                <h1>HRnet</h1>
            </div>
            <div className="createEmployee-body">
                <Link to="/employeeList" className="createEmployee-body_link">View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form/>
            </div>
        </div>
    )
}