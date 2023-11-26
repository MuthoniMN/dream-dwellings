import React from "react";

export default function Feature({ title, img, desc }) {
    return (
        <div className="text-left max-w-xs bg-white p-4 shadow-lg hover:bg-green-950 hover:text-white" >
            <img src={img} alt={title} className="w-10 bg-green-950 rounded-full p-2 mb-2 hover:bg-white" />
            <h3 className="mb-2 text-lg font-medium">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}