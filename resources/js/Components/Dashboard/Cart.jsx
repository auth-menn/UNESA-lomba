import React from 'react';
import { XMarkIcon, TrashIcon,PercentBadgeIcon } from '@heroicons/react/24/outline';

// Sample product data
const products = [
    { id: 1, name: 'Black Jacket', color: 'Black', size: 'L', price: 2129000, quantity: 1, image: '/img/jacket.png' },
    { id: 2, name: 'Black Jacket', color: 'Black', size: 'L', price: 2129000, quantity: 1, image: '/img/jacket.png' },
    { id: 3, name: 'Black Jacket', color: 'Black', size: 'L', price: 2129000, quantity: 1, image: '/img/jacket.png' },
    // Add more products as needed
];

export default function Cart({ isCartVisible, CartOnClose }) {
    const [cartItems, setCartItems] = React.useState(products);

    if (!isCartVisible) {
        return null; // Jangan render jika Cart tidak terlihat
    }

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Background overlay covering the entire screen */}
            <div className="fixed inset-0 bg-black opacity-50" onClick={CartOnClose}></div>

            {/* Cart Content */}
            <div className="fixed right-0 top-0 bg-white w-full md:w-1/3 lg:w-1/3 h-full z-50 flex flex-col">
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-semibold">Your Product List</h2>
                    <button onClick={CartOnClose}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Product List */}
                <div className="p-4 overflow-y-auto flex-grow">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-4 border-b">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-4" />
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <h2 className="text-lg">{item.name}</h2>
                                    <p className="text-sm">Color: {item.color} | Size: {item.size}</p>
                                    <button onClick={() => handleRemove(item.id)} className="text-red-500 flex items-center">
                                        <TrashIcon className="w-4 h-4 mr-1" /> Remove
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="bg-gray-200 p-2">-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="bg-gray-200 p-2">+</button>
                            </div>
                            <p>IDR {item.price.toLocaleString()}</p>
                        </div>
                    ))}
                </div>

                {/* Promo Code and Checkout Section */}
                <div className="p-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex justify-between items-center p-3 w-full">
                            <div className='flex gap-3 font-semibold'>
                            <PercentBadgeIcon className="h-6 w-6"/>
                            <p>Promo Code</p>
                            </div>
                            <div>
                            <button className="bg-white border border-black text-sm font-medium p-2">Get Promo Code</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">Total Price</p>
                        <p className="text-lg font-semibold">IDR {totalPrice.toLocaleString()}</p>
                    </div>
                    <button className="bg-black text-white w-full p-3 mt-4">Checkout ({cartItems.length})</button>
                </div>
            </div>
        </div>
    );
}
