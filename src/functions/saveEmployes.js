import employees from "../constantes/employeesList.js";
 
/**
 * @return save datas of employee in the table employees
 */
 function saveEmployees(firstname, lastname, street, city, zipCode) {
    const employee = {
        firstName: firstname,
        lastName: lastname,
        dateOfBirth: document.getElementById('date-of-birth').value,
        startDate: document.getElementById('start-date').value,
        department: document.getElementById('department').querySelector(".css-qc6sy-singleValue").innerHTML,
        street: street,
        city: city,
        state: document.getElementById('state').querySelector(".css-qc6sy-singleValue").innerHTML,
        zipCode: zipCode
    }
    employees.push(employee)        
}

export default saveEmployees  