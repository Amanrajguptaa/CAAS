import React, { useState, useEffect } from 'react';

const ReelsCard = ({ src, placeholder }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  const optimizedSrc = src.includes("cloudinary.com")
    ? src.replace('/upload/', '/upload/f_webm/')
    : src;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    const currentRef = document.getElementById(src); 
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src]);

  return (
    <div id={src} className="relative w-[140px] h-[280px] md:w-[285px] md:h-[570px] z-50">
      {!videoLoaded && !videoError && !imageLoaded && (
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0 blur-md"
          src={placeholder}
          alt="Loading"
        />
      )}

      {isVisible && (
        <video
          className={`p-0.5 md:p-2 absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0 transition-opacity duration-500 ease-in-out ${videoLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={optimizedSrc}
          autoPlay
          loop
          muted
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => {
            console.error("Error loading video:", optimizedSrc);
            setVideoError(true);
          }}
        />
      )}

      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          Error loading video
        </div>
      )}

      <img
        className={`absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-500 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        src="/phone.png"
        alt="Phone"
        onLoad={() => setImageLoaded(true)} 
      />
    </div>
  );
};

export default ReelsCard;
