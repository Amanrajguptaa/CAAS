import React from 'react'
import HeroSection from '../HeroSection'
import HeroVideo from '../HeroVideo'
import BrandService from '../BrandService'
import Creativity from '../Creativity'
import Carousel from '../Carousel'
import StackCards from '../StackCards'
import FullCarousel from '../FullCarousel'
import PhoneSection from '../PhoneSection'
import Ppt from '../Ppt'
import Experience from '../Experience'
import About from '../About'

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home
