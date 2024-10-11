import React, { useRef, useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Category from "@/Components/Dashboard/Category";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {BoltIcon } from '@heroicons/react/24/solid';
import Card from "@/Components/Dashboard/Card";
import Feedback from "@/Components/Footer/Feedback";
import Filter from "@/Components/Dashboard/Filter";
import CardFlashSale from "@/Components/Dashboard/CardFlashSale";
import Pagination from "@/Components/Dashboard/Pagination";

export default function Dashboard() {
    const scrollContainerRef = useRef(null);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

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
    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };
    const handleCloseFilter = () => {
        setIsFilterVisible(false);
    }
    const images = [
        { src: "img/Collection1.png", text: "Jacket" },
        { src: "img/Collection2.png", text: "Pants & Short" },
        { src: "img/Collection3.png", text: "Shirts" },
        { src: "img/Collection4.png", text: "Shoes" },
        { src: "img/Collection5.png", text: "Accessories" },
        { src: "img/Collection6.png", text: "Bags" },
    ];
    return (
        <UserLayout>
            <Filter isVisible={isFilterVisible} onClose={handleCloseFilter} />
            <div className="w-full text-black mx-auto mt-32 text-center">
                <h1 className="text-7xl mb-8">Level Up Your Style</h1>
                <p>Find everything you need to look and feel your best, shop the latest men’s</p>
                <p>fashion and lifestyle products</p>
            </div>

            {/* Category */}
            <div className="relative mt-8 px-24"> {/* Menggunakan px-24 */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab"
                    onMouseDown={handleMouseDown}
                    style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} // Menambahkan whiteSpace
                >
                    {images.map((image, index) => (
                        <Category key={index} image={image} />
                    ))}
                </div>
            </div>
    <div className="mt-8">
        <div className="px-24">
        <div className="mb-7">
            <h1 className="text-3xl font-medium ml-5">Give all you need</h1>
        </div>
            <div className="flex justify-between border-b border-b-gray-300 py-8 mb-5 lg:px-6">
                <div className="flex justify-center items-center text-center">
                    <button 
                        onClick={toggleFilter}
                        className="bg-transparent w-24 h-full font-semibold text-sm border-gray-900 border text-center text-black">
                        Filters
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 border border-gray-100 bg-gray-100"
                            placeholder="Search your style"
                        />
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    </div>
                    <button className="bg-black text-white py-2 px-4">Search</button>
                </div>
            </div>
        </div>

        <div className="py-4 px-4">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
                            {[...Array(20)].map((_, index) => (
                                <Card key={index} />
                            ))}
                        </div>
                    </div>
                    <Pagination/>
                </div>

                <div className="px-20 py-5">
                    <div className="flex mb-8 m-3 w-full items-center justify-start gap-4">
                        <div className="bg-black w-12 h-12 flex items-center justify-center">
                            <BoltIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold">Flash Sale</h1>
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 border border-gray-500 flex items-center justify-center">08</div>
                            <p className="font-bold text-xl">:</p>
                            <div className="w-8 h-8 border border-gray-500 flex items-center justify-center">10</div>
                            <p className="font-bold text-xl">:</p>
                            <div className="w-8 h-8 border border-gray-500 flex items-center justify-center">12</div>
                        </div>
                    </div>

            <div className="relative mt-8 py-4">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 scrollbar-hide cursor-grab px-4"
                    onMouseDown={handleMouseDown}>
                {[...Array(14)].map((_, index) => (
                        <CardFlashSale key={index} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <Feedback/>
            </div>
        </UserLayout>
    );
}
