
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path= "/" element = {<SideBar/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
