import React from "react";
import { 
    BeakerIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <nav className="navbar w-screen h-24 flex justify-between items-center text-black fixed z-50 bg-white top-0 left-0 shadow-md mb-16">
            <div className="px-4">
                <ul className="flex space-x-8">
                    <li>Home</li>
                    <li>Virtual Fitting Room</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="flex space-x-4 items-center px-4">
                <p className="flex items-center space-x-2">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                    <span>Search</span>
                </p>
                <p className="flex items-center space-x-2">
                    <ShoppingBagIcon className="w-5 h-5" />
                    <span>Chart (0)</span>
                </p>
                <button className="p-3 border border-black">Login</button>
            </div>
        </nav>
    );
}
