import React from 'react'
import "./loadmedic.css"
import "../medication/medication.css"
import SideBar from '../../components/sidebar/SideBar'

const LoadMedic = () => {
  return (
    <div className='medicMain'>
      <SideBar/>
      <div className="medic">
        <div className="medicHeader">All Loaded Medications</div>
        <div className="medicCards">
            <div className="cardLoad">
               <p>Evtol Serial Number: <b>NDJEJEIDKKN</b></p> 
               <h4>Medications</h4>
                <div className="card" style={{
                    width: "325px"
                }}>
                    <div className="image">
                <img src= "" alt="" />
            </div>
            <div className="medicText">
                <p>Name: <b>PARACETEMOLARMEET</b></p>
                <p>Code: <b>7082hdh-whduwj</b></p>
                <p>Weight: <b>54g</b></p>
            </div>
                </div>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default LoadMedic
