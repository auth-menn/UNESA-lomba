import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import Account from "@/Components/Account";

export default function ShippingAddress() {
    return (
        <UserLayout>
            <div className="py-32 flex gap-10">
                {/* Account Sidebar */}
                <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" />

                {/* Main Content */}
                <div className="bg-white shadow-md rounded-lg p-6 flex-grow">
                    <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>

                    {/* Address Form */}
                    <div className="border border-gray-300 p-6 rounded-lg">
                        <p className="text-gray-500 mb-4">
                            Please add your shipping address to proceed with your order.
                        </p>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your shipping address"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your city"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your postal code"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your country"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                            >
                                Add Address
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
