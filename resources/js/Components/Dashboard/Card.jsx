import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Card({ name }) {
    return (
        <div className="card bg-black w-72 h-96 shadow-xl rounded-none mb-3 flex-shrink-0">
            <div className="m-3 bg-white max-w-max items-center text-center">
                <FontAwesomeIcon icon={faTshirt} className="w-6 h-6 text-gray-500" />
                <p>Try On</p>
            </div>
            <div className="card-body">
                <h2 className="card-title text-transparent">Shoes!</h2>
                <p className="text-transparent">If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center bg-white flex justify-between">
                    <div>
                        <p>(5.0)</p>
                        <p>Black Fashion Jacket</p>
                        <p>79.000 IDR</p>
                    </div>
                    <div className="border-2 border-black shadow my-auto mx-3">
                        <ShoppingBagIcon className="w-8 h-8 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}
