import React from 'react';
import Comment from "./Comment";

export default function Feedback() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Our Happy Customers</h1>
                <p className="text-gray-600">Hear from our satisfied customers</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
                {[...Array(8)].map((_, index) => (
                    <div 
                        key={index} 
                        className="w-full sm:w-1/2 lg:w-1/4"
                    >
                        <div className="h-48">
                            <Comment />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
