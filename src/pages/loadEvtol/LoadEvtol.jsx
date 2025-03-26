import React, { useEffect, useState } from 'react'
import "./loadEvtol.css"
import SideBar from '../../components/sidebar/SideBar'
import { GiDeliveryDrone } from 'react-icons/gi'
import { AVAILABLEVTOL_URL, LOADEVTOL_URL, MEDICATIONS_URL, VIEWALLEVTOL_URL } from '../../components/API_URL'
import Select from 'react-select'
import axios from 'axios'
import Medication from '../medication/Medication'

const options = [
  { value: "like", label: "Dance" },
  { value: "likee", label: "Love" },
  { value: "likeee", label: "Crazy" },
];

const LoadEvtol = () => {
  const [loading, setLoading] = useState(false)
  const [evtol, setEvtol] = useState([])
  const [selectedEvtol, setSelectedEvtol] = useState("")
  const [medications, setMedications] = useState([])
  const [error, setError] = useState("")
  const [selectedMedics, setSelectedMedics] = useState([])

  useEffect(() => {
    const fetchEvtol = async () => {
      const response = await axios.get(AVAILABLEVTOL_URL)
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

    const fetchMedics = async () => {
      const response = await axios.get(MEDICATIONS_URL)
      if(response.status === 200){
        const medicOptions = response.data.medics.map((medic) => ({
          value: medic.code,
          label: medic.name + " " + medic.weight + "g"
        }))
        setMedications(medicOptions)
      }else{
        console.log(response.data.message);
        setError("Error Retrieving Medications")
      }
    }
    fetchEvtol()
    fetchMedics()
       }, [])

   const handleChange = (selected) => {
    setSelectedMedics(selected)
   }

   const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if(!selectedEvtol || selectedMedics.length === 0){
      setError("All fields are required")
      return
    }
    const evtolObj = evtol.find((e) => e.value === selectedEvtol);
     const evtolWeight = parseFloat(evtolObj.label.match(/\d+g/)[0])
     const totalWeight = selectedMedics.reduce((sum, med) => sum + parseFloat(med.label.match(/\d+g/)[0]), 0)
    if(totalWeight > evtolWeight){
      setError(`Medication weight (${totalWeight}g) exceeds EVTOL weight Limit (${evtolWeight}g)`)
      return
    }
    
    try{
      
      setLoading(true)
        const response = await axios.post(`${LOADEVTOL_URL}/${selectedEvtol}`, {
          serialNo: selectedEvtol,
          medications: selectedMedics.map(med => med.value)
        }
      )
        if(response.status === 201){
          setLoading(false)
          alert(response.data.message)
          setSelectedEvtol("")
          setSelectedMedics([])
          
        }
    }catch(error){
      // console.log(error.response?.data?.message);

      // catch (error) {
        console.log("Full error object:", error); // Log the entire error for debugging
      
        if (error.response) {
          // Server responded with a status code other than 2xx
          console.log("Error response:", error.response);
          console.log("Error data:", error.response.data);
          console.log("Error message:", error.response.data?.message);
      
          setError(error.response.data?.message || "Something went wrong on the server.");
        } else if (error.request) {
          // Request was made but no response received (e.g., network error)
          console.log("No response received:", error.request);
          setError("No response from the server. Please check your network.");
        } else {
          // Other errors (e.g., invalid request setup)
          console.log("Request error:", error.message);
          setError("An unexpected error occurred. Please try again.");
        }
      }
      
      
    // }
   }


  return (
    <div className='loadMain'>
      <SideBar/>
        <div className="load">
           <form className='formLoad' onSubmit={handleSubmit}>
           <h3 className='text-red-300 text-bold'> Load EVTOL with Medications</h3>
            <div className="loadSN">
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

            <div className="loadSN">
               <label htmlFor="">Medications:</label>
              <Select
              options={medications}
              isMulti
              value={selectedMedics}
              onChange={handleChange}
              menuPosition='fixed'
              classNames={{
                control: () => "h-auto border border-gray-800 ",
                // option: ({isFocused, isSelected}) => `cursor-pointer ${isSelected ? "bg-gray-500" : isFocused ? "bg-gray-700 text-white" : "text-white" }`
              }}
              />
              
               {/* <textarea 
                placeholder='Input valid Medication Codes (split by "," [comma])'
                ></textarea>  */}
                 {/* onChange={(e) => setMedications(e.target.value.split(","))} */}
            </div>
            <button className='' type='submit'>
            {loading ? "Loading Evtol..." : "Load EVTOL"}
            </button>
            {error && (
          <p className="text-[14px] text-red-500 pt-1 text-sm">{error}</p>
          )}
            {/* {message &&  */}
            {/* <p className='message'> */}
                {/* {message} */}
            {/* Evtol with serial number NDDHEDJDHIEUI loaded successfully */}
            {/* </p> */}
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
