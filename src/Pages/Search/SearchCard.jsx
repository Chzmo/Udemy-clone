import React, { useState } from 'react'
import { CiStar } from 'react-icons/ci';
import DataTooltip from '../../Components/DataTooltip';

const randomImage1 = "https://source.unsplash.com/600x499/?learing"

function SearchCard() {
    const [isOpen, setIsOpen] = useState(false)

    const Stars = (props) =>{
        let stars = [];
    
        for (let i = 0; i < parseInt(props.stars); i++){
            stars.push(< CiStar key={i}/>);
        }
        
        return(
            <div className="flex items-center text-slate-500">
                {stars}
            </div>
        );
    }

    return (
        <>
            <div 
                data-tooltip-id="my-tooltip2" 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className='flex gap-3 flex-1 w-full justify-between h-auto'
            >
                <div className="flex gap-4 h-auto">
                    <div className="w-20 h-20 sm:h-40 sm:w-64 ">
                        <img 
                            src={randomImage1} 
                            alt={`course`} 
                            className='w-20 h-20 sm:h-40 sm:w-64 bg-slate-100 object-cover'
                        />
                    </div>
                    <div className="flex-1 ">
                        <h2 className='w-full sm:w-4/5 font-bold text-xl'>The Complete Bootcamp From Zero To Hero..</h2>
                        <p>Jose Name</p>
                        <div className="flex gap-2"><h2>4.6</h2><Stars stars={5}/><p>(12,004)</p></div>
                        <p className='sm:hidden'>$182.99</p>
                    </div>
                </div>
                <p className='hidden sm:flex'>$182.99</p>
            </div>
            {/* <DataTooltip 
                tooltipID="my-tooltip2" 
                place="bottom"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data = {
                    [
                        {'heading':'The Complete Bootcamp From Zero To Hero..'},
                        {'updatedAt':'February 2023'},
                        {'level':'42.5 total hours All Levels Subtitles'},
                        {'subHeading':'You will master the Python  language by building 100 unique projects over 100 days'},
                        {'objectives':[
                            {'name':'You will master the programming language by'},
                            {'name':'You will master the Python programming'}
                        ]},
                    ]
                }
            /> */}
        </>
    )
}

export default SearchCard