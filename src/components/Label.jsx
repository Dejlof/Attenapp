import React from 'react'

const Label = ({label}) => {
  return (
    <div> 
       <label className="block mb-1"><i class="fa-solid fa-star text-[#F0BD2D] "></i> {label}</label>
    </div>
  )
}

export default Label
