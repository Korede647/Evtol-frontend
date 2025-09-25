
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MngEvtol from './pages/manageEvtol/MngEvtol'
import Medication from './pages/medication/Medication'
import LoadEvtol from './pages/loadEvtol/LoadEvtol'
import Delivery from './pages/delivery/Delivery'
import Dashboard from './pages/dashBody/Dashboard'
import LoadMedic from './pages/LoadMedic/LoadMedic'
import BatteryLog from './pages/batteryLog/BatteryLog'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

const queryClient = new QueryClient();


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/signup' element = {<Signup/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/gallery' element = {<Gallery/>} />
        <Route path='/faq' element= {<FAQ/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/dashboard' element = {<Dashboard/>}/>
         <Route path= '/manageEvtol' element = {<MngEvtol/>} />
         <Route path='/medications' element = {<Medication/>} />
         <Route path='/loadEvtol' element = {<LoadEvtol/>} />
         <Route path='/loadedMedic' element = {<LoadMedic/>} />
         <Route path='/delivery' element = {<Delivery/>} />
         <Route path='/batteryLog' element = {<BatteryLog/>} />
         <Route path='*' element = {<NotFound/>} />
      </Routes>
    </Router>
      </TooltipProvider>
  </QueryClientProvider>

    </>
  )
}

export default App
