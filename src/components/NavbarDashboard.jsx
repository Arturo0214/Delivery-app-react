import React from 'react'
import myLogo from '../assets/images/myLogo.png'

export default function NavbarDashboard({signOut}) {

  return (
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
                    <button 
                    className="button gradient is-rounded"
                    onClick={signOut} 
                    >
                    <strong>Cerrar Sesión</strong>
                    </button>
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
  )
}