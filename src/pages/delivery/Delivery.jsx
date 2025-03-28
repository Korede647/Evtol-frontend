import React, { useEffect, useState } from 'react'
import "./delivery.css"
import SideBar from '../../components/sidebar/SideBar'
import { GiDeliveryDrone } from 'react-icons/gi'
import { DELIVERMEDICATION_URL, LOADEDEVTOL_URL } from '../../components/API_URL'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'

const Delivery = () => {
    const [evtol, setEvtol] = useState([])
    const [distance, setDistance] = useState()
    const [selectedEvtol, setSelectedEvtol] = useState("")
    const [user, setUser] = useState("")
    const [error, setError] = useState("")
    const [processing, setProcessing] = useState(false)

    const Token = localStorage.getItem("Token")

  useEffect(() => {
    const fetchEvtol = async () => {
      const response = await axios.get(LOADEDEVTOL_URL, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      })
      if(response.status === 200){
        const evtolOptions= response.data.map((serial) =>({
          value: serial.serialNo,
          label: serial.serialNo + " " + serial.model[0] + serial.model.slice(1).toLowerCase() + " " + serial.weightLimit + "g"
        }))
        setEvtol(evtolOptions)
      }else{
        console.log(response.data.message);
        setError('Error Retrieving Evtol')
      }
    }
    fetchEvtol()
  })

   const deliverMedication = async (e) => {
    e.preventDefault()
    setError("")

    if(!distance || !user || !selectedEvtol){
        setError("All fields are required.")
        return
    }
    
    try{
      setProcessing(true)
      const response = await axios.post(`${DELIVERMEDICATION_URL}/${selectedEvtol}`, {
        distance
  }, {
     headers: {
        Authorization: `Bearer ${Token}`
     }
   }
  )
    if(response.status === 201){
       Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Medications are being Delivered'
       })
       setProcessing(true)
       setDistance("")
       setSelectedEvtol("")
       setUser("")
       
    }
    }catch(error){
      console.log("Error: ", error);  
    }
    
   }

  return (
    <div className='deliverMain'>
        <SideBar/>
      <div className="deliver">
         <form className='formDelivery' onSubmit={deliverMedication}>
            <h3>Delivery of Medication</h3>
            <div className="deliverDiv">
                <label htmlFor="">Recipient's Name:</label>
                <input 
                type="text" 
                placeholder='Enter name of Recipient of Package' 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div className="deliverDiv">
                <label htmlFor="">Address / Distance:</label>
                <input 
                type="text" 
                placeholder='Enter address of recipient'
                value={distance}
                onChange={(e) => setDistance(e.target.value)} 
                />
            </div>
            <div className="deliverDiv">
                <label htmlFor="">EVTOL Serial Number:</label>
                <Select
                 options={evtol}
                 value={evtol.find((e) => e.value === selectedEvtol) || null}
                 onChange={(selected) => setSelectedEvtol(selected.value)}
                 classNames={{
                  control: () => "h-15 border border-gray-800"
                 }}
                 />
            </div>
            <button className='' type='submit'>
              {processing ? "Processing..." : "Proceed"}
            </button>
            {error && (
              <p className='text-[14px] text-red-500 pt-1 text-sm'>{error}</p>
            )}
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
