import React, { useState } from 'react';
import ProductOptions from './ProductOptions';
import MeasurementOptions from './MeasurementOptions';
import ImagePreview from './ImagePreview';

const ProductMeasurementContainer = () => {
  // Manage product options state (if needed)
  const [productOptions, setProductOptions] = useState({
    panels: 2, // example
    price: 50.72,
  });

  // Manage measurement size in inches
  const [measurementSize, setMeasurementSize] = useState({
    widthInches: 44, // default 3'8" (3*12+8)
    heightInches: 60, // 5'
  });

  // Manage design image (could come from ProductOptions or elsewhere)
  const [designImage, setDesignImage] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div>
        <ProductOptions
          productOptions={productOptions}
          setProductOptions={setProductOptions}
          setDesignImage={setDesignImage}
        />
        <MeasurementOptions onSizeChange={setMeasurementSize} />
      </div>

      <ImagePreview designImage={designImage} measurementSize={measurementSize} />
    </div>
  );
};

export default ProductMeasurementContainer;
