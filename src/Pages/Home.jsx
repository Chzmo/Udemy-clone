import React from 'react'
import Hero from '../Components/Hero'
import Courses from '../Components/Courses'
import Testimonial from '../Components/Testimonial'
import Categories from '../Components/Categories'

function Home() {
  return (
    <>
        <Hero/>
        <Courses />
        <Testimonial />
        <Categories/>
        <Features/>
    </>
  )
}

export default Home