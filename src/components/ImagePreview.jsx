import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import { FreeMode, Thumbs, Navigation } from 'swiper/modules';
import DesignEditor from './DesignEditor'; // Make sure this path is correct


const ImagePreview = ({ designImage, widthFt, widthIn, heightFt, heightIn }) => {




  const [selectedImage, setSelectedImage] = useState({
    src: 'images/mask_1.png',
    type: 'front',
  });

  const swiperRef = useRef(null);

  const images = [
    { src: 'images/mask_1.png', type: 'front' },
    { src: 'images/mask_3.png', type: 'mask' },
    { src: 'images/sample_3.jpeg', type: 'video', videoSrc: 'videos/sq_wallpaper.mp4' },
    { src: 'images/sample_5.png', type: 'image' },
    { src: 'images/sample_6.png', type: 'image' },
    { src: 'images/sample7.png', type: 'image' },
  ];

  const renderPreview = () => {
    if (selectedImage.type === 'video') {
      return (
        <video
          key={selectedImage.videoSrc}
          autoPlay
          muted
          controls
          className="w-full max-h-[515px] object-contain p-2"
        >
          <source src={selectedImage.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (selectedImage.type === 'front') {
      return (
        <div className="relative p-5 bg-white rounded w-[539px] h-[638px]">
          <img
            src={selectedImage.src}
            alt="front"
            className="absolute top-0 left-0 w-[539px] h-[638px] object-cover z-0"
          />

          {/* Repeating design overlay */}
          {designImage && (
            <DesignEditor imageSrc={designImage.src} />
          )}
        </div>
      );
    }


   if (selectedImage.type === 'mask') {
  return (
    <div className="relative w-full h-[490px] overflow-hidden bg-white rounded">
      
      {/* Design image as the background */}
      {designImage && (
        <div
          className="absolute top-0 left-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url(${designImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Masked furniture image on top */}
      <img
        src={selectedImage.src}
        alt="Room Scene"
        className="relative z-10 object-contain w-full h-full"
        style={{
          maskImage: `url(${selectedImage.src})`,
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          maskPosition: 'center bottom',
          WebkitMaskImage: `url(${selectedImage.src})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center bottom',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}


    // Default image preview
    return (
      <div className="relative w-full max-h-[515px] p-2 overflow-hidden">
        <img
          src={selectedImage.src}
          alt="Selected Room"
          className="w-full max-h-[515px] object-contain"
        />
      </div>
    );
  };

  return (
    <div className="flex w-full gap-3 md:w-1/2">
      {/* Thumbnail Sidebar */}
      <div className="relative flex flex-col items-center w-20">
        <button
          className="z-10 flex items-center justify-center w-6 h-6 mb-2"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous thumbnails"
        >
          ▲
        </button>

        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          modules={[FreeMode, Thumbs, Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="h-[500px] w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img
                src={img.src}
                alt={`Thumbnail ${i + 1}`}
                className={`w-20 h-24 cursor-pointer border rounded object-contain ${selectedImage.src === img.src ? 'border-pink-500' : 'border-gray-300'
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="z-10 flex items-center justify-center w-3 h-3 mt-1"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next thumbnails"
        >
          ▼
        </button>
      </div>

      {/* Main Preview */}
       
      <div className="flex justify-center flex-1 ">{renderPreview()}</div>
    </div>
  );
};

export default ImagePreview;