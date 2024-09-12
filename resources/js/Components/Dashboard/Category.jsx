import React from "react";

export default function Category({ name }) {
    return (
        <div className="w-60 bg-black p-4 text-white flex-shrink-0">
            <h1 className="text-xl">{name}</h1>
        </div>
    );
}
