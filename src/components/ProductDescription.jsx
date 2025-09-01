import React from 'react';
import {
  FaDollarSign,
  FaSoap,
  FaPrint,
  FaWeightHanging,
  FaTools,
  FaGripHorizontal,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaDollarSign />,
    text: 'Starting at $2.03 per sq. ft.',
  },
  {
    icon: <FaSoap />,
    text: 'Cleans effortlessly',
  },
  {
    icon: <FaPrint />,
    text: 'Ultra HD, odor-free printing',
  },
  {
    icon: <FaWeightHanging />,
    text: 'Heavyweight premium vinyl',
  },
  {
    icon: <FaTools />,
    text: 'Easy, mess-free installation',
  },
  {
    icon: <FaGripHorizontal />,
    text: 'High-bond adhesive',
  },
];

const ProductDescription = () => {
  return (
    <div className="mb-4 space-y-4">
      {/* Title */}
      <h2 className="text-sm text-lg font-semibold text-black">
        Timber Grain wallcoverings feature a realistic wood grain pattern, providing a
        warm, natural ambiance
      </h2>

      {/* Feature Grid: Fixed 2 columns */}
      <div className="grid grid-cols-2 text-mdgray-800 text- gap-y-4 gap-x-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-1">
            <div className="text-2xl font-bold text-pink-500">{item.icon}</div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
