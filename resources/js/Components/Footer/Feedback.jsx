import React, { useRef } from "react";
import Comment from "./Comment";

export default function Feedback() {
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
        <div className="w-full relative flex-shrink-0 overflow-hidden">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Our Happy Customers</h1>
                <p className="text-gray-600">Hear from our satisfied customers</p>
            </div>
            
            {/* Efek pudar di kiri */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white"></div>

            {/* Efek pudar di kanan */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white"></div>

            {/* Container Scroll */}
            <div
                ref={scrollContainerRef}
                className="relative grid grid-rows-2 gap-4 overflow-x-auto scrollbar-hide cursor-grab"
                onMouseDown={handleMouseDown}
            >
                <div className="flex space-x-4 mb-3 p-5">
                    {[...Array(9)].map((_, index) => (
                        <div 
                        key={index} 
                        className="animate-[wiggle_1s_ease-in-out_infinite] min-w-max transform transition-transform duration-500 ease-out translate-x-[-90px] hover:translate-x-0"
                        >
                        <Comment />
                        </div>
                    ))}
                    </div>
                    <div className="flex space-x-4 mb-3 p-5">
                    {[...Array(9)].map((_, index) => (
                        <div 
                        key={index} 
                        className="animate-[wiggle_1s_ease-in-out_infinite] min-w-max transform transition-transform duration-500 ease-out translate-x-[-290px] hover:translate-x-0"
                        >
                        <Comment />
                        </div>
                    ))}
                    </div>

            </div>
        </div>
    );
}
