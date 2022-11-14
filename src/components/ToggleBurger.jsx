import React from 'react'
import logoFinal from '../assets/images/logofinal.png'

export default function ToggleBurger() {
  /**
   * When the burger icon is clicked, the burger icon will toggle the class 'is-active' and the
   * dropdown menu will toggle the class 'is-hidden'
   */
  const toggle = () => {
  let burgerIcon = document.querySelector("#burger");
  let dropMenu = document.querySelector("#menuBurger");
  burgerIcon.classList.toggle('is-active');
  dropMenu.classList.toggle('is-hidden');
  };


  return (
    <>
    <a role="button" onClick={() => toggle()} className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="false"></span>
    <span aria-hidden="false"></span>
    <span aria-hidden="false"></span>
    <aside className="menu is-hidden" id="menuBurger">
      <div className="izquierda">
      <div className="blanco ">
      <a className="logo2">  
        <img src={logoFinal}/>
      </a>
      <a className="tache">
        <img src="https://cdn-icons-png.flaticon.com/512/2938/2938884.png"/>
      </a>
      <hr/>
      <br/>
      <button className="button gradient-gray is-rounded">
        <strong>Registra tu restaurante</strong>
      </button>
      <br/>
      <br/>
      <hr/>
      <p className="menu-label">
        Administración
      </p>
      <ul className="menu-list">
        <li><a>¿Quiénes somos?</a></li>
        <li><a>Contacta con nosotros</a></li>
      </ul>
      <hr/>
      <p className="menu-label">
        Información de contacto:
      </p>
      <ul>
      <li>
        <img className='icon'src='https://cdn-icons-png.flaticon.com/512/145/145807.png'/>
        <a href='https://www.linkedin.com/in/osvaldo-arturo-su%C3%A1rez-cruz-567828206/'>LinkedIn</a>
      <br/>
      <br/>
      </li>
      <li>
        <img className='icon' src='https://cdn-icons-png.flaticon.com/128/733/733553.png'/>
        <a href='https://github.com/Arturo0214'>Github</a>
      </li>
      <br/>
      <li>
      <p className='menu-label'>
      <img className='icon' src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png'/>
      WhatsApp:
      </p>
        <p className='menu-label'>55 83 35 20 96</p>
      </li>
      <br/>
      <li>
        <p className='menu-label'>
        Correo: </p>
        <p className="menu-label">osvaldosuarezcruz@gmail.com</p>
      </li>
      </ul>     
    </div>
      </div>
      <div className="derecha"></div>
    </aside>
    </a>
    </>
  )
}
