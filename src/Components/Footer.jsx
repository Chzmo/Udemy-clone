import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='px-7 pt-6 pb-9 bg-black text-white'>
      <div className="
        flex flex-col-reverse gap-7 
        sm:flex sm:flex-row sm:justify-between sm:gap-2/3
      ">
        <div className="
          flex flex-col gap-4
          sm:flex-row sm:gap-12 sm:justify-between
        "
      >
          <div className="flex flex-col gap-1 sm:gap-2">
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
            <div><Link>Udemy Business</Link></div>
          </div>
        </div>
        <div className=" flex-none">
          <Link className='border border-white py-2 font-bold text-sm px-4 pr-6 flex gap-2 items-center'> <AiOutlineGlobal size={20}/> English</Link>
      </div>
      </div>
    </div>
  )
}

export default Footer