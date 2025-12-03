import React from 'react'
import {Spinner} from "../assets/svg/Spinner.svg"

function Spinner() {
  return (
    <div className='bg-black bg-opacity-50 flex  items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-51'>
      <div>
        <img src={Spinner} alt="lpading..." className='h-24' /></div>
    </div>
  )
}

export default Spinner
