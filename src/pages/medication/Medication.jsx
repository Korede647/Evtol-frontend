import React from 'react'
import "./medication.css"
import SideBar from '../../components/sidebar/SideBar'

const Medication = () => {
  return (
    <div className='medicMain'>
       <SideBar/>
       <div className="medic">

        <div className="medictop">
        <h2>Medications</h2>
        <button>Add New Medication</button>
        </div>

        <div className="medicCards">

          <div className="card">
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
  )
}

export default Medication
