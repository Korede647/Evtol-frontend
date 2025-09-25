import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <AboutSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home
