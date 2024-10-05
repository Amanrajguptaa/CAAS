import React, { useState } from 'react';

const PostCard = ({ src, altText = "Post Image" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Apply transformations to convert images to WebP format
  const optimizedSrc = src.includes('cloudinary.com')
    ? src.replace('/upload/', '/upload/f_webp,q_auto,w_300/')
    : src;

  const placeholderSrc = src.includes('cloudinary.com')
    ? src.replace('/upload/', '/upload/e_blur:200,f_webp,w_10/')
    : src;

  return (
    <div className="p-1 relative h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white flex justify-center items-center transition-all duration-150 ease-in-out"
      style={{
        boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
        overflow: "hidden" // Ensure contents do not overflow the container
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
      {/* Placeholder image (blurred, WebP format) */}
      <img
        src={placeholderSrc}
        alt={altText}
        className={`object-cover h-full w-full transition-opacity duration-500 ease-in-out ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Optimized WebP image */}
      <img
        src={optimizedSrc}
        alt={altText}
        className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)} // Image has loaded, fade in the optimized image
      />
    </div>
  );
};

export default PostCard;
