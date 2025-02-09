import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
       <div className="flex">
<Sidebar/>
 <section className="w-5/6 text-[#01416EFF] font-semibold ">
 <div className="flex flex-col items-center justify-center h-screen">
 {children}
 </div>
 </section>
</div>
    </div>
  )
}

export default Layout
