import React from 'react'
import "./sidebar.css"
import { BsFillAirplaneFill } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa6";
import { MdAssuredWorkload, MdOutlineManageHistory} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { GiDeliveryDrone } from 'react-icons/gi';
import { PiDroneFill } from 'react-icons/pi';
import { BiSolidDashboard } from 'react-icons/bi';
import { SiCloudron } from 'react-icons/si';
import { TbMedicalCrossFilled } from 'react-icons/tb';
import { IoAirplaneSharp } from 'react-icons/io5';

const SideBar = () => {
  return (
    <div className='userside'>

     <div className="head">
       {/* <GiDeliveryDrone />  */}
     <PiDroneFill
     style={{
      fontSize: "38px",
      color: "lightgrey"
     }} />
     <h1>
     EVTOL</h1>
     </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/dashboard" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}
        >
        <BiSolidDashboard/> Dashboard
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/manageEvtol" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
        <SiCloudron />Manage EVTOL
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/loadEvtol" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
         <BsFillAirplaneFill />   Load EVTOL
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/medications" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
         <TbMedicalCrossFilled />  Medications
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/loadedMedic" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
        <MdAssuredWorkload /> Loaded Medication
            </NavLink>
      </div>


      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/delivery" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
         <IoAirplaneSharp />  Delivery
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
      className= "link"
      to="/batteryLog" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
        <MdOutlineManageHistory />Battery Logs
            </NavLink>
      </div>

      <div className="usersideDiv">
      <NavLink 
       className= "link"
      to="/settings" 
        style={({isActive}) => {
          return isActive ?  {
            color: ' #95929a',
            backgroundColor: "rgb(218, 236, 252)",
            borderRadius: "5px",
            boxShadow: "0px 2px 3px 0px grey"
          } : {
            color: '#95929a'
        }
        }}>
        <IoMdSettings />   Settings
            </NavLink>
      </div>

    </div>
  )
}

export default SideBar
