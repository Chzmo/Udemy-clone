import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


function Spinner({size, message}) {
  return (
    <div className="flex justify-center flex-col w-full items-center h-full">
        <ClipLoader
            color="black"
            size={size || 75}
            aria-label={message || "Loading..."}
        />
    </div>
  )
}

export default Spinner