import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Account from "@/Components/Account";


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
        console.log("Form Data Submitted", formData);
    };

    return (
        <UserLayout>
            <div className="py-10 lg:px-0 flex gap-10">
                {/* Sidebar with Account Info */}
                <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" />
                {/* Main Content */}
                <div className="flex-grow">
                    {/* Container with background */}
                    <div className="bg-gray-100 p-10 rounded-lg shadow-lg"> {/* Background added here */}
                        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg space-y-6">
                            {/* Detail Information */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-medium text-gray-700">Detail Information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone<span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex mt-1">
                                            <span className="inline-flex items-center px-3 text-sm bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">+62</span>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-2 border border-gray-300 rounded-r-md text-sm"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detail Address */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-medium text-gray-700">Detail Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="addressLabel" className="block text-sm font-medium text-gray-700">
                                            Address Label<span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="addressLabel"
                                            name="addressLabel"
                                            value={formData.addressLabel}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm"
                                            placeholder="Home Address, Office Address"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                                            Province<span className="text-red-600">*</span>
                                        </label>
                                        <select
                                            id="province"
                                            name="province"
                                            value={formData.province}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                                        >
                                            <option value="">Select your Province</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City<span className="text-red-600">*</span>
                                        </label>
                                        <select
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                                        >
                                            <option value="">Select your City</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                                            Postal Code<span className="text-red-600">*</span>
                                        </label>
                                        <select
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm bg-white"
                                        >
                                            <option value="">Select Postal Code</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="completeAddress" className="block text-sm font-medium text-gray-700">
                                            Complete Address<span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="completeAddress"
                                            name="completeAddress"
                                            value={formData.completeAddress}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm"
                                            placeholder="Example: Jl. Asia Afrika No. 8, Kecamatan Buahbatu"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Notes */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-medium text-gray-700">Shipping Notes</h2>
                                <textarea
                                    id="shippingNotes"
                                    name="shippingNotes"
                                    value={formData.shippingNotes}
                                    onChange={handleChange}
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm"
                                    placeholder="Additional notes for shipping couriers"
                                    rows={3}
                                />
                            </div>

                            {/* Map Pinpoint */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-medium text-gray-700">Address Point</h2>
                                <div className="h-48 w-full border border-gray-300 rounded-md overflow-hidden">
                                    <img src="/api/placeholder/800/256" alt="Map placeholder" className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-2 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="makeMainAddress"
                                        name="makeMainAddress"
                                        checked={formData.makeMainAddress}
                                        className="h-4 w-4 text-black border-gray-300 rounded"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="makeMainAddress" className="ml-2 text-sm text-gray-700">
                                        Make it Main Address
                                    </label>
                                </div>
                            </div>

                            {/* Form Buttons */}
                            <div className="flex justify-end space-x-4 pt-4">
                                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-900">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
