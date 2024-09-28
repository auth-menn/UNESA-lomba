import React from "react";
import { UserIcon } from '@heroicons/react/24/outline';  // Optional icon for user avatar

export default function Account({ name, email }) {
    return (
        <div className="w-full max-w-xs p-6 bg-white shadow-md rounded-lg">
            {/* User Information */}
            <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    {/* If you have a user profile image, you can replace the div with an <img> tag */}
                    <UserIcon className="h-full w-full text-gray-400" />
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
                    <p className="text-gray-500">{email}</p>
                </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
                <a href="/profile/edit" className="block text-gray-700 hover:text-black transition">
                    Edit Profile
                </a>
                <a href="/profile/transaction" className="block text-gray-700 hover:text-black transition">
                    Transaction
                </a>
                <a href="/profile/shipping-address" className="block text-gray-700 hover:text-black transition">
                    Shipping Address
                </a>
                <a href="/logout" className="block text-red-600 hover:text-red-800 font-semibold transition">
                    Sign out
                </a>
            </div>
        </div>
    );
}
