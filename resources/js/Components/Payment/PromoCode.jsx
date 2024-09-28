import React from 'react';

const PromoCode = () => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Promo Code</h2>
            <div className="mt-4">
                <p className="text-sm">Promo Code</p>
                <p className="text-sm text-gray-500">1 voucher used</p>
            </div>
            <button className="mt-4 w-full bg-gray-200 text-black py-2 rounded-md">Apply Promo Code</button>
        </div>
    );
};

export default PromoCode;
