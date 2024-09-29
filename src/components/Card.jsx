import React from "react";

function Card({src}) {
  return (
    <div>
      <div className="bg-white h-40 w-28 sm:h-64 sm:w-60 p-2 rounded-2xl text-black  border-[2px] border-black ">
        <div className="bg-lime-500  h-full border-[2px] border-black rounded-xl">
          <video autoPlay muted loop className="object-cover w-full h-full" src={src}></video>
        </div>
      </div>
    </div>
  );
}

export default Card;
