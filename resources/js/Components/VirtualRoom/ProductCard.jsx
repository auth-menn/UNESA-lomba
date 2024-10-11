import { FaShoppingBag, FaStar } from 'react-icons/fa';
import { MdCheckroom } from 'react-icons/md'; 

export default function ProductCard({ name, image, price, rating, onClick }) {
  return (
    <div className="relative w-48 h-60 shadow-md rounded-sm mb-3 flex-shrink-0 overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="w-full h-full object-cover" />
      
      <div className="absolute inset-0 flex flex-col justify-between p-2 bg-gradient-to-t via-transparent to-black">
        <div className="bg-white max-w-max flex flex-col items-center justify-center text-center p-1 rounded-sm gap-1">
          <MdCheckroom className="text-xl text-gray-500" /> 
          <p className="text-xs">Try On</p>
        </div>
        
        <div>
          <div className="bg-white bg-opacity-100 p-2 rounded-sm flex justify-between items-center gap-4">
            <div className="gap-y-1">
              <div className="flex items-center gap-x-1">
                <FaStar className="text-yellow-400 text-xs" />
                <p className="text-xs font-light">({rating})</p> 
              </div>
              <p className="text-xs font-light text-black">{name}</p>
              <p className="text-sm font-semibold">{price}</p>
            </div>
            <div className="border-2 shadow p-1 bg-white">
              <FaShoppingBag className="text-lg text-gray-500" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
