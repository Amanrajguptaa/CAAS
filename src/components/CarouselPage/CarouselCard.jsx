import React, { useState } from 'react';

const CarouselCard = ({ src, altText = "Post Video" }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Convert to webm format if using cloudinary
  const optimizedSrc = src.includes("cloudinary.com")
    ? src.replace('/upload/', '/upload/f_webm/') // Add format conversion
    : src; // Fallback if not using Cloudinary

  return (
    <div
      className="p-1 relative h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white flex justify-center items-center transition-all duration-150 ease-in-out"
      style={{
        boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00";
        e.currentTarget.style.transform = "translateY(2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      {/* Placeholder video (optional) */}
      <video
        src={optimizedSrc} // Use optimizedSrc here
        alt={altText}
        className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ease-in-out ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => console.error("Error loading video:", optimizedSrc)}
        muted
        loop
        autoPlay
        preload="metadata"
      />
    </div>
  );
};

export default CarouselCard;
