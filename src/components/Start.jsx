import 'bulma/css/bulma.min.css';
import '../App.css'
import email from '../assets/images/email.png'
import Navbar from './Navbar';
import Footer from './Footer';


function Start() {

  return (
    <>
      <>
        <Navbar></Navbar>
      </>
      <>
        <div className="line">
          <h1>
          <p className="title mb-5 "><strong>Recibe $50 gratis en tu primer pedido</strong></p>
          </h1>
          <div className="terms mb-5">
            <a>Términos y condiciones</a>
          </div>
        </div>
        <section className="pozole">
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
        </section>
      </>
      <>
        <Footer></Footer>
      </>
    </>
  )
}

export default Start;
