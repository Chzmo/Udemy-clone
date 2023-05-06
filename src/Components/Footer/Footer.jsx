import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='px-7 pt-6 pb-9 bg-[#1c1d1f] text-slate-300'>
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
            <div><Link>Teach on Udemy</Link></div>
            <div><Link>Get The app</Link></div>
            <div><Link>About Us</Link></div>
            <div><Link>Contact Us</Link></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div><Link>Careers</Link></div>
            <div><Link>Blog</Link></div>
            <div><Link>Help and Support</Link></div>
            <div><Link>Affiliate</Link></div>
            <div><Link>Investors</Link></div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div><Link>Terms</Link></div>
            <div><Link>Privacey policy</Link></div>
            <div><Link>Cookie settings</Link></div>
            <div><Link>Sitemap</Link></div>
            <div><Link>Accessibility statement</Link></div>
          </div>
        </div>
        <div className="w-32">
          <Link className='border border-white text-white py-2 font-bold text-sm px-4 pr-6 flex gap-2 items-center'> 
          <AiOutlineGlobal size={20}/> English
          </Link>
      </div>
      </div>
    </div>
  )
}

export default Footer