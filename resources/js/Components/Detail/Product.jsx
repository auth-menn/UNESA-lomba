import { StarIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'; 
import { useState } from 'react';

export default function Product() {
    const [quantity, setQuantity] = useState(1); 

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="w-full flex flex-col md:flex-row md:px-12 py-8">
            <div className="md:w-1/2 w-full p-4 relative">
                <div className="relative">
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-white rounded-full shadow hover:bg-gray-200 transition-all z-10">
                        <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-white rounded-full shadow hover:bg-gray-200 transition-all z-10">
                        <ArrowRightIcon className="h-6 w-6 text-gray-700" />
                    </div>
                    <img 
                        src="img/Detail_Product.png" 
                        alt="Jacket" 
                        className="h-auto w-full max-h-[500px] object-contain mb-2" 
                    />
                </div>
                <div className="flex space-x-0"> 
                    {[...Array(7)].map((_, index) => (
                        <img 
                            key={index}
                            src="img/Detail_Product.png" 
                            alt={`Thumbnail ${index + 1}`} 
                            className="h-20 w-1/4 object-contain"  
                        />
                    ))}
                </div>
            </div>

            <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-8">
                <div className="flex justify-between items-center mb-4">
                    <p className="bg-orange-100 text-red-500 px-2 py-1 inline-block max-w-max text-sm">
                        30% OFF
                    </p>
                </div>

                <h2 className="text-3xl font-bold mb-4">Black Fashion Jacket</h2>
                <h3 className="text-4xl font-bold text-red-500 mb-2">IDR 79.000</h3>
                <p className="text-xl font-semibold text-gray-500 mb-4 line-through">IDR 100.000</p>

                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} className='h-5 w-5 text-yellow-500' />  
                    ))}
                    <p className="text-xs font-light mr-2"> (5.0) 800 Reviews</p> 
                </div>
                <hr className="mt-2 border border-gray-300" />
                <br />

                <div className="relative flex">
                    <img 
                        src="img/FlashSale_Detail.png" 
                        alt="Logo" 
                        className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 flex items-center p-8">
                        <img 
                            src="img/FlashSale.png" 
                            alt="Logo" 
                            className="w-24 h-12 object-cover"
                        />
                        <div className="text-center">
                            <div className="mb-5 text-xl text-white font-bold p-4">
                                <h1>Bridging the physical and digital Style worlds</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <h1>Description</h1>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    Find everything you need to look and feel your best, shop the latest fashion and lifestyle products. 
                    This jacket is crafted with premium materials for comfort and style. Suitable for every occasion, 
                    it brings you both functionality and fashion.
                </p>

                <div className='flex gap-12 '>
                    <div className="mb-6">
                        <p className="text-gray-400 mb-4">Available Colors:</p>
                        <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-gray-800 border border-white"></div>
                            <div className="w-8 h-8 bg-green-500 border border-white"></div>
                            <div className="w-8 h-8 bg-blue-500 border border-white"></div>
                            <div className="w-8 h-8 bg-gray-400 border border-white"></div>
                        </div>
                    </div>

                    <div className="mb-6 px-56">
                        <p className="text-gray-400 mb-3">Available Size:</p>
                        <div className="flex space-x-2">
                            <div className="px-3 py-1 border border-gray-400 text-gray-400 text-base">S</div>
                            <div className="px-3 py-1 border border-gray-400 text-gray-400 text-base">M</div>
                            <div className="px-3 py-1 border border-gray-400 text-white bg-gray-600 text-base">L</div>
                            <div className="px-2 py-1 border border-gray-400 text-gray-400 text-base">XL</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-6">
                    <p className="text-gray-400 mr-4">Quantity:</p>
                    <button onClick={handleDecrement} className='border px-2'>-</button>
                    <input 
                        type="text" 
                        className="w-12 items-center justify-center text-center border-none bg-white text-black" 
                        value={quantity} 
                        readOnly
                    />
                    <button onClick={handleIncrement} className='border-2 px-2 border'>+</button>
                    <button className="bg-black text-white py-2 px-4 ml-4 border border-black hover:bg-gray-800 transition-all">
                        Add to Cart
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <p className="text-gray-400">Share:</p>
                    <div className="flex space-x-2 justify-center items-center text-center ">
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Tiktok.png" 
                                alt="Tiktok" 
                                className="h-auto w-auto max-h-96"
                            />
                        </button>
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Facebook.png" 
                                alt="Facebook" 
                                className="h-auto w-auto max-h-96"
                            />
                        </button>
                        <button className="flex justify-center items-center p-0 border-none bg-transparent">
                            <img 
                                src="img/Instagram.png" 
                                alt="Instagram" 
                                className="h-auto w-auto max-h-96"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mt-6">
                    <button className="bg-white text-black py-2 px-6 border border-black hover:bg-gray-800 transition-all">
                        Try On
                    </button>
                    <button className="bg-black text-white w-80 py-2 px-6 transition-all">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
