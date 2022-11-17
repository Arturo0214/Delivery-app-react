import React from 'react'

export default function Menu({menuInfo}) {
  return (
   <>
   <div className="column is-4-desktop is-6-tablet">
      <div className="card p-0" onClick={() => showInfo(cardInfo.id)}>
        <div className="card-image">
          <h1>{menuInfo.name}</h1>
          <figure className="image is-16by9">
            <img src={menuInfo.image} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
          </div>
             </div>
         </div>
   </>
  )
}
