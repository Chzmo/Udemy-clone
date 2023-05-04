import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { fetchData } from '../Utils/FetchData';

import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav/TopNav';

function Container() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  const globalState = {
    loading, setLoading, categories, setCategories
  }

  async function getData(){
    const data = await fetchData('/api/categories')
    setCategories(data)
  }
  
  useEffect(() => {
    console.log('start')
    getData().finally(()=> console.log('end'))
  }, [])

  return (
    <div >
        <TopNav globalState={globalState}/>
        <Outlet context={{globalState}}/>
        <Footer globalState={globalState}/>
    </div>
  )
}

export default Container

export function useGlobalState(){
  return useOutletContext()
}