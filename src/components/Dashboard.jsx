import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer'
import NavbarDashboard from './NavbarDashboard'
import 'bulma/css/bulma.min.css';
import Card from './Card';
import Filters from './Filters';

export default function Dashboard({logout}) {

  const [restaurants, setRestaurants] = useState([])
  const [filtersArray, setFiltersArray] = useState([])

  const fetchApi = async () => {
    const BASE_URL = "http://localhost:3000/";
    try {
      const results = await axios.get(`${BASE_URL}restaurants`);
      console.log("results", results.data);
      setFiltersArray(results.data);
      setRestaurants(results.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("change state restaurants", restaurants);
  }, [restaurants]);
  
  useEffect(() => {
  fetchApi();
  }, [])
  
  const buscar = ({target: {value}}) => {
    const filter = filtersArray.filter((nombres) => {
      return nombres.name.toLowerCase().includes(value)
    })
    setRestaurants(filter);
  }

  const sortingRestaurants= () => {
    const clonArray = [...restaurants]
    const sorting = clonArray.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    setRestaurants(sorting);
  }

  const calif = () => {
    const clonArray = [...restaurants]
    const sorting = clonArray.sort((a, b) => a.calificacion < b.calificacion ? 1 : b.calificacion < a.calificacion ? -1 : 0)
    setRestaurants(sorting)
  }
  
  const type = (category) => {
   const filter = filtersArray.filter((restaurant) =>{
      return restaurant.localtype == category;
   })
   setRestaurants(filter);
  } 

  const todos = () => {
    fetchApi();
  }
  return (
    <>
     <>
        <NavbarDashboard search={(e) => buscar(e)} signOut={logout}/>
     </>
     <>
        <Filters all={() => todos()} categories={(e) => type(e)} sorting={(e) => sortingRestaurants(e)} reviews={(e) => calif(e)}/>
     </>
    <>
      <section className="section py-3 ">
        <div className="container">
          <h1 className="title mb-2 is-flex"><strong>¿Qué mandadito quieres hoy?</strong></h1>
          <strong><p className="mb-5 is-flex">Busca entre los diferentes locales y restaurantes lo que necesitas.</p></strong>
        </div>
      </section>
    </>
    <>
      <div className='columns is-multiline'>
      {restaurants.map((element, i)=>(
        <Card
        cardInfo={element} key={i}/>
      ))}
      </div>
    </>   
    <>
      <Footer/>
    </>
    </>
  );
}
