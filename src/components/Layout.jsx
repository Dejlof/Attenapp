import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
       <div className="flex flex-col lg:flex-row text-sm w-full h-full ">
<Sidebar/>
<section className="md:w-5/6 w-full mt-25 lg:mt-0 flex items-center justify-center text-[#01416EFF] font-semibold ">
  <div className="flex flex-col items-center justify-center">
    {children}
  </div>
</section>
</div>
    </div>
  )
}

export default Layout
