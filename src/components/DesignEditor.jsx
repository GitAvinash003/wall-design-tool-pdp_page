import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import EditDesignPanel from './EditDesignPanel';

const BOX_WIDTH = 300;
const BOX_HEIGHT = 414;

const DesignEditor = ({ imageSrc }) => {
  const [scale, setScale] = useState(1);
  const [autoFit, setAutoFit] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Design editing states
  const [repeatPattern, setRepeatPattern] = useState(false);
  const [repeatCount, setRepeatCount] = useState(2);
  const [padding, setPadding] = useState(0);
  const [border, setBorder] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [designImage, setDesignImage] = useState(imageSrc || '');

  // Alignment and rotation
  const [imagePosition, setImagePosition] = useState('center'); // 'bottom', 'left', 'center'
  const [rotation, setRotation] = useState(0); // degrees: 0, 90, 180, 270

  // When design image changes, automatically enable autoFit and reset scale
  useEffect(() => {
    if (imageSrc) {
      setDesignImage(imageSrc);
      setAutoFit(true);
      setScale(1);
    }
  }, [imageSrc]);

  const handleScaleChange = (e) => {
    setScale(parseFloat(e.target.value));
    if (autoFit) setAutoFit(false);
  };

  const handleAutoFit = () => {
    setAutoFit((prev) => {
      const newAutoFit = !prev;
      if (newAutoFit) setScale(1);
      return newAutoFit;
    });
  };

  const getBackgroundPosition = () => {
    switch (imagePosition) {
      case 'bottom':
        return 'center bottom';
      case 'left':
        return 'left center';
      case 'center':
      default:
        return 'center center';
    }
  };

  const getBackgroundSize = () => {
    const innerWidth = BOX_WIDTH - 2 * padding;
    const innerHeight = BOX_HEIGHT - 2 * padding;

    if (repeatPattern) {
      const gap = 5; // px space between tiles
      const widthPerRepeat = innerWidth / repeatCount;
      const sizeWidth = widthPerRepeat - gap;
      return `${sizeWidth}px auto`;
    } else {
      if (autoFit) {
        return `${innerWidth}px ${innerHeight}px`;
      } else {
        return `${innerWidth * scale}px auto`;
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-2">
      {/* Image container */}
      <div
        className="relative overflow-hidden border border-gray-300 rounded"
        style={{
          width: BOX_WIDTH,
          height: BOX_HEIGHT,
          backgroundImage: `url(${designImage})`,
          backgroundRepeat: repeatPattern ? 'repeat' : 'no-repeat',
          backgroundSize: getBackgroundSize(),
          backgroundPosition: getBackgroundPosition(),
          padding: `${padding}px`,
          border: `${border}px solid ${backgroundColor}`,
          backgroundColor: backgroundColor,
          mixBlendMode: 'multiply',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.3s ease',
          boxSizing: 'border-box',
        }}
      />

      {/* Controls */}
      <div className="flex items-center w-full gap-6 px-4 py-2 mt-3 bg-white rounded shadow max-w-[600px]">
        <div className="flex flex-col">
          <label className="mb-1 text-xs font-medium">Scale Image</label>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.01"
            value={scale}
            
            onChange={handleScaleChange}
            className="w-32 accent-pink-500"
          />
        </div>

        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">Auto fit</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoFit}
              onChange={handleAutoFit}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pink-500 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-1 text-pink-600 hover:text-pink-800"
        >
          <FiEdit2 className="text-lg" />
          <span className="text-sm font-medium">Edit Design</span>
        </button>
      </div>

      {/* Edit Design Panel */}
      {isEditing && (
        <EditDesignPanel
          onClose={() => setIsEditing(false)}
          imageSrc={designImage}
          repeatPattern={repeatPattern}
          setRepeatPattern={setRepeatPattern}
          repeatCount={repeatCount}
          setRepeatCount={setRepeatCount}
          padding={padding}
          setPadding={setPadding}
          border={border}
          setBorder={setBorder}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          designImage={designImage}
          setDesignImage={setDesignImage}
          imagePosition={imagePosition}
          setImagePosition={setImagePosition}
          rotation={rotation}
          setRotation={setRotation}
        />
      )}
    </div>
  );
};

export default DesignEditor;
