import React from 'react'

import designImg from '../assets/images/category-design.jpg'
import developmentImg from '../assets/images/category-development.jpg'
import softwareImg from '../assets/images/category-it-and-software.jpg'
import marketingImg from '../assets/images/category-marketing.jpg'

function Categories() {
  return (
    <div id='testimonial' className='p-7 bg-white relative'>
      <h2 className='font-bold text-xl pt-6'>Top Categories</h2>
      <div className='mt-7 columns-4'>
          <div className="">
            <img src={designImg} alt="design" />
            <h2>Design</h2>
          </div>
          <div className="">
            <img src={developmentImg} alt="Development" />
            <h2>Development</h2>
          </div>
          <div className="">
            <img src={marketingImg} alt="Marketing" />
            <h2>Marketing</h2>
          </div>
          <div className="">
            <img src={softwareImg} alt="Software" />
            <h2>IT and Software</h2>
          </div>
          <div className="">
            <img src={designImg} alt="design" />
            <h2>Personal development</h2>
          </div>
          <div className="">
            <img src={developmentImg} alt="Development" />
            <h2>Musiness</h2>
          </div>
          <div className="">
            <img src={marketingImg} alt="Marketing" />
            <h2>Music</h2>
          </div>
          <div className="">
            <img src={softwareImg} alt="Software" />
            <h2>Photography</h2>
          </div>
      </div>
    </div>
  )
}

export default Categories