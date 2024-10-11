import { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 
import { User, RefreshCw, ShoppingCart, BadgePercent } from 'lucide-react';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('S');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex">
        {/* Product Image */}
        <img src="https://via.placeholder.com/200" alt="Black Fashion Jacket" className="w-1/4 h-auto object-cover rounded-lg" />

        {/* Product Info */}
        <div className="ml-6 flex-grow">
          <h2 className="text-2xl font-bold">Black Fashion Jacket</h2>

          {/* Ratings */}
          <div className="flex items-center space-x-2 mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-500">(5.0) 800 Reviews</span>
          </div>

          {/* Available Colors */}
          <div className="mt-4">
            <p className="font-semibold">Available Color</p>
            <div className="flex space-x-2 mt-2">
              <button
                className={`w-8 h-8 border ${selectedColor === 'black' ? 'border-black' : 'border-gray-300'} rounded-md`}
                onClick={() => handleColorSelect('black')}
              >
                <div className="w-full h-full bg-black rounded-md"></div>
              </button>
              <button
                className={`w-8 h-8 border ${selectedColor === 'green' ? 'border-black' : 'border-gray-300'} rounded-md`}
                onClick={() => handleColorSelect('green')}
              >
                <div className="w-full h-full bg-green-700 rounded-md"></div>
              </button>
              <button
                className={`w-8 h-8 border ${selectedColor === 'blue' ? 'border-black' : 'border-gray-300'} rounded-md`}
                onClick={() => handleColorSelect('blue')}
              >
                <div className="w-full h-full bg-blue-900 rounded-md"></div>
              </button>
            </div>
          </div>

          {/* Available Sizes */}
          <div className="mt-4">
            <p className="font-semibold">Available Size</p>
            <div className="flex space-x-2 mt-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 ${selectedSize === size ? 'border-black' : 'border-gray-300'} rounded-md`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart & Buy Now */}
          <div className="flex space-x-4 mt-6">
            <button className="border px-8 py-2 rounded-md">Add to Cart</button>
            <button className="bg-black text-white px-8 py-2 rounded-md">Buy Now</button>
          </div>
        </div>

        {/* Vertical Icons */}
        <div className="flex flex-col space-y-4 ml-4">
          <button className="p-2 border border-gray-300 rounded-md">
            <User size={24} />
          </button>
          <button className="p-2 border border-gray-300 rounded-md">
            <RefreshCw size={24} />
          </button>
          <button className="p-2 border border-gray-300 rounded-md">
            <ShoppingCart size={24} />
          </button>
          <button className="p-2 border border-gray-300 rounded-md">
            <BadgePercent size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
