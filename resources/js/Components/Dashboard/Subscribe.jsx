import React from "react";

export default function Subscribe({}) {
    return (
        <div className="relative w-screen mt-32">
                <img 
                    src="img/Subscribe.png" 
                    alt="Logo" 
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Konten di tengah */}
                    <div className="text-center">
                        <div className="mb-5 text-5xl text-white font-bold p-4">
                            <h1>Join our News Collection</h1>
                        </div>
                        <div className="text-white mb-6">
                            <p>Join our Newsletter and stay informed about Update Collection</p>
                        </div>
                        <div className="mb-6 flex justify-center">
                            <input className="mr-3 bg-white border-white border-2 text-white font-bold w-80 h-14"
                            placeholder="Enter your email"/>
                            <button className="bg-black text-white font-bold w-32 h-14">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}