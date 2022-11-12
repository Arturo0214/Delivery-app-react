import React from 'react'
import Todo from '../assets/images/Todo.png'
import restaurant from '../assets/images/restaurantes.png'
import fastfu from '../assets/images/fasfu.png'
import supermarke from '../assets/images/supermarke.png'
import farmacias from '../assets/images/farmacias.png'
import mandado from '../assets/images/mandadito.png'
import review from '../assets/images/review.png'
import aZ from '../assets/images/aZ.png'



export default function Filters({sorting, reviews, categories, all}) {



  return (
    <>
    <div id="home">
        <section className="filter mt-0 pt-5 pb-0">
                <div className="mt-5">
                    <div className="categories mgt-large is-flex is-justify-content-space-between">
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a href="#" id="todos" className="has-text-centered" onClick={() => {all()}}>
                                <figure className="image">
                                    <img src={Todo}/>
                                </figure>
                                <strong>Todo</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a href="#" id="restaurantes" className="has-text-centered" onClick={(e) => {categories('restaurante')}}>
                                <figure className="image">
                                    <img src={restaurant}/>
                                </figure>
                                <strong>Restaurantes</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a href="#" id="fast-food" className="has-text-centered" onClick={() => {categories('fast-food')}}>
                                <figure className="image">
                                    <img src={fastfu}/>
                                </figure>
                                <strong>Comida Rapida</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a href="#" id="abarrotes" className="has-text-centered" onClick={() => {categories("abarrotes")}}>
                                <figure className="image">
                                    <img src={supermarke}/>
                                </figure>
                                <strong>Abarrotes</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a 
                            className="has-text-centered" 
                            onClick={() => {categories("local")}}>
                                <figure className="image">
                                    <img src={mandado}/>
                                </figure>
                                <strong>Mandaditos</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a 
                            className="has-text-centered" 
                            onClick={() => {categories("farmacia")}}>
                                <figure className="image">
                                    <img src={farmacias}/>
                                </figure>
                                <strong>Farmacia</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a className="has-text-centered" onClick={() => reviews()} >
                                <figure className="image">
                                    <img src={review}/>
                                </figure>
                                <strong>Calificacion</strong>
                            </a>
                        </div>
                        <div className="box mr-2 mb-2 is-flex is-align-items-center is-flex-direction-column">
                            <a id="alfabeto" className="has-text-centered" onClick={() => sorting()}>
                                <figure className="image">
                                    <img src={aZ}/>
                                </figure>
                                <strong>A-Z</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
