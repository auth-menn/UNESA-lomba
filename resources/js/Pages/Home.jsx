import React, { useRef, useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Category from "@/Components/Dashboard/Category";

import { BoltIcon } from '@heroicons/react/24/solid';
import Card from "@/Components/Dashboard/Card";
import Feedback from "@/Components/Footer/Feedback";
import Subscribe from "@/Components/Dashboard/Subscribe";

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
            <div className="relative w-screen h-screen">
                <img 
                    src="img/Home.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Konten di tengah */}
                    <div className="text-center">
                        <div className="mb-5 text-5xl text-white font-bold p-4">
                            <h1>Bridging the physical and digital Style worlds</h1>
                        </div>
                        <div className="text-white mb-6">
                            <p>We empower consumers to explore and engage with fashion, crafting innovative digital experiences for the future.</p>
                        </div>
                        <div className="mb-6 flex justify-center">
                            <button className="mr-3 bg-transparent border-white border-2 text-white font-bold w-52 h-14">Virtual Room</button>
                            <button className="bg-white border-white border-2 text-black font-bold w-52 h-14">Shop Now</button>
                        </div>
                    </div>
                </div>

                {/* Scroll Down di bagian bawah */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
                    <p>Scroll Down</p>
                </div>
            </div>

            <div className="mt-8">
                <div className="w-full text-black mx-auto mt-32 text-center">
                    <h1 className="text-5xl mb-3">New Arrivals</h1>
                    <p>Discover our latest collection with fresh fashion designs ready to elevate your style. Stay</p>
                    <p>up-to-date with the newest trends through our New Arrivals feature!</p>
                </div>
                <div className="py-4 px-4">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {[...Array(10)].map((_, index) => (
                                <Card key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="items-center flex justify-center">
                    <button className="bg-black text-white h-14 w-36 text-xl">View All</button>
                </div>
                <div className="w-full text-black mx-auto mt-32 text-center">
                    <h1 className="text-5xl mb-3">Featured Collection</h1>
                    <p>Discover our latest collection with fresh fashion designs ready to elevate your style. Stay up-to-date</p>
                    <p>with the newest trends through our New Arrivals feature!</p>
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
                            onMouseDown={handleMouseDown}>
                            {[...Array(14)].map((_, index) => (
                                <Card key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <Feedback />
            </div>
            <Subscribe/>
        </UserLayout>
    );
}
