import React from 'react'
import FBNLogo from '../assets/images/FBNLogo.png'

const Sidebar = () => {
  return (
    <section className="lg:w-1/6 bg-[#01416EFF] h-1/4 lg:h-full w-sreen ">
    <div className="flex lg:flex-col flex-row  lg:items-center lg:justify-center items-start h-1/4 lg:h-[900px] py-2 pl-10 w-full">
      <img className="md:w-20 md:h-16 h-10 w-15" src={FBNLogo} title="FirstBank Logo" alt="First Bank" />
    </div>
    </section>
  )
}

export default Sidebar
