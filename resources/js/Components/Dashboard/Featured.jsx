import React from "react";

const images = [
    { src: "img/Collection1.png", text: "Jacket" },
    { src: "img/Collection2.png", text: "Pants & Short" },
    { src: "img/Collection3.png", text: "Shirts" },
    { src: "img/Collection4.png", text: "Shoes" },
    { src: "img/Collection5.png", text: "Accessories" },
    { src: "img/Collection6.png", text: "Bags" },
];

export default function ImageGrid() {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        <img
                            src={image.src}
                            alt={image.text}
                            className="w-full h-44 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
                            {/* Main Text - Move Up on Hover */}
                            <span className="text-white text-2xl font-semibold transform transition-transform duration-300 group-hover:-translate-y-12">
                                {image.text}
                            </span>

                            {/* Additional Text and Button - Initially Hidden */}
                            <div className="absolute top-1/2 inset-x-0 flex flex-col items-center justify-center transform -translate-y-1/4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <span className="text-white text-sm text-center">
                                    Check our best collection and get Disc 10%
                                </span>
                                <span className="text-white text-sm text-center">
                                on New Season!
                                </span>

                                {/* Button - Initially Hidden */}
                                <button className="mt-3 text-white px-4 py-2 border border-white hover:text-black transition-colors duration-300 hover:bg-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
