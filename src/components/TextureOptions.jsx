// src/components/TextureOptions.jsx
import React, { useState } from 'react';

const textures = [
  { label: '390 GSM Timber Grain', best: false },
  { label: '313 GSM Luxe Smooth', best: true },
  { label: '400 GSM Stone Grain', best: false },
];

const TextureOptions = () => {
  const [selectedTexture, setSelectedTexture] = useState(textures[1].label); // Default: Luxe Smooth

  return (
    <section className="mb-4">
      <h2 className="font-medium text-sm mb-2">Texture Type</h2>
      <div className="flex gap-4">
        {textures.map((texture, index) => (
          <div
            key={index}
            onClick={() => setSelectedTexture(texture.label)}
            className={`relative border p-4 rounded w-23 text-center text-sm cursor-pointer transition
              ${selectedTexture === texture.label
                ? 'border-pink-500 ring-2 ring-pink-500'
                : 'border-gray-300'}
            `}
          >
            {texture.best && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded">
                Best Seller
              </span>
            )}
            {texture.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextureOptions;
