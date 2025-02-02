
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import MngEvtol from './pages/manageEvtol/MngEvtol'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<SideBar/>}/>
         <Route path= "/manageEvtol" element = {<MngEvtol/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
