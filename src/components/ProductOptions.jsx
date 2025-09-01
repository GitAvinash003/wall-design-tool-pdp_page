import React, { useState } from 'react';
import MeasurementOptions from './MeasurementOptions.jsx';
import TextureOptions from './TextureOptions.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import UploadDesign from './UploadDesign.jsx';
import ProductDescription from './ProductDescription';
import ProductName from './ProductName.jsx';

const predefinedSizes = [
  { label: `3' 8" X 5'`, widthFt: 3, widthIn: 8, heightFt: 5, heightIn: 0 },
  { label: `7' 4" X 7'`, widthFt: 7, widthIn: 4, heightFt: 7, heightIn: 0 },
  { label: `11' X 9'`, widthFt: 11, widthIn: 0, heightFt: 9, heightIn: 0 },
  { label: `11' X 11'`, widthFt: 11, widthIn: 0, heightFt: 11, heightIn: 0 },
];

const ProductOptions = ({ selectedDesign, onDesignSelect }) => {
  const [unit, setUnit] = useState('Ft');
  const [selectedSize, setSelectedSize] = useState('custom');
  const [widthFt, setWidthFt] = useState(3);
  const [widthIn, setWidthIn] = useState(8);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(0);

  const handlePredefinedClick = (size) => {
    setSelectedSize(size.label);
    setWidthFt(size.widthFt);
    setWidthIn(size.widthIn);
    setHeightFt(size.heightFt);
    setHeightIn(size.heightIn);
  };

  return (
    
   

    <section className="w-full p-6 bg-white border-gray-300 rounded-lg border-1 md:w-1/2">
 <ProductName
  name="Custom Wallpaper"
  price={43.17}
  rating={4.5}
  reviewsCount={217}
  onShareClick={() => alert('Share clicked!')}
/>
      

      
      {/* ... other UI and components ... */}
       <ProductDescription />
      <UploadDesign selectedDesign={selectedDesign} onDesignSelect={onDesignSelect} />

      <MeasurementOptions
        unit={unit}
        setUnit={setUnit}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        widthFt={widthFt}
        setWidthFt={setWidthFt}
        widthIn={widthIn}
        setWidthIn={setWidthIn}
        heightFt={heightFt}
        setHeightFt={setHeightFt}
        heightIn={heightIn}
        setHeightIn={setHeightIn}
        handlePredefinedClick={handlePredefinedClick}
      />

      <TextureOptions />
      <QuantitySelector />
    </section>
  );
};

export default ProductOptions;
