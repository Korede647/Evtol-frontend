import React from 'react'
import "./dashboard.css"
import SideBar from '../../components/sidebar/SideBar'
import Evtol from '../../assets/Evtol.png'

const Dashboard = () => {
  return (
    <div className='dashMain'>
        <SideBar/>
      <div className="dash">
        <div className="first">
            <h3>Welcome to the Evtol Management System</h3>
            <div className="dashImg">
                <img src={Evtol} alt="" />
            </div>
            <div className="dashText"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
