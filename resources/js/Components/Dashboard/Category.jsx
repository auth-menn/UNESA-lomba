import React from "react";

export default function Category({ name }) {
    return (
        <div className="w-60 p-4 text-white flex-shrink-0 rounded-lg flex flex-col items-center">
            <div className="relative w-full h-20 mb-2">
                <img
                    src="/img/jaket.png"
                    alt="Product"
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/85 to-transparent opacity-40 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {name}
                </div>
            </div>
        </div>
    );
}
