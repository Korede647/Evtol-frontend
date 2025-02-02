import React from 'react'
import "./mngEvtol.css"
import SideBar from '../../components/sidebar/SideBar'

const MngEvtol = () => {
  return (
    <div className='mngMain'>
      <SideBar/>
      <div className="mng">
         <div className="text">
            <h3>EVTOL Drones & their features</h3>
         </div>
      <table className='tab'>
       <tr className='thead'>
        <th>Serial No</th>
        <th>Model</th>
        <th>Weight Limit</th>
        <th>Battery Capacity</th>
        <th>Status</th>
       </tr>

        <tr className='evtol'>
            <td>ENENNFJJKKSK</td>
            <td>CRUISERWEIGHT</td>
            <td>400.0</td>
            <td>90%</td>
            <td> DELIVERING</td>
            </tr>
      </table>

      </div>
    </div>
  )
}

export default MngEvtol
