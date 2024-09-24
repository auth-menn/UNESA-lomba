import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa"; 
import { MdCheckroom } from "react-icons/md"; 

export default function Card({ name }) {
    return (
        <div className="relative w-72 h-96 shadow-md rounded-sm mb-3 flex-shrink-0 overflow-hidden">
            <img src="/img/model.png" alt="Product" className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-2 bg-gradient-to-t via-transparent to-black">
                <div className="bg-white max-w-max flex flex-col items-center justify-center text-center p-1 rounded-sm gap-1">
                    <MdCheckroom className="text-2xl text-gray-500" /> 
                    <p className="text-sm">Try On</p>
                </div>
                
                <div>
                    <div className="bg-white bg-opacity-100 p-2 rounded-sm flex justify-between items-center gap-4">
                        <div className="gap-y-1">
                            <div className="flex items-center gap-x-1">
                                <FaStar className="text-yellow-400 text-xs" />
                                <p className="text-xs font-light">(5.0)</p> 
                            </div>
                            <p className="text-base font-light text-black">Black Fashion Jacket</p>
                            <p className="font-semibold">79.000 IDR</p>
                        </div>
                        <div className="border-2 shadow p-2 bg-white">
                            <FaShoppingBag className="text-2xl text-gray-500" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
