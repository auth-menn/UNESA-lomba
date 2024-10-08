import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; 

const PromoCode = () => {
    return (
        <div className="border border-gray-200 p-6 rounded-sm shadow-sm bg-white">
            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-4">Promo Code</h2>
            <button className="w-full bg-white border border-gray-300 text-black py-2 rounded-lg flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                            className="w-6 h-6 text-gray-500"
                        >
                            <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" />
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                fill="white"
                                fontSize="30"
                                dy=".3em"
                            >
                                %
                            </text>
                        </svg>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                        <p className="text-sm font-medium">Promo Code</p>
                        <p className="text-sm text-gray-500">1 voucher used</p>
                    </div>
                </div>

                {/* Right Section - Arrow Icon */}
                <FaChevronRight className="text-gray-500" />
            </button>
        </div>
    );
};

export default PromoCode;
