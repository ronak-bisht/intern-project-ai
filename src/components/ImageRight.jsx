import React from 'react';

const ImageRight = ({images}) => {
  return (
    <div className="relative mt-[2rem] sm:mt-0 w-full h-[400px] bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-white rounded-lg  overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute z-50 ${getPositionClasses(index)}`}
              >
                <img
                  src={src}
                  alt={`Nike shoe ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/5 h-3/5 bg-orange-500 rounded-lg shadow-xl overflow-hidden">
                <img
                  src={images[2]}
                  alt="Featured Nike shoe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPositionClasses = (index) => {
  switch (index) {
    case 0: return "top-4 left-4 w-1/4 h-1/4";
    case 1: return "top-4 right-4 w-1/4 h-1/4";
    case 2: return "hidden";
    case 3: return "bottom-4 right-4 w-1/4 h-1/4";
    default: return "";
  }
};

export default ImageRight;