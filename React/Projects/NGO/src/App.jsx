import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import VolunteerForm from './components/VolunteerForm.jsx'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
   <BrowserRouter>
   <Navbar />
   <div className='flex-grow'>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
        <Route path="/volunteer" element={<VolunteerForm/>}></Route>
    </Routes>
    </div>
     <Footer />
   </BrowserRouter>
    </div>

  )
}

export default App