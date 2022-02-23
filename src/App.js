import React, {useState} from "react";
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"

import { EmployeeContext } from "./context/EmployeeContext"

function App(){
    const [employees, setEmployees] = useState([])
    return (
        <EmployeeContext.Provider value={{employees, setEmployees}}>
            <CreateEmployee/>
            <EmployeeList/>
        </EmployeeContext.Provider>
    )
}

export default App;