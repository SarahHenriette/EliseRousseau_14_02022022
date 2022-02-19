import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import './sass/style.scss';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from "./pages/EmployeeList"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<CreateEmployee />}/>
          <Route path="/employeeList" element={<EmployeeList />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
