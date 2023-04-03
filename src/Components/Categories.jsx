import React from 'react'

import designImg from '../assets/images/category-design.jpg'
import developmentImg from '../assets/images/category-development.jpg'
import softwareImg from '../assets/images/category-it-and-software.jpg'
import marketingImg from '../assets/images/category-marketing.jpg'
import personalImg from '../assets/images/category-personal-development.jpg'
import businessImg from '../assets/images/category-business.jpg'
import musicImg from '../assets/images/category-music.jpg'
import photographyImg from '../assets/images/category-photography.jpg'
import { Link } from 'react-router-dom'

const categoriesData = [
  {'image':designImg, 'category':'Designnig'},
  {'image':developmentImg, 'category':'Development'},
  {'image':marketingImg, 'category':'Marketing'},
  {'image':softwareImg, 'category':'IT and Software'},
  {'image':personalImg, 'category':'Personal Development'},
  {'image':businessImg, 'category':'Business'},
  {'image':photographyImg, 'category':'Photopgraphy'},
  {'image':musicImg, 'category':'Music'},
]

function Categories() {
  return (
    <div id='testimonial' className='p-7 bg-white relative'>
      <h2 className='font-bold text-xl pt-6'>Top Categories</h2>
      <div className='mt-7 columns-4 gap-4 hover:cursor-pointer'>
        {categoriesData && 
          categoriesData.map((item, index) => {
            return (
              <Link key={index} className="pb-9">
                <img src={item.image} alt="design" />
                <h2 className='font-bold pt-2'>{item.category}</h2>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories