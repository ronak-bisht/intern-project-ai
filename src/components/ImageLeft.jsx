import React, { useState,useEffect } from 'react';

const ImageLeft = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };
  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);
  return (
    <div className="flex w-full flex-col items-center">
      <div
        className={`w-full max-w-md ${isZoomed ? 'h-[500px]' : 'h-[300px]'} mb-4 transition-all duration-500 cursor-pointer`}
        onClick={handleImageClick}
      >
        <img 
          src={selectedImage} 
          alt="Selected shoe" 
          className={`w-full h-full object-cover rounded-lg shadow-lg ${isZoomed ? 'scale-125' : 'scale-100'} transition-transform duration-500`}
        />
      </div>
      <div className="flex z-50 space-x-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className="focus:outline-none"
          >
            <img 
              src={img} 
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 rounded ${selectedImage === img ? 'border-2 border-blue-500' : ''}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageLeft;
