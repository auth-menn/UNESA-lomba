import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout"; // Import UserLayout
import Account from "@/Components/Account"; // Import Profile Component (Account)

export default function NewAddressForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        addressLabel: "",
        province: "",
        city: "",
        postalCode: "",
        completeAddress: "",
        shippingNotes: "",
        makeMainAddress: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the backend.
        console.log("Form Data Submitted", formData);
    };

    return (
        <UserLayout>
            <div className="py-32 flex gap-10">
                {/* Sidebar with Account Info */}
                <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" />

                {/* Main Content */}
                <div className="flex-grow">
                    <form onSubmit={handleSubmit} className="max-w-4xl p-8 bg-white shadow-md rounded-md">
                        <h1 className="text-2xl font-bold mb-4">New Address</h1>

                        {/* Detail Information */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block font-medium text-gray-700">Phone*</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">+62</span>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-r-md"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Detail Address */}
                        <div className="mb-4">
                            <label htmlFor="addressLabel" className="block font-medium text-gray-700">Address Label*</label>
                            <input
                                type="text"
                                id="addressLabel"
                                name="addressLabel"
                                value={formData.addressLabel}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Home Address, Office Address"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="province" className="block font-medium text-gray-700">Province*</label>
                            <select
                                id="province"
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select your Province</option>
                                {/* Add provinces here */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="city" className="block font-medium text-gray-700">City*</label>
                            <select
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select your City</option>
                                {/* Add cities here */}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="postalCode" className="block font-medium text-gray-700">Postal Code*</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter your postal code"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="completeAddress" className="block font-medium text-gray-700">Complete Address*</label>
                            <textarea
                                id="completeAddress"
                                name="completeAddress"
                                value={formData.completeAddress}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                placeholder="RT, RW, house name, and house block"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="shippingNotes" className="block font-medium text-gray-700">Shipping Notes</label>
                            <textarea
                                id="shippingNotes"
                                name="shippingNotes"
                                value={formData.shippingNotes}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Additional notes for shipping couriers"
                            />
                        </div>

                        {/* Map Pinpoint - Placeholder */}
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700">Address Point</label>
                            <div className="mt-1 h-64 w-full border border-gray-300 rounded-md bg-gray-200">
                                {/* Placeholder for map */}
                                <p className="text-center py-24 text-gray-500">Map Placeholder</p>
                            </div>
                            <div className="mt-2 flex items-center">
                                <input
                                    type="checkbox"
                                    id="makeMainAddress"
                                    name="makeMainAddress"
                                    checked={formData.makeMainAddress}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-black border-gray-300 rounded"
                                />
                                <label htmlFor="makeMainAddress" className="ml-2 text-gray-700">Make it Main Address</label>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
}
