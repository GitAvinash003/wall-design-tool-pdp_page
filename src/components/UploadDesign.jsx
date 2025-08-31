import React, { useRef } from 'react';

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
    // Toggle off if already selected and not custom
    if (selectedDesign?.src === design.src && !selectedDesign?.isCustom) {
      onDesignSelect(null);
    } else {
      onDesignSelect(design);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-sm font-medium mb-2">Upload Design</h2>

      <div className="flex items-center gap-4">
        {/* Upload Button */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-24 h-24 border-2 border-dashed border-pink-500 text-pink-500 text-sm flex items-center justify-center rounded"
          >
            + Upload
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </div>

        {/* Predefined Design Thumbnails */}
        <div className="flex overflow-x-auto gap-2">
          {defaultDesigns.map((design, idx) => {
            const isSelected = selectedDesign?.src === design.src && !selectedDesign?.isCustom;

            return (
              <div
                key={idx}
                className={`relative w-24 h-24 rounded border cursor-pointer ${
                  isSelected ? 'border-pink-500' : 'border-gray-300'
                }`}
                onClick={() => handleDesignClick(design)}
              >
                <img
                  src={design.src}
                  alt={`Design ${idx + 1}`}
                  className="w-full h-full object-cover rounded"
                />
                {isSelected && (
                  <div className="absolute top-1 right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadDesign;
