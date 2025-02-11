import React from 'react'
import FBNLogo from '../assets/images/FBNLogo.png'

const Sidebar = () => {
  return (
    <section className="w-1/6 bg-[#01416EFF] h-full">
    <div className="flex items-center justify-center h-[800px]">
      <img className="w-20 h-16" src={FBNLogo} title="FirstBank Logo" alt="First Bank" />
    </div>
    </section>
  )
}

export default Sidebar
