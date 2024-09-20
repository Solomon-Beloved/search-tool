import React from 'react'
import Navigation from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import Rightbar from '@/Components/Rightbar'
const layout = ({children}) => {
  return (
    <div>
     
      <div className='flex '>
        <div className='flex-[1]'><Sidebar /></div> 
        <div className='flex-[4]'>
          <Navigation />
          {children}
        </div>
        <div className='flex-[1]'><Rightbar/></div>
      </div>
    </div>
  )
}

export default layout
