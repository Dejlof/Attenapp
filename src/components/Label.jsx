import React from 'react'

const Label = ({label}) => {
  return (
    <div> 
       <label className="block mb-1 md:text-sm pl-3 md:pl-0"><i class="fa-solid fa-star text-[#F0BD2D] "></i> {label}</label>
    </div>
  )
}

export default Label
