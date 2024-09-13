import React from "react";

export default function Card({ name }) {
    return (
        <div className="relative w-72 h-96 shadow-xl rounded-lg mb-3 flex-shrink-0 overflow-hidden">
            <img src="/img/model.png" alt="Product" className="w-full h-full object-cover" />
            
          
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black via-transparent to-black">
                <div className="bg-white max-w-max items-center text-center p-2 rounded">
                    <span className="text-2xl text-gray-500">👕</span>
                    <p className="text-sm">Try On</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">Black Fashion Jacket</h2>
                    <p className="text-gray-200 text-sm mb-4">Stylish and comfortable jacket for all occasions</p>
                    <div className="bg-white bg-opacity-90 p-3 rounded flex justify-between items-center">
                        <div>
                            <p className="text-sm font-semibold text-yellow-500">(5.0)</p>
                            <p className="font-semibold">79.000 IDR</p>
                        </div>
                        <div className="border-2 border-black shadow p-2 rounded bg-white">
                            <span className="text-2xl text-gray-500">🛍️</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
