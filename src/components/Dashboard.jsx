import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './Footer'
import NavbarDashboard from './NavbarDashboard'
import 'bulma/css/bulma.min.css';

export default function Dashboard({logout}) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const BASE_URL = "http://localhost:3000/";
      try {
        const data = await axios.get(`${BASE_URL}restaurants`);
        console.log("results", data);
        setRestaurants(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    console.log("change state", restaurants);
  }, [restaurants]);


  return (
    <>
    <NavbarDashboard signOut={logout}></NavbarDashboard>
      
    <Footer></Footer>
    </>
  )
}
