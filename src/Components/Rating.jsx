import React from 'react'
import { MdStarRate } from 'react-icons/md';

function Rating({starNum}) {
 
    let stars = [];

    for (let i = 0; i < parseInt(starNum); i++){
        stars.push(< MdStarRate color='#f3ca8c' key={i}/>);
    }
    
    return(
        <div className="flex items-center text-slate-500 gap-2">
            <p>starNum</p> <p>{stars}</p>
        </div>
    );
}

export default Rating