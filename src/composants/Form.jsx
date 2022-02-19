import React, { useState } from 'react'
import Select from 'react-select';
import { DatePicker} from "simple-datepicker-react"; 
import departments from '../constantes/departments.js';
import states from '../constantes/states.js';
import save from "../functions/saveEmployes.js";
import Modal from 'react-modal';
import customStyles from "../styled/customStyleModal.js";

/**
 * @return form for create employee 
 * @func saveEmployee - save datas of employee
 * @const { booleen } modalIsOpen - verify if modal is open or close
 * @func closeModal - close the modale
 *
 */
function Form () {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [dateBirth, setDateBirth] = useState('')
    const [startDate, setStartDate] = useState('')

    function saveEmployee(e) {
        e.preventDefault()
        if(firstname !== "" && lastname!== "" && street !== "" && city !== "" &&  zipCode !== "" &&
            document.getElementById('department').querySelector(".css-qc6sy-singleValue") &&
            document.getElementById('state').querySelector(".css-qc6sy-singleValue") &&
            document.getElementById('date-of-birth').value !== "" && 
            document.getElementById('start-date').value !== ""
        )
        {
            save(firstname, lastname, street, city, zipCode)
            setFirstname("")
            setLastname("")
            setStreet("")
            setCity("")
            setZipCode("")
            setIsOpen(true)
            setDateBirth('')
            setStartDate('')
            e.target.querySelector('#department').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
            e.target.querySelector('#state').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."

        } else {
            alert('Veuillez remplir le formulaire')
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <form className="createEmployee-body_form" id="createEmployee-body_form" action="#" onSubmit={saveEmployee}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker idInput="date-of-birth" dateInput={dateBirth} updateDate={setDateBirth}/>
                <label htmlFor="start-date" >Start Date</label>
                <DatePicker idInput="start-date" dateInput={startDate} updateDate={setStartDate}/>
                <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"  value={street} onChange={(e)=>setStreet(e.target.value)}/>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <label htmlFor="state">State</label>
                    <Select options={states} id="state" aria-label="state" className="select"/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>
                </fieldset>
                <label htmlFor="department">Department</label>
                <Select options={departments} id="department" aria-label="department" className="select"/>
                <button  className="button-submit" >Save</button>
                {modalIsOpen === true ?
                    <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    style={customStyles}
                    >
                        <div onClick={closeModal} className="createEmployee-body-button-close">X</div>
                        <div className="modal">Employee create !</div>
                    </Modal>
                : null}
        </form>
    )
}


export default Form