import React, { useState, useEffect } from 'react';

const ReelsCard = ({ src, placeholder }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Track if the component is in view

  // Convert Cloudinary URL to WebM format
  const optimizedSrc = src.includes("cloudinary.com")
    ? src.replace('/upload/', '/upload/f_webm/')
    : src;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentRef = document.getElementById(src); // Get the component by its ID
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
      {/* Blurry Placeholder */}
      {!videoLoaded && !videoError && !imageLoaded && (
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-[50px] z-0 blur-md"
          src={placeholder}
          alt="Loading"
        />
      )}

      {/* Video as the background */}
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

      {/* Show error message if video fails to load */}
      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          Error loading video
        </div>
      )}

      {/* Phone image overlay */}
      <img
        className={`absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-500 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        src="/phone.png"
        alt="Phone"
        onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the phone image loads
      />
    </div>
  );
};

export default ReelsCard;
