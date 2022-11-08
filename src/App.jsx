import { useState, useEffect } from 'react'
import {Routes, Route, Navigate, Link} from "react-router-dom";
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import 'bulma/css/bulma.min.css';
import './App.css';
import myLogo from './assets/images/myLogo.png'
import email from './assets/images/email.png'


function App() {







  return (
    <>
    <>
    {/* <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/inicio' element={<Navigate to='/' replace />}/>
  
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<h3>Page not found 404</h3>}/> 
    </Routes> 
     */}
    </>
    <>
      <nav className='navbar is-fixed-top has-shadow is-flex-touch is-justify-content-space-between' role="navigation" aria-label='main-navigation'>
        <div className="navbar-brand">
          <div id="navbarBasicExample" className="navbar-menu is-flex">
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
            <div className="navbar-start">
              <div className='logo'>
              <a><img src={myLogo}/></a>
              </div>
              <a className="navbar-item">
                <strong>Inicio</strong>
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                      <strong>Ubicación</strong>
                  </a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                    <strong>Pedernales</strong>
                    </a>
                    <a className="navbar-item">
                      <strong>Tacámbaro</strong>
                    </a>
                    <a className="navbar-item">
                      <strong>Puruarán</strong>
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item">
                      <strong>Reportar un problema</strong>
                    </a>
                  </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <strong>Más</strong>
              </a>
      
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <strong>Acerca de nosotros</strong>
                </a>
                <a className="navbar-item">
                    <strong>Empleo</strong>
                </a>
                <a className="navbar-item">
                    <strong>Contacto</strong>
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                    <strong>Reportar un problema</strong>
                </a>
              </div>
            </div>
            <div className="navbar-end is-flex-touch is-justify-content-space-between">
            <div className="navbar-item">
                <form className="field has-addons" id="busqueda">
                    <div className="control">
                        <input id="inputBusqueda" autoComplete="off" className="input is-rounded has-background-light" type="text" placeholder="Busca tu Mandadito"/>
                    </div>
                    <div className="control">
                        <button type="button" className="button is-rounded is-light">
                            <span className="icon is-left">
                                <i className="mdi mdi-magnify mdi-24px"></i>
                            </span>
                        </button>
                    </div>
                </form>
              </div>
                <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button gradient-gray is-rounded">
                      <strong>Inicia Sesión</strong>
                    </a>
                  </div>
                </div>
                    <div className="buttons">
                      <a className="button is-black is-rounded">
                        <span className="icon is-medium">
                        <i className="mdi mdi-cart"></i>
                        </span>
                        <b className="is-size-7">0</b>
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="line">
        <h1>
        <p className="title mb-2 "><strong>Recibe $50 gratis en tu primer pedido</strong></p>
        </h1>
        <div className="terms">
          <a>Términos y condiciones</a>
        </div>
      </div>
      <div className="pozole">
        <img src='https://i.blogs.es/e5febf/como-hacer-pozole-rojo-de-puerco-receta-de-antojito-mexicano-1-/1366_2000.jpg'></img>
        <div className="field">
          <p className='title'>Regístrate</p>
          <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" autoComplete='off' placeholder="Email"/>
          <span className="icon is-small is-left">
            <img src={email}/>
          </span>
          <br/>
          <br/>
          </p>
          <div className="field">
            <p className="control has-icons-left">
            <input className="input" type="password" autoComplete='off' placeholder="Contraseña"/>
            <span className="icon is-medium is-left">
              <img src='https://cdn-icons-png.flaticon.com/512/6843/6843728.png'/>
            </span>
            <br/>
            <br/>
            <p className="control has-icons-left">
            <input className="input" type="text" autoComplete='off' placeholder="Celular"/>
            <span className="icon is-medium is-left">
              <img src='https://cdn-icons-png.flaticon.com/512/4213/4213179.png'/>
            </span>
            </p>
            </p>
            <div className="field">
              <label className="label">Estado</label>
              <div className="control">
          <div className="select">
            <select>
                <option>Selecciona</option>
                <option>CDMX</option>
                <option>Michoacán</option>
                <option>Guanajuato</option>
                <option>Morelos</option>
              </select>
            </div>
          </div>
        </div>
          </div>
          <a className="button gradient is-rounded">
            <strong>Regístrate</strong>
          </a>
        </div>
      </div>
     <footer className="barra-inferior">
       <div className="row">
         <strong>Mandaditos</strong>&copy; 2022 
         <span className="mx-2">&middot;</span>
           <p>Aviso de privacidad</p>
           <span className="mx-2">&middot;</span>
           <p>Términos y condiciones</p>
       </div>
       <div className="bot-derecha is-fixed-bottom">
         <div className="mundito">
           <img src="https://cdn-icons-png.flaticon.com/512/1246/1246334.png" style={{width: 20}}/>
         </div>

         <span className="mx-2">&middot;</span>
         <div className="mx">
           <p>Español (MX)</p>
         </div>
         <span className="mx-2">&middot;</span>
            <div className="mxn">
                <p>$ MXN</p>
            </div>
            <span className="mx-2">&middot;</span>
            <div className="ayuda">
                <p>Ayuda</p>
            </div>
            <span className="mx-2">&middot;</span> Todos los derechos reservados
       </div>
     </footer>
    </>
    </>
  )
}

export default App;
