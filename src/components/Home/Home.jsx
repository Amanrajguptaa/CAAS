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
import Website from '../Website'

function Home() {
  return (
    <div className='pt-5 font-brasika text-white overflow-hidden 2xl:max-w-7xl mx-auto'>
    <div
        className="mx-2 md:mx-10 rounded-t-[30px] md:rounded-t-[50px] bg-[#0038c7]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >
      <HeroSection/>
      <HeroVideo/>
      <BrandService/>
      <Carousel/>
      <Creativity/>
      <StackCards/>
      <FullCarousel/>
      <PhoneSection/>
      <Website/>
      <Ppt/>
      <Experience/>
      <About/>
    </div>
    </div>
  )
}

export default Home
