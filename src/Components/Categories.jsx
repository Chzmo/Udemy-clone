import React from 'react'

import designImg from '../assets/images/category-design.jpg'
import developmentImg from '../assets/images/category-development.jpg'
import softwareImg from '../assets/images/category-it-and-software.jpg'
import marketingImg from '../assets/images/category-marketing.jpg'
import personalImg from '../assets/images/category-personal-development.jpg'
import businessImg from '../assets/images/category-business.jpg'
import photographyImg from '../assets/images/category-photography.jpg'

const categoriesData = [
  {'image':designImg, 'category':'Designnig'},
  {'image':developmentImg, 'category':'Development'},
  {'image':marketingImg, 'category':'Marketing'},
  {'image':softwareImg, 'category':'IT and Software'},
  {'image':personalImg, 'category':'Personal Development'},
  {'image':businessImg, 'category':'Business'},
  {'image':photographyImg, 'category':'Photopgraphy'},
]

function Categories() {
  return (
    <div id='testimonial' className='p-7 bg-white relative'>
      <h2 className='font-bold text-xl pt-6'>Top Categories</h2>
      <div className='mt-7 columns-4'>
        {categoriesData && 
          categoriesData.map((item, index) => {
            return (
            <div key={index} className="">
              <img src={item.image} alt="design" />
              <h2>{item.category}</h2>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories