import { Dice1 } from 'lucide-react';
import React from 'react';

const DetailProduct = () => {
    return (
        <div>
        <h2 className="text-2xl font-semibold">Detail Product</h2>
            <br />
            <hr className="border-t border-gray-300 mb-4" />
        <div className="border border-gray-200 p-6 rounded-sm shadow-sm bg-white">

            <div className=" p-4">
                <div className="mt-4 space-y-4">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                            <img src="https://via.placeholder.com/50" alt="product" className="w-16 h-16" />
                            <div className="text-sm">
                                <p>Black Jacket</p>
                                <p>Color: Black | Size: L | Qty: 1</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-right">
                                    <p>IDR 2.129.000</p>
                                    <p className="line-through text-gray-400">IDR 3.120.000</p>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="border border-gray-200 p-6 rounded-sm shadow-sm bg-white">
    <div className="flex justify-between items-center">
        <div>
            <p>JNE - REG - <span className="text-red-500">Free</span></p>
            <p><span className="text-gray-400">Estimated Arrival</span> 3-6 Days</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
    </div>
</div>
</div>
        </div>
    );
};

export default DetailProduct;
