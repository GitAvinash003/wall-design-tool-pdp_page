// src/components/ScaleImageControls.jsx
import React from 'react';
import { FaPen } from 'react-icons/fa';

const ScaleImageControls = ({
  scale,
  autoFit,
  onScaleChange,
  onAutoFitChange,
  onEditClick,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mt-6">
      {/* Scale Slider */}
      <div className="flex items-center gap-4 flex-grow">
        <label className="text-sm font-medium whitespace-nowrap">Scale Image</label>
        <input
          type="range"
          min="0"
          max="100"
          value={scale}
          disabled={autoFit}
          onChange={(e) => onScaleChange(Number(e.target.value))}
          className="w-full h-2 accent-pink-500 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Auto Fit Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Auto fit</span>
        <button
          onClick={() => onAutoFitChange(!autoFit)}
          className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
            autoFit ? 'bg-pink-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
              autoFit ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* Edit Design */}
      <button
        onClick={onEditClick}
        className="flex items-center text-pink-600 text-sm font-medium hover:underline ml-4"
      >
        <FaPen className="mr-1 text-xs" />
        Edit Design
      </button>
    </div>
  );
};

export default ScaleImageControls;
