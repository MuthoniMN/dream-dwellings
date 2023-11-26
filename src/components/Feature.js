import React from "react";

export default function Feature({ title, img, desc }) {
    return (
        <div className="text-left max-w-xs bg-white p-4 shadow-lg" onMouseEnter={(e) => { e.target.style.background = 'rgb(5,46, 22)'; e.target.style.color = 'rgb(255, 255, 255)' }} onMouseOut={(e) => { e.target.style.background = '';; e.target.style.color = '' }} >
            <img src={img} alt={title} className="w-10 bg-green-950 rounded-full p-2 mb-2" />
            <h3 className="mb-2 text-lg font-medium">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}