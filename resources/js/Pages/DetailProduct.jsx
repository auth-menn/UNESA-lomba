import React, { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Product from "@/Components/Detail/Product";
import Discussion from "@/Components/Detail/Discussion";
import Reviews from "@/Components/Detail/Reviews";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('reviews');

    return (
        <UserLayout>
            <div className="py-32">
                <p className="text-gray-400 mb-4 mx-12">
                    Home / Product / <span className="text-black font-semibold">Jacket</span>
                </p>

                <Product />

                {/* Bagian tab navigasi */}
                <div className="border-gray-400 py-5 flex gap-12 text-lg font-bold px-12 border-b">
                    <h1
                        className={`cursor-pointer ${activeTab === 'reviews' ? 'text-black' : 'text-slate-300'}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Ratings & Reviews
                    </h1>
                    <h1
                        className={`cursor-pointer ${activeTab === 'discussion' ? 'text-black' : 'text-slate-300'}`}
                        onClick={() => setActiveTab('discussion')}
                    >
                        Discussion
                    </h1>
                </div>
                <div className="px-6">
                                    {/* Render komponen berdasarkan tab yang dipilih */}
                {activeTab === 'reviews' && <Reviews />}
                {activeTab === 'discussion' && <Discussion />}
                </div>
            </div>
        </UserLayout>
    );
}
