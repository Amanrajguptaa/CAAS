import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import HeroVideo from './components/HeroVideo'
import BrandService from './components/BrandService'
import Carousel from './components/Carousel.jsx'
import Creativity from './components/Creativity.jsx'
import StackCards from './components/StackCards.jsx'
import PhoneSection from './components/PhoneSection.jsx'
import FullCarousel from './components/FullCarousel.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Ppt from './components/Ppt.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
      <HeroVideo/>
      <BrandService/>
      <Carousel/>
      <Creativity/>
      <StackCards/>
      <FullCarousel/>
      <PhoneSection/>
      <Ppt/>
      <Experience/>
      <About/>
    </>
  )
}

export default App
