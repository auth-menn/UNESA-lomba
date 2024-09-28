import React from 'react';

const DetailProduct = () => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Detail Product</h2>
            <div className="mt-4 space-y-4">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <img src="https://via.placeholder.com/50" alt="product" className="w-16 h-16" />
                        <div className="text-sm">
                            <p>Black Jacket</p>
                            <p>Color: Black | Size: L | Qty: 1</p>
                        </div>
                        <div className="text-right">
                            <p>IDR 2.129.000</p>
                            <p className="line-through text-gray-400">IDR 3.120.000</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
                <p>JNE - REG - <span className="text-green-500">Free</span></p>
                <p>Estimated Arrival 3-6 Days</p>
            </div>
        </div>
    );
};

export default DetailProduct;
