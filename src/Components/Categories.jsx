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
      <div className='flex flex-wrap gap-3 mt-7 hover:cursor-pointer md:grid md:grid-cols-4 '>
        {categoriesData && 
          categoriesData.map((item, index) => {
            return (
              <Link key={index} className="group">
                <div className="overflow-hidden">

                <img 
                  src={item.image} 
                  alt="design" 
                  className='
                  hidden
                  md:flex
                  items-center
                  justify-center
                  group-hover:scale-110 
                  transition-all
                  w-full
                  '
                  />
                  </div>
                <h2 
                  className='
                    font-bold 
                    py-2 
                    px-4
                    border
                    border-slate-900
                    rounded-full
                    md:border-none
                    md:pl-0
                  '
                >
                  {item.category}
                </h2>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories