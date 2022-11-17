import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer'
import NavbarDashboard from './NavbarDashboard'
import 'bulma/css/bulma.min.css';
import Card from './Card';
import Filters from './Filters';
import Menu from './Menu';

export default function Dashboard({logout}) {

  const [restaurants, setRestaurants] = useState([])
  const [filtersArray, setFiltersArray] = useState([])
  const [menuArray, setMenuArray] = useState([])

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
  
  const rName = document.querySelector("#name");
  const rAddress = document.querySelector("#ubicacion");
  const rImage = document.querySelector("#restaurant-image");
  const rReview = document.querySelector('#calificacion');


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

  const searchId =  (aidi) => {
    let filter = filtersArray.filter((restaurant) => {
        return restaurant.id == aidi;
    });
    return(filter[0]);
  };

  const fillRestaurants = (restaurant) => {
    const {name, ubicacion, image, calificacion, menu} = restaurant;
    if(name) rName.innerText = name;
    if(ubicacion) rAddress.innerText = ubicacion;
    rReview.innerText = calificacion;
    rImage.setAttribute("src", image)
    setMenuArray(menu)
  };

  const showRestaurants = (id) => {
    rName.innerText = "";
    rAddress.innerText = "";
    let home = document.querySelector("#content");
    let negocios = document.querySelector("#negocios");
    let title = document.querySelector("#titulo");
    let filter = document.querySelector('#filter');
    filter.classList.add('is-hidden');
    title.classList.add('is-hidden');
    home.classList.add('is-hidden');
    negocios.classList.toggle('is-hidden');
    let restaurant = searchId(id);
    fillRestaurants(restaurant);
  };

  const closeRestaurants = () => {
    rName.innerText = "";
    rAddress.innerText = "";
    let home = document.querySelector("#content");
    let negocios = document.querySelector("#negocios");
    let title = document.querySelector("#titulo");
    let filter = document.querySelector('#filter');
    filter.classList.toggle('is-hidden');
    title.classList.toggle('is-hidden');
    home.classList.toggle('is-hidden');
    negocios.classList.add('is-hidden');
  }

  return (
    <>
     <>
        <NavbarDashboard 
        search={(e) => buscar(e)} 
        signOut={logout}/>
     </>
     <>
        <div id='filter'>
        <Filters
        all={() => todos()} 
        categories={(e) => type(e)} 
        sorting={(e) => sortingRestaurants(e)} 
        reviews={(e) => calif(e)}/>
        </div>
     </>
     <>
     <section className="negocios is-hidden" id="negocios">
     <div className="atras">
        <button className="button gradient-gray is-rounded" onClick={() => closeRestaurants()}>Atrás</button>
     </div>
          <div className="card-image">
            <figure className="imagen">
                <img src="" id="restaurant-image"/>
            </figure>
        </div>
        <div className="card-content">
            <span className="tag is-danger" id="local-type"></span>
            <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div className="content mb-0">
                    <p className="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase" id="name"></p>
                    <p className="mb-0 is-size-7" id="ubicacion"></p>
                </div>
                <div className="ranking has-text-right">
                    <span className="icon-text">
                        <span  className="icon has-text-info">
                        <i className="mdi mdi-star mdi-18px is-active"></i>
                        </span> 
                        <span id="calificacion"></span>
                    </span>
                </div>
            </div>
        </div>
        <div className='columns is-multiline' id='menu'>
          {menuArray.map((element, i ) => (
            <Menu
            filters={filtersArray}
            products={element} key={i}
            />
          ))}
        </div>
      </section>
     </>
    <>
      <section className="section py-3" id='titulo'>
        <div className="container">
          <h1 className="title mb-2 is-flex"><strong>¿Qué mandadito quieres hoy?</strong></h1>
          <strong><p className="mb-5 is-flex">Busca entre los diferentes locales y restaurantes lo que necesitas.</p></strong>
        </div>
      </section>
    </>
    <>
      <>
      <div className='columns is-multiline' id='content'>
      {restaurants.map((element, i)=>(
        <Card
        showInfo={showRestaurants}
        cardInfo={element} key={i}/>
      ))}
      </div>
      </>
    </>   
    <>
      <Footer/>
    </>
    </>
  );
}
