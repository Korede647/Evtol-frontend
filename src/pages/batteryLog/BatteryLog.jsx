import React from 'react'
import SideBar from '../../components/sidebar/SideBar'

const BatteryLog = () => {
  return (
    <div className='w-full flex h-full'>
      <SideBar/>
      <div className='w-275 h-auto bg-blue-100 px-30 py-30'>
        Battery Logs
      </div>
    </div>
  )
}

export default BatteryLog
