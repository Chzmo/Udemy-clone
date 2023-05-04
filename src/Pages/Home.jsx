import React from 'react'
import { useGlobalState } from '../Container/Container'
import Hero from '../Components/Hero'
import Courses from '../Components/Courses'
import Testimonial from '../Components/Testimonial'
import Categories from '../Components/Categories'
import Featured from '../Components/Featured'

function Home() {
  const {globalState} = useGlobalState()
  return (
    <>
      <Hero/>
      <Courses globalState={globalState}/>
      <Testimonial />
      <Categories/>
      <Featured/>
    </>
  )
}

export default Home