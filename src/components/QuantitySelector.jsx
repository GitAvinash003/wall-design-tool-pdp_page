import React, { useState } from 'react';

const QuantitySelector = () => {
  const [qty, setQty] = useState(1);
  const price = 65.32;

  return (
    <section className="mt-6 border  m-0 rounded-md p-4 flex items-center justify-between ">
      {/* Price */}
      <div className="text-2xl font-semibold text-gray-900">
        ${price.toFixed(2)}
      </div>

      {/* Quantity Counter */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">QTY</span>
        <div className="flex items-center border rounded overflow-hidden">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-lg"
          >
            −
          </button>
          <span className="px-4 py-1 border-l  border-r text-base">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-1 bg-white hover:bg-gray-200 text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Upload Design Button */}
      <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-6 py-2 rounded">
        Upload Design
      </button>
    </section>
  );
};

export default QuantitySelector;
