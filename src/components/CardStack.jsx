import React, { useState } from 'react';

function CardStack() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-40 sm:w-60 h-72 ${isHovered ? 'flex space-x-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '300px',width: isHovered? '100%' : '', padding: isHovered ? '10px' : ''}}
    >
      <div
        className={`absolute bg-white h-64 w-52 sm:h-72 sm:w-60   rounded-xl border-[2px] border-black ${isHovered ? 'relative' : ''}`}
        style={{ top: isHovered ? '0' : '0px', left: isHovered ? '0' : '0px', zIndex: 7, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl bject-cover w-full h-full" src="/post1.jpg" alt="" />
      </div>
      <div
        className={`absolute bg-[#a7ff00] h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[4deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-12px', zIndex: 6, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="/post2.jpg" alt="" />
      </div>
      <div
        className={`absolute bg-white h-64 w-52 sm:h-72 sm:w-60 rounded-lg border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[8deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-20px', zIndex: 5, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img  className="rounded-xl object-cover w-full h-full" src="/post3.jpg" alt="" />
      </div>
      <div
        className={`hidden md:block absolute bg-[#a7ff00] h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[12deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-28px', zIndex: 4, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="/post4.jpg" alt="" />
      </div>
      <div
        className={`hidden md:block absolute bg-white h-64 w-52 sm:h-72 sm:w-60 rounded-xl border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[16deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-36px', zIndex: 3, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img className="rounded-xl object-cover w-full h-full" src="/post5.jpg" alt="" />
      </div>
      {/* <div
        className={`absolute bg-[#a7ff00] h-72 w-60 rounded-lg border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[20deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-44px', zIndex: 2, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img src="" alt="" />
      </div>
      <div
        className={`absolute bg-white h-72 w-60 rounded-lg border-[2px] border-black ${isHovered ? 'relative' : '-rotate-[24deg]'}`}
        style={{ top: isHovered ? '0' : '5px', left: isHovered ? '0' : '-50px', zIndex: 1, transform: isHovered ? 'rotate(0deg)' : '' }}
      >
        <img src="" alt="" />
      </div> */}
    </div>
  );
}

export default CardStack;
