import React from 'react'
import "./delivery.css"
import SideBar from '../../components/sidebar/SideBar'
import { GiDeliveryDrone } from 'react-icons/gi'

const Delivery = () => {
  return (
    <div className='deliverMain'>
        <SideBar/>
      <div className="deliver">
         <form className='formDelivery'>
            <h3>Delivery of Medication</h3>
            <div className="deliverDiv">
                <label htmlFor="">Recipient's Name:</label>
                <input type="text" placeholder='Enter name of Recipient of Package' />
            </div>
            <div className="deliverDiv">
                <label htmlFor="">Address:</label>
                <input type="text" placeholder='Enter address of recipient' />
            </div>
            <div className="deliverDiv">
                <label htmlFor="">EVTOL Serial Number:</label>
                <select name="" id="">
                    <option value="">Select serial Number of loaded EVTOL for delivery</option>
                </select>
            </div>
            <button>Proceed</button>
         </form>
         <div className="dronedelivery">
                    <GiDeliveryDrone
                    style={{
                     fontSize: '520px',
                     color: 'grey',
                    }} />
                    </div>
      </div>
    </div>
  )
}

export default Delivery
