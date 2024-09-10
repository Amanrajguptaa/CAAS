import React from 'react';

function Footer() {
  return (
    // <div className='h-auto '>
    //   <div className="text-black h-auto">
    //     <section className="mx-5 md:mx-10  bg-[#0038c7] relative">
    //       <div className='relative'>
    //         <img className="border rounded-t-lg border-none h-full w-full object-cover" src="/gridd.png" alt="" />
    //       </div>

    //       <div className="absolute inset-x-0 bottom-0">
            <footer className="bg-white shadow-md p-2 sm:p-6 rounded-t-lg w-full mt-20 sm:mt-0">
              <div className="container mx-auto flex justify-between items-start">
                <img className="" src="/webLogo.png" alt="" srcset="" />
                <div className="flex space-x-10">
                  <div className='flex gap-7 sm:gap-20 px-3 sm:px-10'>
                    <div>
                      <h4 className="font-bold text-sm sm:text-lg">About Us</h4>
                      <ul className="mt-2 text-[10px] sm:text-sm space-y-1">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#brands">Brands</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-lg">All Works</h4>
                      <ul className="mt-2 text-[10px] sm:text-sm space-y-1">
                        <li><a href="#posts">Posts</a></li>
                        <li><a href="#carousels">Carousels</a></li>
                        <li><a href="#reels">Reels</a></li>
                        <li><a href="#ppt">Presentations</a></li>
                      </ul>
                    </div>
                    {/* <div className='hidden'>
                      <h4 className="font-bold text-sm">Heading</h4>
                      <ul className="mt-2 text-[8px] space-y-1">
                        <li>Sub-Heading</li>
                        <li>Sub-Heading</li>
                        <li>Sub-Heading</li>
                        <li>Sub-Heading</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </footer>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}

export default Footer;
