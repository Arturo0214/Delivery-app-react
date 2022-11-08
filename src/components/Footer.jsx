import React from 'react'

export default function Footer() {
  return (
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
  )
}
