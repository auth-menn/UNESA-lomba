import React from 'react';

export default function MainSection() {
    return (
        <div className='bg-white'>
            {/* Hero Section */}
            <div className="relative w-full bg-white">
                <img 
                    src="/img/mix.png" 
                    alt="Hero Background" 
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">Bring Your Dream Style to Life</h1>
                </div>
            </div>

            {/* Collection Section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Men's Collection */}
                <div className="relative" style={{ height: 'fit-content' }}> {/* Container fit-content */}
                    <img 
                        src="/img/mens.png" 
                        alt="Men's Collection" 
                        className="w-full object-cover object-top" 
                        style={{ height: '66.67vh' }} // Set tinggi gambar 2/3 dari viewport
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        <h2 className="text-white text-4xl font-bold">Men's Collection</h2>
                        <p className="text-white mt-4">Dare to Mix and Match! Check our Special Men's Collection to level up your fashion</p>
                        <button className="mt-4 px-6 py-2 border-2 border-white text-white">See Collection</button>
                    </div>
                </div>

                {/* Women's Collection */}
                <div className="relative" style={{ height: 'fit-content' }}> {/* Container fit-content */}
                    <img 
                        src="/img/womens.png" 
                        alt="Women's Collection" 
                        className="w-full object-cover object-top"
                        style={{ height: '66.67vh' }} // Set tinggi gambar 2/3 dari viewport
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        <h2 className="text-white text-4xl font-bold">Women's Collection</h2>
                        <p className="text-white mt-4">Dare to Mix and Match! Check our Special Women's Collection to level up your fashion</p>
                        <button className="mt-4 px-6 py-2 border-2 border-white text-white">See Collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
