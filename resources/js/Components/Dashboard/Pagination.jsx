import React from 'react';
import { GoArrowRight,GoArrowLeft } from "react-icons/go";

const Pagination = () => {
    return (
        <div className="my-4 px-24 mt-8">
            <div className="flex justify-between items-center py-8 border-t-2 border-gray-300">
                {/* Previous Button */}
                <button
                    className="flex items-center px-4 py-2 text-black font-bold border border-black"
                >
                    <GoArrowLeft className="mr-2" /> {/* Icon for left arrow */}
                    Previous
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-2">
                    <button className="px-4 py-2 font-bold border border-black bg-black text-white">1</button>
                    <button className="px-4 py-2 font-bold border border-gray-400">2</button>
                    <button className="px-4 py-2 font-bold border border-gray-400">3</button>
                    <span className="px-4 py-2">...</span>
                    <button className="px-4 py-2 font-bold border border-gray-400">9</button>
                    <button className="px-4 py-2 font-bold border border-gray-400">10</button>
                    {/* Tambahkan lebih banyak tombol halaman sesuai kebutuhan */}
                </div>

                {/* Next Button */}
                <button
                    className="flex items-center px-4 py-2 border font-bold text-black border-black"
                >
                    <p>Next</p>
                    <GoArrowRight className="ml-2 font-light" /> {/* Icon for right arrow */}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
