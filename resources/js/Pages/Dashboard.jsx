import React, { useRef } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Category from "@/Components/Dashboard/Category";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {BoltIcon } from '@heroicons/react/24/solid';
import Card from "@/Components/Dashboard/Card";
import Feedback from "@/Components/Footer/Feedback";

export default function Dashboard() {
    const scrollContainerRef = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.pageX - scrollContainerRef.current.offsetLeft;
        const scrollLeft = scrollContainerRef.current.scrollLeft;

        const handleMouseMove = (e) => {
            const x = e.pageX - scrollContainerRef.current.offsetLeft;
            const scroll = x - startX;
            scrollContainerRef.current.scrollLeft = scrollLeft - scroll;
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <UserLayout>
            <div className="w-full text-black mx-auto mt-32 text-center">
                <h1 className="text-3xl mb-3">Men's Collection</h1>
                <p>Find everything you need to look and feel your best, shop the latest men’s</p>
                <p>fashion and lifestyle products</p>
            </div>

            {/* Category */}
            <div className="relative mt-8 py-4">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab"
                    onMouseDown={handleMouseDown}
                >
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                    <Category name="Jacket" />
                </div>
            </div>

            <div className="mt-8">
                <div className="flex justify-between mb-3">
                    <div>
                        <h1 className="text-2xl">Give all you need</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <input
                                type="text"
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Search your style"
                            />
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        </div>
                        <button className="bg-black text-white py-2 px-4 rounded">Search</button>
                    </div>
                </div>

                <div className="flex overflow-x-auto py-4 scrollbar-hide justify-center space-x-4">
                    <div className="flex grid grid-cols-4 justify-center gap-32 border-b-black border-b-2">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

                <div>
                    <div className="flex mb-8 m-3 w-full items-center gap-4">
                        <div className="bg-black w-12 h-12 flex items-center justify-center">
                            <BoltIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="">Flash Sale</h1>
                        <div className="w-8 h-8 border-2 border-black text-center justify-center my-auto">08</div>
                        <p>:</p>
                        <div className="w-8 h-8 border-2 border-black text-center justify-center my-auto">10</div>
                        <p>:</p>
                        <div className="w-8 h-8 border-2 border-black text-center justify-center my-auto">12</div>
                    </div>

                    <div className="relative mt-8 py-4">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab px-4"
                            onMouseDown={handleMouseDown}
                        >
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Feedback/>
            </div>
        </UserLayout>
    );
}
