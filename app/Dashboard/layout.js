import React from 'react'
import Navigation from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import Rightbar from '@/Components/Rightbar'
const layout = ({children}) => {
  return (
    <div className=' flex h-screen '>
      <div className='flex-1'>
          <Sidebar />
      </div>

      <div className='flex-[4]'>
        <Navigation />
        {/* <Rightbar/> */}
        {children}
         </div>
    </div>
  )
}

export default layout                            
