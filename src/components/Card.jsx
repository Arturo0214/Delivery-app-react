import React from 'react'
import 'bulma/css/bulma.min.css';
import '../index.css';

export default function Card({cardInfo}) {

  
  return (
    <>
    
    <div className="column is-4-desktop is-6-tablet">
      <div className="card p-0">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={cardInfo.image} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <span className="tag is-danger">{cardInfo.localtype} </span>
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div className="content mb-0">
                    <p className="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">{cardInfo.name}</p>
                    <p className="mb-0 is-size-7">{cardInfo.ubicacion}</p>
                </div>
                <div className="ranking has-text-right">
                  <span className="icon-text">
                  <span  className="icon has-text-info">
                  <i data-favorite={cardInfo.id} className="mdi mdi-star mdi-18px is-active"></i>
                  </span> 
                  <span> {cardInfo.calificacion}</span>
                  </span>
               </div>
             </div>
         </div>
      </div>
    </div>
    </>
  )
}
