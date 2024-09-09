import React from 'react'
import './Ppt.css'
function Ppt() {
  return (
    <div id='ppt' className=" relative  sm:mt-0 pb-96 z-30">
      <div className="text-black">
        <section className="mx-2 md:mx-10 h-auto   bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img
              className=""
              src="/gridd.png"
              alt=""
            />
          </div>

          <div className="absolute top-5 sm:top-40 flex flex-col ">
            
            
      <div class="main-container ">

<div class="card-container-01">

    <div class=" card-even mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt1.jpg" alt="" />

    </div>

    <div class=" card-odd mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt2.jpg" alt="" />

    </div>

    <div class=" card-even mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt3.jpg" alt="" />

    </div>

    <div class=" card-odd mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt4.jpg" alt="" />

    </div>

</div>

<div class="card-container-01">

    {/* <div class="card-even mr-[2px] md:mr-[3px]">
      <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt5.jpg" alt="" />
    </div>

    <div class="card-odd mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt1.jpg" alt="" />

    </div> */}

    {/* <div class="card-even mr-[2px] md:mr-[3px]">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt2.jpg" alt="" />

    </div>

    <div class="card-odd mr-[2px] md:mr-[3px] hidden md:visible ">
    <img className="object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-10" src="/ppt3.jpg" alt="" />

    </div> */}

</div>
</div>

<div class="tag text-sm md:text-auto">
<div className='text-lg md:text-6xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-6xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-6xl mr-5 md:mr-32'>PPTs</div>
<div className='text-lg md:text-6xl mr-5 md:mr-32'>PPTs</div>


</div>


<div class="main-container">
<div class="card-container-02 md:mt-52">

    <div class="card-odd mr-[2px] md:mr-[3px]">
      <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt6.jpg" alt="" />
    </div>

    <div class="card-even mr-[2px] md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt7.jpg" alt="" />

    </div>

    <div class="card-odd mr-[2px] md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt8.jpg" alt="" />

    </div>

    <div class="card-even mr-[2px] md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt9.jpg" alt="" />

    </div>

</div>

<div class="card-container-02">

    {/* <div class="card-odd md:mr-[3px] ">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt6.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt7.jpg" alt="" />

    </div> */}

    {/* <div class="card-odd md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt8.jpg" alt="" />

    </div>

    <div class="card-even md:mr-[3px]">
    <img className='object-cover w-full h-full rounded-[3px] sm:rounded-xl mr-[2px] md:mr-[3px]' src="/ppt9.jpg" alt="" />

    </div> */}

</div>
</div>


    </div>

    <div className='absolute inset-0 flex justify-center items-center top-[140%]'><button className=" px-12 py-2 border-[2px] border-[#a7ff00] rounded-3xl bg-white text-black transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105">
        Check’em All
      </button></div>
    </section>
    </div>
    </div>
  )
}

export default Ppt
