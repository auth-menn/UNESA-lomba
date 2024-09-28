import React from 'react';

const Checkout = () => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Checkout</h2>
            <div className="mt-4">
                <p>Dahan Rejo Lor RT 05 RW 02</p>
                <p>Wahyu Kurnia Shandy</p>
                <p>0895348210010</p>
                <p>Gresik, Jawa Timur</p>
                <p>Taruh di rak keranjang depan pintu</p>
            </div>
            <button className="mt-4 w-full bg-gray-200 text-black py-2 rounded-md">Choose Address</button>
        </div>
    );
};

export default Checkout;
