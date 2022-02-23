import employees from "../datas/employeesList.js";

/**
 * @return save datas of employee in the array employees
 */
 function SaveEmployees(e, firstname, lastname, street, city, zipCode, setFirstname, setLastname, setStreet, setCity, setZipCode, setModalIsOpen, setDateBirth, setStartDate) {
     //If all the fields are not empty
    if(firstname !== "" && lastname!== "" && street !== "" && city !== "" &&  zipCode !== "" &&
    document.getElementById('department').querySelector(".css-qc6sy-singleValue") &&
    document.getElementById('state').querySelector(".css-qc6sy-singleValue") &&
    document.getElementById('date-of-birth').value !== "" && 
    document.getElementById('start-date').value !== ""
)
{
    //I create a constant that contains the employee's data
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
    //I push them into the employee array
    employees.push(employee) 

    //I open the modal
    setModalIsOpen(true)

    //I empty all the fields of the form     
    setFirstname("")
    setLastname("")
    setStreet("")
    setCity("")
    setZipCode("")
    setDateBirth('')
    setStartDate('')
    e.target.querySelector('#department').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
    e.target.querySelector('#state').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
} else {
    alert('Veuillez remplir le formulaire')
}
  
}

export default SaveEmployees  