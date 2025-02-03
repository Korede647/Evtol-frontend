import React, { useEffect, useState } from 'react'
import "./mngEvtol.css"
import SideBar from '../../components/sidebar/SideBar'
import { VIEWALLEVTOL_URL } from '../../components/API_URL'
import axios from 'axios'

const MngEvtol = () => {
    const [evtol, setEvtol] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
           const response = await axios.get(VIEWALLEVTOL_URL)
           if(response.data.status === "bad request"){
            setEvtol(response.data)
           } else{
            console.log(response.data.message);
            <p>Error Retrieving Evtol</p>
           }
        };
        fetchData();
    }, [])

  return (
    <div className='mngMain'>
      <SideBar/>
      <div className="mng">
         <div className="text">
            <h3>EVTOL Drones & their features</h3>
         </div>
         {evtol.length > 0 ? (
           <table className='tab'>
           <tr className='thead'>
            <th>Serial No</th>
            <th>Model</th>
            <th>Weight Limit</th>
            <th>Battery Capacity</th>
            <th>Status</th>
           </tr>
               <tbody>
               {evtol.map((evtol) => (
               <tr className='evtol'>
                <td>{evtol.serialNo}</td>
                <td>{evtol.model}</td>
                <td>{evtol.weightLimit}</td>
                <td>{evtol.batteryCapacity}%</td>
                <td>{evtol.status}</td>
                </tr>
               ))}
               </tbody>
               </table>
         ): (
          <p>No Evtols Found </p>
         )}
      

      </div>
    </div>
  )
}

export default MngEvtol
