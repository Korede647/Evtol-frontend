
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import MngEvtol from './pages/manageEvtol/MngEvtol'
import Medication from './pages/medication/Medication'
import LoadEvtol from './pages/loadEvtol/LoadEvtol'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<SideBar/>}/>
         <Route path= '/manageEvtol' element = {<MngEvtol/>} />
         <Route path='/medications' element = {<Medication/>} />
         <Route path='/loadEvtol' element = {<LoadEvtol/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
