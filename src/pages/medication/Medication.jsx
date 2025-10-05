import React, { useEffect, useState } from 'react'
import "./medication.css"
import SideBar from '../../components/sidebar/SideBar'
import axios from 'axios'
import { MEDICATIONS_URL } from '../../components/API_URL'
import Pagination from '../../components/Pagination'
import Modal from '../../components/Modal'

const Medication = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [medication, setMedication] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)

  const Token = localStorage.getItem("Token")
  const handleModalDisplay = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(MEDICATIONS_URL, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      })
      if(response.status === 200){
        setMedication(response.data.medics)
        console.log(response.data)
      }else{
        console.log(response.data.message);
        <p>Error Retrieving Medications</p>
      }
  };
    fetchData();
  }, [])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentMedics = medication.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => {
    if (num >= 1 && num <= Math.ceil(medication.length / postPerPage)) {
      setCurrentPage(num);
    }
  }

  return (
    <div className='medicMain'>
       <SideBar/>
       <div className="medic">

        <div className="medictop">
        <h2>Medications</h2>
        <button className='cursor-pointer' onClick={handleModalDisplay}>Add New Medication</button>
        </div>

         {currentMedics.length > 0 ? (
          <div>
        <div className="medicCards">
             {currentMedics.map((medic) => (
            <div className="card" key= {medic.code}>
                 <div className="image">
                 <img src= {medic.image} alt="" />
             </div>
             <div className="medicText">
                 <p>Name: <b>{medic.name}</b></p>
                 <p>Code: <b>{medic.code}</b></p>
                 <p>Weight: <b>{medic.weight}g</b></p>
                 <p>Price: <b>N{medic.price}</b></p>
             </div>
             </div>
              ))}
           </div>
           <Pagination
           postPerPage={postPerPage}
           totalPosts={medication.length}
           paginate={paginate}
           currentPage={currentPage}
          
           />
           </div>
          ): (
            <p>No Medications Found</p>
          )}
          

       </div>
       {isOpen && (
        <Modal/>
       )}
    </div>
  )
}

export default Medication
