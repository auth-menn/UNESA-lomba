import React, { useRef, useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Category from "@/Components/Dashboard/Category";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import Product from "@/Components/Detail/Product";
import Discussion from "@/Components/Detail/Discussion";

export default function Dashboard() {
    return(
        <UserLayout>
            <div className="py-32">
            <p className="text-gray-400 mb-4 mx-12">
                    Home / Product / <span className="text-black font-semibold">Jacket</span>
                </p>
               
                <Product/>
                <div className=" border-gray-400 py-5 flex gap-12 text-lg font-bold px-12 border-b">
                    <h1 className="text-slate-300">Ratings & Reviews</h1>
                    <h1>Discussion</h1>
                </div>
                <Discussion/>
            </div>
        </UserLayout>
    )
}