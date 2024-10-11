import React from "react";
import { UserIcon } from '@heroicons/react/24/outline';
import { User, Wallet, Truck, LogOut } from 'lucide-react';

export default function Account({ name, email, activeRoute }) {
    // Function to check if the link is the active route
    const isActive = (path) => path === activeRoute;

    return (
        <div className="w-80 h-80 p-6 bg-white border border-gray-300 rounded-lg">
            {/* User Information */}
            <div className="flex items-center mb-6">
              <div className="w-25 h-25 rounded-full overflow-hidden">
                  <img
                      src='img/foto-profil.png'
                      alt="Profil"
                      className="w-full h-full object-cover"
                  />
              </div>

                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
                    <p className="text-gray-500">{email}</p>
                </div>
            </div>
            <div className="text-gray-500">Menu</div>
            <br/>

            {/* Menu Items */}
            <div className="space-y-4">
                <a 
                    href="/account" 
                    className={`flex items-center ${isActive('/account') ? 'text-black' : 'text-gray-400'} hover:text-black transition`}
                >
                    <User className="h-5 w-5 mr-2" />
                    Edit Account
                </a>

                <a 
                    href="/transaction" 
                    className={`flex items-center ${isActive('/transaction') ? 'text-black' : 'text-gray-400'} hover:text-black transition`}
                >
                    <Wallet className="h-5 w-5 mr-2" />
                    Transaction
                </a>

                <a 
                    href="/shipping-address" 
                    className={`flex items-center ${isActive('/shipping-address') ? 'text-black' : 'text-gray-400'} hover:text-black transition`}
                >
                    <Truck className="h-5 w-5 mr-2" />
                    Shipping Address
                </a>

                <a 
                    href="/logout" 
                    className="flex items-center text-red-600 hover:text-red-800 font-semibold transition"
                >
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                </a>
            </div>
        </div>
    );
}
