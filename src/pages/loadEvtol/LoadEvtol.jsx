import React from 'react'
import "./loadEvtol.css"
import SideBar from '../../components/sidebar/SideBar'
import { GiDeliveryDrone } from 'react-icons/gi'

const LoadEvtol = () => {
  return (
    <div className='loadMain'>
      <SideBar/>
        <div className="load">
           <form className='formLoad'>
           <h3> Load EVTOL with Medications</h3>
            <div className="loadSN">
                <label htmlFor="">EVTOL Serial Number:</label>
                <select name="" id="">
                  <option value="">Valid IDLE EVTOL serial number</option>
                </select>
            </div>

            <div className="loadSN">
                <label htmlFor="">Medications:</label>
                <textarea 
                placeholder='Input valid Medication Codes (split by "," [comma])'
                ></textarea> 
                 {/* onChange={(e) => setMedications(e.target.value.split(","))} */}
            </div>
            <button>
            {/* {loading ? "Loading..." : "Load EVTOL"} */}
            Load EVTOL
            </button>
            {/* {message &&  */}
            <p className='message'>
                {/* {message} */}
            {/* Evtol with serial number NDDHEDJDHIEUI loaded successfully */}
            </p>
            {/* } */}
           </form>

           <div className="drone">
           <GiDeliveryDrone
           style={{
            fontSize: '500px',
            color: 'grey',
           }} />
           </div>
        </div>
    </div>
  )
}

export default LoadEvtol
