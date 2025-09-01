import React, { useRef } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const defaultDesigns = [
  { src: 'design/design_1.png' },
  { src: 'design/design_2.png' },
  { src: 'design/design_3.png' },
  { src: 'design/design_4.png' },
  { src: 'design/design_5.png' },
];

const UploadDesign = ({ selectedDesign, onDesignSelect }) => {
  const fileInputRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onDesignSelect({ src: event.target.result, isCustom: true });
    };
    reader.readAsDataURL(file);
  };

  const handleDesignClick = (design) => {
    if (selectedDesign?.src === design.src && !selectedDesign?.isCustom) {
      onDesignSelect(null);
    } else {
      onDesignSelect(design);
    }
  };

  return (
    <div className="w-full mb-3">
      <div className="flex items-start gap-3">
        {/* Upload Box */}
        <div
          className="flex flex-col items-center justify-center mt-5 bg-white border border-gray-300 rounded-lg cursor-pointer w-30 h-25 hover:shadow "
          onClick={() => fileInputRef.current.click()}
        >
          <div className="flex items-center justify-center mt-3 text-xl text-white bg-pink-500 rounded-full h-7 w-7">
            <FaPlus />
          </div>
          <p className="px-1 text-sm leading-tight text-center text-pink-500">
            Upload Design
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-center shrink-0 h-28">
          <div className="flex flex-col items-center justify-center h-20 mt-8">
            <div className="w-px h-full bg-gray-300" />
            <span className="my-2 text-sm text-gray-400">or</span>
            <div className="w-px h-full bg-gray-300" />
          </div>
        </div>


        {/* Swiper Thumbnails */}
        <div className="flex-1 overflow-hidden">
          <h2 className="mb-2 text-sm font-medium text-gray-800">
            Select Design (30K+ Options)
          </h2>

          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={8}
            navigation
            className="hide-scrollbar"
          >
            {defaultDesigns.map((design, idx) => {
              const isSelected =
                selectedDesign?.src === design.src && !selectedDesign?.isCustom;

              return (
                <SwiperSlide key={idx}>
                  <div
                    className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${isSelected ? 'border-pink-500' : 'border-gray-300'
                      }`}
                    onClick={() => handleDesignClick(design)}
                  >
                    <img
                      src={design.src}
                      alt={`Design ${idx + 1}`}
                      className="object-cover w-full h-full"
                    />
                    {isSelected && (
                      <div
                        className="absolute top-[0px] right-[-2px] w-5 h-5 rounded-full bg-black   border-pink-500 flex items-center justify-center text-md text-white shadow-md z-10 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDesignSelect(null);
                        }}
                      >
                        <FaTimes />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Hide Scrollbar Styling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          background: #fff;
          border-radius: 9999px;
          width: 32px;
          height: 32px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default UploadDesign;
