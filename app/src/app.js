import axios from 'axios'
import React from 'react';
import Navigation from './components/Navigation';



import { useState, useEffect } from 'react'

export default function App(){

    const [page, setPage] = useState('landing')
    const [data, setData] = useState([])

    const url = 'https://astute-baton-362318.ue.r.appspot.com/api/json/'

    useEffect (() => {
        async function getData(){
            const response = await axios.get(url)
            setData(response.data)
        }
        getData();
    },[])

    if(data.length === 0){
        return null
    }
    console.log(data)
    

    return (
        <>
     {/* <button onClick={()=> console.log(data)}>CLICK HERE</button> */}
     </>
    )
}

