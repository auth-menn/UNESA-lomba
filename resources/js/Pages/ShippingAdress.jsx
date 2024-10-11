import React from "react";
import { ChevronLeft, ChevronDown } from 'lucide-react';
import UserLayout from "@/Layouts/UserLayout";
import Account from "@/Components/Account";

export default function NewAddress() {
    return (
        <UserLayout>
            <div className="w-screen mx-auto py-32 sm:px-6 lg:px-24 ">
                <nav className="text-sm breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li className="text-black font-bold">Shipping Address</li>
                    </ul>
                </nav>
                
                <div className="mt-5 flex flex-col md:flex-row gap-8">
                    {/* Account Sidebar */}
                    <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" activeRoute="/shipping-address"/>

                    {/* Main Content */}
                    <div className="flex-grow bg-white p-6 shadow">
                        <div className="flex items-center mb-6">
                            <ChevronLeft className="h-6 w-6 mr-2" />
                            <h2 className="text-xl font-semibold">New Address</h2>
                        </div>

                        <form>
                            <h3 className="text-lg font-semibold mb-4">Detail Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-red-700">*</span></label>
                                    <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300" placeholder="Enter your name" />
                                </div>
                                <div className="flex">      
                                    <div className="flex-grow">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-red-700">*</span></label>
                                        <span><input type="text" className="w-2/12 px-3 py-2 border border-gray-300 text-center" placeholder="" value="+62" /></span>
                                        <input type="tel" className="w-10/12 px-3 py-2 border border-gray-300" placeholder="Enter your phone" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-4">Detail Address</h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="addressLabel" className="block text-sm font-medium text-gray-700 mb-1">Address Label<span className="text-red-700">*</span></label>
                                    <input type="text" id="addressLabel" className="w-full px-3 py-2 border border-gray-300" placeholder="Enter your Address Label" />
                                    <p className="text-xs text-gray-500 mt-1">Example : Home Address, Office Address</p>
                                </div>

                                <div>
                                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">Province<span className="text-red-700">*</span></label>
                                    <div className="relative">
                                        <select id="province" className="w-full px-3 py-2 border border-gray-300 appearance-none">
                                            <option>Select your Province</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City<span className="text-red-700">*</span></label>
                                    <div className="relative">
                                        <select id="city" className="w-full px-3 py-2 border border-gray-300 appearance-none">
                                            <option>Select your City</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code<span className="text-red-700">*</span></label>
                                    <div className="relative">
                                        <select id="postalCode" className="w-full px-3 py-2 border border-gray-300 appearance-none">
                                            <option>Select your Postal Code</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="completeAddress" className="block text-sm font-medium text-gray-700 mb-1">Complete Address<span className="text-red-700">*</span></label>
                                    <textarea id="completeAddress" rows="4" className="w-full px-3 py-2 border border-gray-300" placeholder="Complete address details"></textarea>
                                    <p className="text-xs text-gray-500 mt-1">Example : RT, RW, house name, and house block.</p>
                                </div>

                                <div>
                                    <label htmlFor="shippingNotes" className="block text-sm font-medium text-gray-700 mb-1">Shipping Notes</label>
                                    <textarea id="shippingNotes" rows="4" className="w-full px-3 py-2 border border-gray-300" placeholder="Additional Notes for shipping couriers"></textarea>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-4">Address Point</h3>
                                
                                <div className="bg-gray-200 h-96 mb-2">
                                    {/* Google Maps iframe with responsive width and height */}
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5698790063097!2d112.64659807356958!3d-7.175614670413686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd8003eae3b5885%3A0xe591511ea76dac1d!2sUniversitas%20Internasional%20Semen%20Indonesia!5e0!3m2!1sid!2sid!4v1728461257556!5m2!1sid!2sid" 
                                        className="w-full h-full" 
                                        style={{ border: 0 }} 
                                        allowFullScreen 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                
                                <p className="text-xs text-gray-600 flex items-center mt-8">
                                    <span className="bg-gray-500 rounded-xl text-white w-4 h-4 flex items-center justify-center mr-2 text-xs">i</span>
                                    Make sure the pinpoint is correct
                                </p>
                            </div>


                            <div className="mt-6 flex items-center">
                                <input type="checkbox" id="mainAddress" className="mr-2 rounded" />
                                <label htmlFor="mainAddress" className="text-sm text-gray-700 font-medium">Make it Main Address</label>
                            </div>

                            <div className="mt-6 flex justify-end space-x-4">
                                <button type="button" className="px-4 py-2 bg-white text-black border border-gray-300">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-black text-white">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}