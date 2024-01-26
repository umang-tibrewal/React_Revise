import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseCurrencyinfo(currency) {

    const[data,setdata]=useState({});

useEffect(()=>{

fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=>{return res.json()})
.then((res)=>{setdata(res[currency])})
.catch((e)=>{console.log(`error:${e}`)})



    },[currency])


    return data 
    
   

 
}

export default UseCurrencyinfo
