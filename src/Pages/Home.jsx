import React from 'react'
import Hero from '../Components/Hero'
import Courses from '../Components/Courses'
import Testimonial from '../Components/Testimonial'
import Categories from '../Components/Categories'
import Featured from '../Components/Featured'

function Home() {
  return (
    <>
    <Hero/>
    {/*
        <Courses />
      */}
        <Testimonial />
        <Categories/>
        <Featured/>
    </>
  )
}

export default Home