import React from 'react';

const PaymentMethod = () => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="mt-4 space-y-4">
                <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" className="form-radio h-5 w-5" />
                    <img src="https://via.placeholder.com/50" alt="BCA" />
                    <span>BCA Virtual Account</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" className="form-radio h-5 w-5" />
                    <img src="https://via.placeholder.com/50" alt="Mandiri" />
                    <span>Mandiri</span>
                </label>
            </div>
        </div>
    );
};

export default PaymentMethod;
