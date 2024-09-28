import React from 'react';

const ShoppingSummary = () => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Shopping Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Total Price (3 items)</span>
                    <span>IDR 2.900.000</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Shipping cost</span>
                    <span>IDR 23.000</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Cost</span>
                    <span>IDR 2.923.000</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping Discount</span>
                    <span className="text-red-500">-IDR 23.000</span>
                </div>
                <div className="flex justify-between">
                    <span>Promo Code</span>
                    <span className="text-red-500">-IDR 25.000</span>
                </div>
                <div className="flex justify-between font-semibold">
                    <span>Total Bill</span>
                    <span>IDR 2.923.000</span>
                </div>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">Continue Payment</button>
        </div>
    );
};

export default ShoppingSummary;
