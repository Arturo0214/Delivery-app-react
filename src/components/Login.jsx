import React from 'react'
import { useEffect, useState } from "react";
import 'bulma/css/bulma.min.css';
import '../App.css'
import email from '../assets/images/email.png'
import {Routes, Route, Navigate, Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Login() {

  const [credentials, setcredentials] = useState({});
  const [isUserActive, setisUserActive] = useState(false);
  
  const USER_HARDCODED = 'osvaldosuarezcruz@gmail.com';
  const PASSWORD_HARDCODED = '2osvaldo';


  useEffect(() => {
    console.log("nuevo valor", credentials);
  }, [credentials])
  

  const handleInputValue = ({target: {value, name}}) => {
    setcredentials({ ...credentials, [name]: value})
  }

  const submitForm = async () => {
    if (
      credentials.user === USER_HARDCODED &&
      credentials.password === PASSWORD_HARDCODED
    ) {
      console.log("login exitoso");
      setisUserActive(true);

    } else console.log("NO VAS A PASAR ");
  }

  
  return (
  <>
    {isUserActive ? (
      <Dashboard logout={() => setisUserActive(false)} />
    ) : (
      <>
       <Navbar funcion={() => {return(1+2)}}></Navbar>
      <>
      <div className='login'>
        <div className="title">
          Inicia Sesión
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
          <input 
          className="input"
          label='Email'
          name='user' 
          type="user"
          variant="outlined"
          placeholder="Email"
          onChange={handleInputValue}
          value={credentials.user || ""}/>
              <span className="icon is-small is-left">
                <img src={email}/>
              </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
          </p>
       </div>
       <div className="field">
        <p className="control has-icons-left">
        <input 
        className="input" 
        type="password" 
        name='password'
        placeholder="Password"
        onChange={handleInputValue}
        value={credentials.password || ""}
        />
        <span className="icon is-medium is-left">
          <img src='https://cdn-icons-png.flaticon.com/512/6843/6843728.png'/>
        </span>
        </p>
       </div>
        <div className="field">
      <p className="control">
        <button 
        onClick={() => submitForm()}
        className="button gradient2 is-rounded">
         <strong>Login</strong>
        </button>
      </p>
       </div>
      </div>
        </>
         <Footer></Footer> 
      </>
    )}
  </>
  );
}