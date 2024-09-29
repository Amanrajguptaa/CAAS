import React, { useState } from 'react';

function CardStack() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-40 sm:w-60 h-72 transition-all duration-500 ease-in-out ${isHovered ? 'flex space-x-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '300px', width: isHovered ? '100%' : '', padding: isHovered ? '10px' : '' }}
    >
      <div
        className={`absolute bg-white h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black transition-all duration-500 ease-in-out ${isHovered ? 'relative' : ''}`}
        style={{ top: isHovered ? '0' : '0px', left: isHovered ? '0' : '0px', zIndex: 7, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631457/CAAS/post1_awugxg.jpg" alt="" />
      </div>
      <div
        className={`hidden md:block absolute bg-[#a7ff00] h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black transition-all duration-500 ease-in-out ${isHovered ? 'relative' : '-rotate-[4deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-12px', zIndex: 6, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631468/CAAS/post2_dpvyxk.jpg" alt="" />
      </div>
      <div
        className={`absolute bg-white h-64 w-52 sm:h-72 sm:w-60 rounded-lg border-[2px] border-black transition-all duration-500 ease-in-out ${isHovered ? 'relative' : '-rotate-[8deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-20px', zIndex: 5, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631468/CAAS/post3_wt2cgs.jpg" alt="" />
      </div>
      <div
        className={`hidden md:block absolute bg-[#a7ff00] h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black transition-all duration-500 ease-in-out ${isHovered ? 'relative' : '-rotate-[12deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-28px', zIndex: 4, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631462/CAAS/post4_xpiiws.jpg" alt="" />
      </div>
      <div
        className={`hidden md:block absolute bg-white h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black transition-all duration-500 ease-in-out ${isHovered ? 'relative' : '-rotate-[16deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-36px', zIndex: 3, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="https://res.cloudinary.com/dwwd1oncs/image/upload/v1727631462/CAAS/post5_pifplj.jpg" alt="" />
      </div>
    </div>
  );
}

export default CardStack;
