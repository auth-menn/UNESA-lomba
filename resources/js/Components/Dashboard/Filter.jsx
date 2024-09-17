import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Filter({ isVisible, onClose }) {
    // State for each dropdown section
    const [showGender, setShowGender] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    
    if (!isVisible) {
        return null;
    }

    onclow

    return (
        <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Filter By</h3>
                <button onClick={onClose} className="text-xl">&times;</button>
            </div>

            {/* Gender Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-medium">Gender</h4>
                    <button onClick={() => setShowGender(!showGender)} className="text-md">
                        {showGender ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}

                    </button>
                </div>
                {showGender && (
                    <div className="space-y-2">
                        <div>
                            <input type="checkbox" id="gender-all" className="mr-2" />
                            <label htmlFor="gender-all">All (2000)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="gender-men" className="mr-2" />
                            <label htmlFor="gender-men">Men (1200)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="gender-women" className="mr-2" />
                            <label htmlFor="gender-women">Women (1200)</label>
                        </div>
                    </div>
                )}
            </div>

            {/* Category Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-medium">Category</h4>
                    <button onClick={() => setShowCategory(!showCategory)} className="text-md">
                        {showCategory ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}

                    </button>
                </div>
                {showCategory && (
                    <div className="grid grid-cols-2 gap-2">
                        {["Jacket", "Pants & Short", "Shirt", "Shoes", "Bags", "Accessories"].map((category, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`category-${index}`} className="mr-2" />
                                <label htmlFor={`category-${index}`}>{category} (1200)</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Color Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-medium">Color</h4>
                    <button onClick={() => setShowColor(!showColor)} className="text-md">
                        {showColor ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}

                    </button>
                </div>
                {showColor && (
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { color: "Black", count: 90 },
                            { color: "Blue", count: 20 },
                            { color: "Green", count: 20 },
                            { color: "Brown", count: 20 },
                            { color: "Orange", count: 20 },
                            { color: "White", count: 20 }
                        ].map((color, index) => (
                            <div key={index} className="flex items-center">
                                <div className={`w-6 h-6 mr-2`} style={{ backgroundColor: color.color.toLowerCase() }}></div>
                                <label>{color.color} ({color.count})</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Size Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-medium">Size</h4>
                    <button onClick={() => setShowSize(!showSize)} className="text-md">
                        {showSize ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}

                    </button>
                </div>
                {showSize && (
                    <div className="grid grid-cols-3 gap-2">
                        {["XXXL", "XXL", "XL", "L", "M", "S"].map((size, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`size-${index}`} className="mr-2" />
                                <label htmlFor={`size-${index}`}>{size} (1200)</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Price Section */}
            <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-medium">Price</h4>
                    <button onClick={() => setShowSize(!showSize)} className="text-md">
                        {showSize ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}

                    </button>
                </div>
                {showPrice && (
                <div className="grid grid-cols-2 gap-2">
                    {[
                        "IDR 0 - 100.000",
                        "IDR 100.001 - 500.000",
                        "IDR 500.001 - 1.000.000",
                        "IDR 1.000.001 - 5.000.000",
                        "IDR 5.000.001 - 10.000.000",
                        "IDR 10.000.001 - 15.000.000"
                    ].map((range, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`price-${index}`} className="mr-2" />
                            <label htmlFor={`price-${index}`}>{range} (1200)</label>
                        </div>
                    ))}
                </div>
                )}

                {/* Minimal and Maximal input */}
                <div className="flex items-center mt-4">
                    <input
                        type="number"
                        placeholder="Minimal"
                        className="border border-gray-300 rounded-md p-2 w-full mr-2"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        placeholder="Maximal"
                        className="border border-gray-300 rounded-md p-2 w-full ml-2"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
                <button className="border border-gray-500 text-gray-700 py-2 px-4 rounded">Reset</button>
                <button className="bg-black text-white py-2 px-4 rounded">Apply Filters (1)</button>
            </div>
        </div>
    );
}
