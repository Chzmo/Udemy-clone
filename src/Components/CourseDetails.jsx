import React, { useState } from 'react'
import { CiStar } from 'react-icons/ci';
import DataTooltip from './DataTooltip';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import 'react-tooltip/dist/react-tooltip.css'

const randomImage1 = "https://source.unsplash.com/600x499/?learing"
const randomImage2 = "https://source.unsplash.com/601x500/?learing"
const randomImage3 = "https://source.unsplash.com/600x501/?learing"
const randomImage4 = "https://source.unsplash.com/600x502/?learing"
const randomImage5 = "https://source.unsplash.com/600x498/?learing"

function CourseDetails() {

    const [isOpen, setIsOpen] = useState(false)

    const Stars = (props) =>{
        let stars = [];
    
        for (let i = 0; i < parseInt(props.stars); i++){
            stars.push(< MdStarRate color='#f3ca8c' key={i}/>);
        }
        
        return(
            <div className="flex items-center text-slate-500">
                {stars}
            </div>
        );
    }

    return (
        <>
            <HashLink 
                to={`/paid-course/python#`}
                data-tooltip-id="my-tooltip" 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className="h-40 w-64">
                <img 
                    src={randomImage1} 
                    alt={`course`} 
                    className='h-40 w-64 bg-slate-100 object-cover'
                />
                </div>
                <h2 className='w-64 font-bold text-xl'>The Complete Bootcamp From Zero To Hero..</h2>
                <p>Jose Name</p>
                <div className="flex gap-2"><h2>4.6</h2><Stars stars={5}/><p>(12,004)</p></div>
                <p>$182.99</p>
            </HashLink>
            <DataTooltip 
                tooltipID="my-tooltip" 
                place="right"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data = {
                    [
                        {'heading':'Automate the boring stuff with Python Programming'},
                        {'updatedAt':'February 2023'},
                        {'level':'42.5 total hours All Levels Subtitles'},
                        {'subHeading':'You will master the Python  language by building 100 unique projects over 100 days'},
                        {'objectives':[
                            {'name':'You will master the programming language by'},
                            {'name':'You will master the Python programming'}
                        ]},
                    ]
                }
            />
        </>
    )
}

export default CourseDetails