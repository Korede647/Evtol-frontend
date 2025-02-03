import React, { useEffect, useState } from 'react'
import "./medication.css"
import SideBar from '../../components/sidebar/SideBar'
import axios from 'axios'
import { MEDICATIONS_URL } from '../../components/API_URL'

const Medication = () => {
  const [medication, setMedication] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(MEDICATIONS_URL)
      if(response.data.status === "success"){
        setMedication(response.data)
      }else{
        console.log(response.data.message);
        <p>Error Retrieving Medications</p>
      }
  };
    fetchData();
  }, [])

  return (
    <div className='medicMain'>
       <SideBar/>
       <div className="medic">

        <div className="medictop">
        <h2>Medications</h2>
        <button>Add New Medication</button>
        </div>

         {medication.length > 0 ? (
        <div className="medicCards">
             {medication.map((medic) => (
            <div className="card">
                 <div className="image">
                 <img src= {medic.medicImage} alt="" />
             </div>
             <div className="medicText">
                 <p>Name: <b>{medic.name}</b></p>
                 <p>Code: <b>{medic.code}</b></p>
                 <p>Weight: <b>{medic.weight}g</b></p>
             </div>
             </div>
              ))}
           </div>
          ): (
            <p>No Medications Found</p>
          )}
          

       </div>
    </div>
  )
}

export default Medication
