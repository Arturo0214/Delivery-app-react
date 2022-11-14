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

  /**
   * The above function is an async function that fetches data from the API.
   * Created a Fake API by using a Json-server and executed the command 
   * npx json-server --watch db.json to fetch the data-base
   */
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
  
 /* A hook that is called when the component is mounted. */
  useEffect(() => {
  fetchApi();
  }, [])
  
  /**
   * The function buscar is a function that takes an object as an argument, and the object has a
   * property called target, which has a property called value. The function then filters the array
   * filtersArray, and returns the name property of the array, which is converted to lowercase, and
   * includes the value of the target property. The function then sets the restaurants array to the
   * filter
   */
  const buscar = ({target: {value}}) => {
    const filter = filtersArray.filter((nombres) => {
      return nombres.name.toLowerCase().includes(value)
    })
    setRestaurants(filter);
  }

  /**
   * It sorts the restaurants by name.
   */
  const sortingRestaurants= () => {
    const clonArray = [...restaurants]
    const sorting = clonArray.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    setRestaurants(sorting);
  }

  /**
   * It sorts the restaurants by their rating.
   */
  const calif = () => {
    const clonArray = [...restaurants]
    const sorting = clonArray.sort((a, b) => a.calificacion < b.calificacion ? 1 : b.calificacion < a.calificacion ? -1 : 0)
    setRestaurants(sorting)
  }
  
  /**
   * The function takes in a category as an argument, filters through the restaurants array, and
   * returns the restaurants that match the category
   */
  const type = (category) => {
   const filter = filtersArray.filter((restaurant) =>{
      return restaurant.localtype == category;
   })
   setRestaurants(filter);
  } 

  /**
   * It fetches the API and returns the data.
   */
  const todos = () => {
    fetchApi();
  }

  return (
    <>
     <>
        <NavbarDashboard 
        search={(e) => buscar(e)} 
        signOut={logout}/>
     </>
     <>
        <Filters 
        all={() => todos()} 
        categories={(e) => type(e)} 
        sorting={(e) => sortingRestaurants(e)} 
        reviews={(e) => calif(e)}/>
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
