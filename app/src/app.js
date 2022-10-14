import axios from 'axios'
import React, { useMemo } from 'react';
import Dinner from './components/Dinner';

import { useState, useEffect } from 'react'

export default function App(){

const [data, setdata] = React.useState(null);

React.useEffect(()=>{
axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
    .then((response) => {   
            setdata(response.data);
            console.log(response.data)
          });
        }, []);
      
        if (!data) return null;

    let foodItem = data.filter(lunch =>
     lunch.category.title === 'Lunch')
            
      let lunchItems = []
          for (let i=0; i<foodItem.length; i++){
           lunchItems.push(
            <>
            <div>
            <h4>{foodItem[i].title}</h4>
            <h4>{foodItem[i].price}</h4>
            <p>{foodItem[i].description}</p>
            </div>
              </> 
               )
          }
             return <>{lunchItems}</>    
          }
      









    

      
      
      
      
      
      
      
      
      
      
      
      
      
      
   