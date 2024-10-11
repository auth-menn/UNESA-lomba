import React from "react";

export default function Category({ image }) {
    return (
        <div className="w-80 p-4 text-white flex-shrink-0 flex flex-col items-center">
            <div className="relative w-full h-20 mb-2">
                <img
                    src={image.src}
                    alt={image.text}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/85 to-transparent opacity-40 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {image.text}
                </div>
            </div>
        </div>
    );
}
