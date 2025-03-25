
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import MngEvtol from './pages/manageEvtol/MngEvtol'
import Medication from './pages/medication/Medication'
import LoadEvtol from './pages/loadEvtol/LoadEvtol'
import Delivery from './pages/delivery/Delivery'
import Dashboard from './pages/dashBody/Dashboard'
import LoadMedic from './pages/LoadMedic/LoadMedic'
import BatteryLog from './pages/batteryLog/BatteryLog'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Dashboard/>}/>
         <Route path= '/manageEvtol' element = {<MngEvtol/>} />
         <Route path='/medications' element = {<Medication/>} />
         <Route path='/loadEvtol' element = {<LoadEvtol/>} />
         <Route path='/loadedMedic' element = {<LoadMedic/>} />
         <Route path='/delivery' element = {<Delivery/>} />
         <Route path='/batteryLog' element = {<BatteryLog/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
