import React, { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import ProductOptions from '../components/ProductOptions';

export default function ProductPage() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Lifted measurement state:
  const [widthFt, setWidthFt] = useState(3);
  const [widthIn, setWidthIn] = useState(8);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(0);

   
  

  return (
    <>
      <main className="flex flex-col min-h-screen gap-6 p-6 md:flex-row bg-gray-50">
  <ImagePreview designImage={selectedDesign} />
  <ProductOptions
    selectedDesign={selectedDesign}
    onDesignSelect={setSelectedDesign}
    
  />
</main>

    </>
  );
}
