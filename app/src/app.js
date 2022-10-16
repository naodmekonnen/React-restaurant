import axios from 'axios'
// import React, { useMemo } from 'react';
import Header from './components/Header';
import Dinner from './components/Dinner';
import Lunch from './components/Lunch';
import Breakfast from './components/Breakfast'
import { useState, useEffect } from 'react'

export default function App(){

const [data, setdata] = useState(null);
const [page, setPage] = useState('');

useEffect(()=>{
axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
    .then((response) => {   
            setdata(response.data);
            console.log(response.data)
          });
        }, []);
      
        if (!data) return(
          <Header />
        );

        return(
          <>
          <Header handleClick={setPage}/>
          {page === 'Breakfast' && <Breakfast fullList={data}/>}
          {page === 'Lunch' && <Lunch fullList={data}/>}
          {page === 'Dinner' && <Dinner fullList={data}/>}
         </>
        )

      }


      






    

      
      
      
      
      
      
      
      
      
  