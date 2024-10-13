import React, { useState, useEffect } from 'react';

const ImageLeft = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="flex relative w-full flex-col items-center">
      <div
        className="w-full max-w-md h-[300px] mb-4 cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={selectedImage}
          alt="Selected shoe"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex absolute bottom-0 z-50 space-x-2">
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative max-w-4xl sm:h-[600px] h-[300px] w-full">
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full focus:outline-none"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Zoomed shoe"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLeft;
