import React from 'react';
import { FiRotateCw, FiTrash2 } from 'react-icons/fi';
import { MdOutlineColorLens } from 'react-icons/md';

const EditDesignPanel = ({
  onClose,
  repeatPattern,
  setRepeatPattern,
  repeatCount,
  setRepeatCount,
  padding,
  setPadding,
  border,
  setBorder,
  backgroundColor,
  setBackgroundColor,
  designImage,
  setDesignImage,
  imagePosition,
  setImagePosition,
  rotation,
  setRotation,
}) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setDesignImage(src);
    }
  };

  const handleDelete = () => {
    setDesignImage('');
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div
      className="fixed top-0 right-0 z-50 w-[400px] h-full bg-white border-l border-gray-200 shadow-xl p-5 overflow-y-scroll scrollbar-none"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Advanced Options</h2>
        <button onClick={onClose} className="text-2xl font-bold text-gray-600 hover:text-red-500">
          &times;
        </button>
      </div>

      {/* Pattern Toggle */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Patterns</p>
        <div className="flex gap-2 mb-4">
          <button
            className={`border p-2 w-1/2 rounded text-sm ${
              !repeatPattern ? 'border-pink-500 bg-pink-100' : 'border-gray-300'
            }`}
            onClick={() => setRepeatPattern(false)}
          >
            No Repeat
          </button>
          <button
            className={`border p-2 w-1/2 rounded text-sm ${
              repeatPattern ? 'border-pink-500 bg-pink-100' : 'border-gray-300'
            }`}
            onClick={() => setRepeatPattern(true)}
          >
            Repeat
          </button>
        </div>

        {/* Conditional options - only show if "Repeat" is enabled */}
        {repeatPattern && (
          <>
            <div className="mb-3">
              <label className="block mb-1 text-sm font-medium">Repeat Patterns</label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={repeatCount}
                onChange={(e) => setRepeatCount(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1 text-sm font-medium">Add Padding</label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
            </div>
          </>
        )}

        {/* Always show: Border and Color Picker */}
        <div className="mb-3">
          <label className="block mb-1 text-sm font-medium">Border</label>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">Color</span>
          <label className="relative flex items-center cursor-pointer">
            <MdOutlineColorLens className="text-lg" />
            <input
              type="color"
              className="absolute w-6 h-6 opacity-0 cursor-pointer"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Image alignment & rotation */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Image Position</p>
        <div className="flex justify-between mb-4 text-sm text-gray-600">
          <button
            className={`px-3 py-1 rounded ${
              imagePosition === 'bottom' ? 'bg-pink-100 border border-pink-500' : 'border border-gray-300'
            }`}
            onClick={() => setImagePosition('bottom')}
          >
            Bottom
          </button>
          <button
            className={`px-3 py-1 rounded ${
              imagePosition === 'left' ? 'bg-pink-100 border border-pink-500' : 'border border-gray-300'
            }`}
            onClick={() => setImagePosition('left')}
          >
            Left
          </button>
          <button
            className={`px-3 py-1 rounded ${
              imagePosition === 'center' ? 'bg-pink-100 border border-pink-500' : 'border border-gray-300'
            }`}
            onClick={() => setImagePosition('center')}
          >
            Center
          </button>
          <button
            className="p-2 border border-gray-300 rounded hover:border-pink-500"
            onClick={handleRotate}
            title={`Rotate (current: ${rotation}°)`}
          >
            <FiRotateCw />
          </button>
        </div>
      </div>

      {/* Design preview + file upload/delete */}
      <div className="mb-6">
        <div className="p-2 mb-2 border-2 border-pink-400 rounded bg-gray-50">
          {designImage ? (
            <img
              src={designImage}
              alt="Design Preview"
              className="object-contain w-full h-40 mb-2"
              style={{
                transform: `rotate(${rotation}deg)`,
                objectPosition:
                  imagePosition === 'bottom'
                    ? 'center bottom'
                    : imagePosition === 'left'
                    ? 'left center'
                    : 'center center',
              }}
            />
          ) : (
            <div className="text-sm text-center text-gray-400">No image selected</div>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="text-pink-500 cursor-pointer">
            Replace
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <button className="flex items-center gap-1 text-red-500" onClick={handleDelete}>
            <FiTrash2 /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDesignPanel;
