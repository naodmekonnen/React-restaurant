import axios from 'axios'
// import React, { useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Dinner from './components/Dinner';
import Lunch from './components/Lunch';
import Breakfast from './components/Breakfast'
import Appetizer from './components/Appetizer';
import Dessert from './components/Dessert'
import { useState, useEffect } from 'react'

export default function App(){

  const [data, setdata] = useState(null);
  const [page, setPage] = useState('Home');

  useEffect(()=>{
    axios.get('https://8000-naodmekonne-reactrestau-3i7odx9bo8c.ws-us75.gitpod.io/menu/')
      .then((response) => {   
        setdata(response.data);
        console.log(response.data)
      });
    }, []);
      
  if (!data) return(
    <>
    <Header />
    <Home/>
    <Footer/>
    </>
  );

  return(
    <>
    <Header handleClick={setPage}/>
    {page === 'Home'&& <Home />}
    {page === 'Breakfast' && <Breakfast fullList={data}/>}
    {page === 'Lunch' && <Lunch fullList={data}/>}
    {page === 'Dinner' && <Dinner fullList={data}/>}
    {page === 'Appetizer' && <Appetizer fullList={data}/>}
    {page === 'Dessert' && <Dessert fullList={data}/>}
    <Footer/>
     </>
  )
}


      






    

      
      
      
      
      
      
      
      
      
  