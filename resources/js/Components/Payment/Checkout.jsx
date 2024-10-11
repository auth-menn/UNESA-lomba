import React from 'react';

const Checkout = () => {
    return (
        <div>
            <div className="border p-4 rounded-sm shadow-md">
                <div className="mt-4">
                    <p>Dahan Rejo Lor RT 05 RW 02</p>
                    <p>Wahyu Kurnia Shandy</p>
                    <p>0895348210010</p>
                    <p>Gresik, Jawa Timur</p>
                    <p>Taruh di rak keranjang depan pintu</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="w-1/2 bg-black text-white py-2 rounded-sm">Choose Address</button>
            </div>
        </div>
    );
};

export default Checkout;
