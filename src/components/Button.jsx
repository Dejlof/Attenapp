import React from 'react'

const Button = ({title}) => {
  return (
    <div>
    <button className="px-4 py-2 bg-[#F0BD2D] text-[#01416EFF] rounded-2xl w-100">
  {title}
</button>
    </div>
  )
}

export default Button
