import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesPage from './components/ServicesPage'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import { Contact } from 'lucide-react'
import ContactService from './components/ContactService'
import AllEnquiries from './components/AllEnquiries'
import Footer from './components/Footer'


const App = () => {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <>
      <Navbar onOpenAuth={() => setAuthOpen(true)} />

      <div id="home" className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
      </div>

      <div id="about">
        <AboutUsSection/>
      </div>

      <div id="services">
        <ServicesPage/>
      </div>

      <div id="pricing">
        <Pricing/>
      </div>

      <div id="testimonials">
        <Testimonials/>
      </div>

      <div id="contact">
        <ContactService/>
      </div>

      <div id="enquiries">
        <AllEnquiries/>
      </div>

      <Footer/>
      
    </>
  )
}

export default App
