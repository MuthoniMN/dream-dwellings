import React from "react";

export default function Listing({ img, title, location, price }) {
    return (
        <div className="rounded-md w-1/4 py-4 shadow-lg " style={{ minWidth: '320px' }}>
            <img src={img} alt={title} />
            <h3 className="text-center font-bold my-4">{title}</h3>
            <div className="flex justify-between px-2">
                <p className="italic">{location}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}