import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { fetchData } from '../Utils/FetchData';

import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav/TopNav';

function Container() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false)

  const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  async function getData(){
    const data = await fetchData('/api/categories')
    console.log(data[0])
  }
  
  useEffect(() => {
    console.log('start')
    getData().finally(()=> console.log('end'))
  }, [])

  return (
    <div >
        <TopNav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Container