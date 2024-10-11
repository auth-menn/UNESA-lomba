import React from 'react';

const PaymentMethod = () => {
    return (
        <div><h2 className="text-2xl font-semibold">Payment Method</h2>
        <div>
            
            <div className="mt-4 space-y-4">
                <div className="border border-gray-200 p-6 rounded-sm shadow-sm bg-white">
                    <label className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img src="img/bca.png" alt="BCA" />
                            <span>BCA Virtual Account</span>
                        </div>
                        {/* Radio input moved to the right */}
                        <input type="radio" name="payment" className="form-radio h-5 w-5" />
                    </label>
                </div>
                <div className="border border-gray-200 p-6 rounded-sm shadow-sm bg-white">
                    <label className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img src="img/mandiri.png" alt="Mandiri" />
                            <span>Mandiri</span>
                        </div>
                        {/* Radio input moved to the right */}
                        <input type="radio" name="payment" className="form-radio h-5 w-5" />
                    </label>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PaymentMethod;
