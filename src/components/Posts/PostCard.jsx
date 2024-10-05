import React from 'react';

const PostCard = ({ src, altText = "Post Image" }) => {
  return (
    <div>
      <div
        className="h-40 w-40 md:h-64 md:w-64 border border-white rounded-lg bg-white p-1 flex justify-center items-center transition-all duration-150 ease-in-out"
        style={{
          boxShadow: "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "3px 3px 0px #a7ff00, 3px 0px 0px #a7ff00"; // Adjust shadow for depth effect
          e.currentTarget.style.transform = "translateY(2px)"; // Slight downward shift
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "6px 6px 0px #a7ff00, 6px 0px 0px #a7ff00"; // Restore original shadow
          e.currentTarget.style.transform = "translateY(0px)"; // Reset position
        }}
      >
        <img
          src={src}
          alt={altText}  // Provide meaningful alt text
          className="object-cover h-full w-full"
          loading="lazy" // Lazy load for performance improvement
        />
      </div>
    </div>
  );
};

export default PostCard;
