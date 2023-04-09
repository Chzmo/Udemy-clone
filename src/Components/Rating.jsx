import React from 'react'
import { MdStarRate } from 'react-icons/md';

function Rating({starNum, color, size, gap}) {
 
    let stars = [];

    for (let i = 0; i < parseInt(starNum || 5); i++){
        stars.push(
            <MdStarRate 
                size={size || 14} 
                color={color || '#f3ca8c'} 
                key={i}
            />
        );
    }
    
    return(
        <div className={`flex items-center text-slate-500 gap-${gap || 2}`}>
            <p>starNum</p> <p>{stars}</p>
        </div>
    );
}

export default Rating