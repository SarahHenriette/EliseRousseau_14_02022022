function ResetForm(e, setFirstname, setLastname, setStreet, setCity, setZipCode,  setDateBirth, setStartDate) {
    // if(firstname !== "" && lastname!== "" && street !== "" && city !== "" &&  zipCode !== "" &&
    // document.getElementById('department').querySelector(".css-qc6sy-singleValue") &&
    // document.getElementById('state').querySelector(".css-qc6sy-singleValue") &&
    // document.getElementById('date-of-birth').value !== "" && 
    // document.getElementById('start-date').value !== ""
    // ){
        setFirstname("")
        setLastname("")
        setStreet("")
        setCity("")
        setZipCode("")
        setDateBirth('')
        setStartDate('')
        e.target.querySelector('#department').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
        e.target.querySelector('#state').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
    // }
  
}

export default ResetForm