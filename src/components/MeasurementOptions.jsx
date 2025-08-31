import React from 'react';

const predefinedSizes = [
  { label: `3' 8" X 5'`, widthFt: 3, widthIn: 8, heightFt: 5, heightIn: 0 },
  { label: `7' 4" X 7'`, widthFt: 7, widthIn: 4, heightFt: 7, heightIn: 0 },
  { label: `11' X 9'`, widthFt: 11, widthIn: 0, heightFt: 9, heightIn: 0 },
  { label: `11' X 11'`, widthFt: 11, widthIn: 0, heightFt: 11, heightIn: 0 },
];

const MeasurementOptions = ({
  unit,
  setUnit,
  selectedSize,
  setSelectedSize,
  widthFt,
  setWidthFt,
  widthIn,
  setWidthIn,
  heightFt,
  setHeightFt,
  heightIn,
  setHeightIn,
  handlePredefinedClick, // optional handler from parent
}) => {
  const isCustom = selectedSize === 'custom';

  return (
    <section className="mb-4 space-y-4">
      <h2 className="font-medium text-sm mb-2">Select Size</h2>

      {/* Panel Size Options */}
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="radio" name="size" defaultChecked />
          2 Panels of 22 x 60 Inch each – <strong>$50.72</strong>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="size" />
          1 Panel of 46 x 60 Inch – <strong>$53.03</strong>
        </label>
      </div>

      {/* Measurement Unit + "How to Measure" */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-md ">Measurement Unit</span>
          <select
            className="border border-gray-500 w-25  rounded px-2 py-1 text-sm"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="Ft">Ft</option>
            <option value="Inch">Inch</option>
          </select>
        </div>
        <a
          href="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/wallpaper-measuring-instructions_2_03313624202401.pdf"
          className="text-pink-600 text-sm underline"
        >
          How to Measure
        </a>
      </div>

      {/* Predefined & Custom Size Buttons */}
      <div className="flex flex-wrap gap-1">
        <button
          className={`border rounded px-3 py-2 text-sm ${
            isCustom ? 'border-pink-500 text-pink-500' : 'border-gray-300'
          }`}
          onClick={() => setSelectedSize('custom')}
        >
          Custom Size
        </button>

        {predefinedSizes.map((size, i) => (
          <button
            key={i}
            className={`border rounded px-3 py-2 text-sm ${
              selectedSize === size.label
                ? 'border-pink-500 text-pink-500'
                : 'border-gray-300'
            }`}
            onClick={() => {
              setSelectedSize(size.label);
              if (handlePredefinedClick) {
                handlePredefinedClick(size);
              } else {
                // fallback to local state setters if parent doesn't provide handler
                setWidthFt(size.widthFt);
                setWidthIn(size.widthIn);
                setHeightFt(size.heightFt);
                setHeightIn(size.heightIn);
              }
            }}
          >
            {size.label}
          </button>
        ))}
      </div>

      {isCustom && (
        <div className="grid grid-cols-4 gap-2 mt-3 text-sm  items-start">
          {/* Width Ft */}
          <div>
            <label className="block text-sm text-gray-700  font-medium">
              Width <span className="text-pink-500">(Ft)</span>
            </label>
            <input
              type="number"
              className="w-full h-10 border rounded px-3 py-2 mt-0"
              value={widthFt}
              onChange={(e) => {
                setSelectedSize('custom');
                setWidthFt(Number(e.target.value));
              }}
            />
          </div>

          {/* Width Inch */}
          <div>
            <label className="block text-sm text-pink-500 font-medium">(Inch)</label>
            <input
              type="number"
              className="w-20 h-10 border rounded px-3 py-2 mt-0"
              value={widthIn}
              onChange={(e) => {
                setSelectedSize('custom');
                setWidthIn(Number(e.target.value));
              }}
            />
          </div>

          {/* Height Ft */}
          <div>
            <label className="block text-sm text-gray-700 font-medium">
              Height <span className="text-pink-500">(Ft)</span>
            </label>
            <input
              type="number"
              className="w-full h-10 border rounded px-3 py-2 mt-0"
              value={heightFt}
              onChange={(e) => {
                setSelectedSize('custom');
                setHeightFt(Number(e.target.value));
              }}
            />
          </div>

          {/* Height Inch */}
          <div>
            <label className="block text-sm text-pink-500 font-medium">(Inch)</label>
            <input
              type="number"
              className="w-20 h-10  border rounded px-3 py-2 mt-0"
              value={heightIn}
              onChange={(e) => {
                setSelectedSize('custom');
                setHeightIn(Number(e.target.value));
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MeasurementOptions;
