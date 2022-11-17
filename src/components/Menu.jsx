import React from 'react'

export default function Menu({products}) {
  

  return (
   <>
    <div className="column is-4-desktop is-6-tablet">
      <div className="card p-0">
        <div className='card-content'>
          <span>{products.name}</span>
        </div>
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={products.image} alt="Placeholder image"/>
          </figure>
        </div>
      </div>
    </div>
    </>
  )
}
