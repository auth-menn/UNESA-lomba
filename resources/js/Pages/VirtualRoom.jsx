import React, { useState } from 'react';
import { X, ShoppingCart, BadgePercent, User } from 'lucide-react';
import { MdCheckroom } from 'react-icons/md'; 
import ProductCard from '@/components/VirtualRoom/ProductCard';
import ProductPage from '@/components/VirtualRoom/ProductPage';

export default function VirtualRoom() {
  const [backgroundImage, setBackgroundImage] = useState('img/virtual-room/contoh-1.jpeg');
  const [currentView, setCurrentView] = useState('card'); // State untuk mengatur tampilan (card atau productPage)

  // Fungsi untuk mengganti background ketika item produk diklik
  const handleProductClick = (image) => {
    setBackgroundImage(image);
  };

  // Fungsi untuk merender tampilan berdasarkan state
  const renderView = () => {
    if (currentView === 'card') {
      return (
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-4 w-4/12 my-auto mb-24">
          <div className="flex justify-between">
            <div className="flex items-start">
              <img src="img/virtual-room/item-1.jpeg" alt="Black Fashion Jacket" className="w-16 h-16 object-cover rounded-md mr-4" />
              <div className="flex-grow">
                <h3 className="font-bold">Black Fashion Jacket</h3>
                <p className="text-sm text-gray-500">Jacket</p>
              </div>
            </div>

            {/* Vertical Icons */}
            <div className="flex flex-col space-y-2">
              <button className="p-1 border border-gray-300 rounded-md">
                <MdCheckroom size={20} />
              </button>
              <button className="p-1 border border-gray-300 rounded-md" onClick={() => setCurrentView('card')}>
                <ShoppingCart size={20} />
              </button>
              <button className="p-1 border border-gray-300 rounded-md">
                <BadgePercent size={20} />
              </button>
            </div>
          </div>

          {/* More Like This Section */}
          <div className="mt-4">
            <h4 className="font-bold mb-2">More Like This</h4>
            <div className="no-scrollbar flex space-x-4 overflow-x-auto">
              <ProductCard 
                name="Black Jacket" 
                image="img/virtual-room/item-1.jpeg" 
                price="79.000 IDR" 
                rating="5.0"
                onClick={() => handleProductClick('img/virtual-room/contoh-1.jpeg')}
              />
              <ProductCard 
                name="Unity LongSleeve" 
                image="img/virtual-room/item-2.jpeg" 
                price="89.000 IDR" 
                rating="4.8"
                onClick={() => handleProductClick('img/virtual-room/contoh-2.jpeg')}
              />
              <ProductCard 
                name="Olive Jacket" 
                image="img/virtual-room/item-3.jpeg" 
                price="140.000 IDR" 
                rating="4.8"
                onClick={() => handleProductClick('img/virtual-room/contoh-3.jpeg')}
              />
            </div>
          </div>
        </div>
      );
    } else if (currentView === 'productPage') {
      return <ProductPage />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <img src={backgroundImage} alt="Selected Background" className="w-full h-full object-cover" />
      
      {/* Virtual Room Header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-2 flex items-center">
        <div className="bg-black text-white p-2 rounded-md mr-2">
          <User size={20} />
        </div>
        <div>
          <h2 className="font-bold">Virtual Room</h2>
          <p className="text-sm text-gray-500">Fitting Room</p>
        </div>
        <X className="ml-4 cursor-pointer" size={20} onClick={() => window.location = '/'} />
      </div>
      
      {/* Render Current View */}
      {renderView()}
      
      {/* Capture Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="w-16 h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}
