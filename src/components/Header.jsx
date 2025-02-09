import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <div className="name-header text-center pb-10">
  <h2 className="text-2xl font-bold mb-2">{title}</h2>
  <p>Welcome! Please fill in your credentials</p>
  </div>
    </div>
  )
}

export default Header
