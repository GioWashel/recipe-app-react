import React, {useState} from "react";
import './App.css';
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import{SearchBar} from "./components/SearchBar";
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        <SearchBar/>
        //if the current form is the login page, then we could 
        //currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />


      }
    </div>
  );
}

export default App;
