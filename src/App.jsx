
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MngEvtol from './pages/manageEvtol/MngEvtol'
import Medication from './pages/medication/Medication'
import LoadEvtol from './pages/loadEvtol/LoadEvtol'
import Delivery from './pages/delivery/Delivery'
import Dashboard from './pages/dashBody/Dashboard'
import LoadMedic from './pages/LoadMedic/LoadMedic'
import BatteryLog from './pages/batteryLog/BatteryLog'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from "../pages/Home"
import About from './components/About'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/gallery' element = {<Gallery/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/dashboard' element = {<Dashboard/>}/>
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
