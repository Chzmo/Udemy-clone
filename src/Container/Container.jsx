import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav/TopNav';

function Container() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false)

  const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const load = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      
    };
    
    setLoading(true)
    fetch(VITE_APP_BASE_URL + '/api/categories', requestOptions )
      .then(response => response.json())
      .then(data => {
          setLoading(false);
          console.log(data)
        })
      
      .catch(error => {
        setLoading(false); 
        console.log(error)
      })
  }
  useEffect(() => {
    load();
  }, [])

  return (
    <div >
        <TopNav />
        <Outlet />dfsdf
        <Footer />
    </div>
  )
}

export default Container