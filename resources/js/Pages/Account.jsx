import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Account from "@/Components/Account"; // Reusable profile component for sidebar

export default function EditProfile() {
    const [formData, setFormData] = useState({
        name: "Wahyu Kurnia",
        email: "wahyukurniahandy@gmail.com",
        phone: "812345678910",
        dateOfBirth: "2003-09-10",
        gender: "male",
        profilePicture: null, // Handle image upload
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderChange = (e) => {
        setFormData({ ...formData, gender: e.target.value });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
        }
    };

    const handleProfileRemove = () => {
        setFormData({ ...formData, profilePicture: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Data Submitted", formData);
        // Logic to submit form data to backend
    };

    return (
        <UserLayout>
            <div className="py-32 flex gap-10">
                {/* Sidebar */}
                <Account name="Wahyu Kurnia" email="wahyukurniahandy@gmail.com" />

                {/* Main content */}
                <div className="flex-grow">
                    <form onSubmit={handleSubmit} className="max-w-4xl p-8 bg-white shadow-md rounded-md">
                        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

                        {/* Profile Picture */}
                        <div className="mb-6">
                            <label className="block font-medium text-gray-700">Profile Picture</label>
                            <div className="flex items-center gap-4">
                                {formData.profilePicture ? (
                                    <img
                                        src={formData.profilePicture}
                                        alt="Profile"
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-gray-500">No Photo</span>
                                    </div>
                                )}
                                <div>
                                    <label className="block">
                                        <input
                                            type="file"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <button
                                            type="button"
                                            className="bg-gray-200 px-4 py-2 rounded-md text-sm text-gray-700"
                                        >
                                            Upload Photo
                                        </button>
                                    </label>
                                    {formData.profilePicture && (
                                        <button
                                            type="button"
                                            className="mt-2 text-red-500"
                                            onClick={handleProfileRemove}
                                        >
                                            Remove Photo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone and Date of Birth */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">+62</span>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-r-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dateOfBirth" className="block font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="mb-6">
                            <label className="block font-medium text-gray-700">Gender</label>
                            <div className="flex items-center space-x-6 mt-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === "male"}
                                        onChange={handleGenderChange}
                                        className="form-radio h-4 w-4 text-gray-700"
                                    />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === "female"}
                                        onChange={handleGenderChange}
                                        className="form-radio h-4 w-4 text-gray-700"
                                    />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>
                            </div>
                        </div>

                        {/* Save Profile Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded-md"
                            >
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
}
