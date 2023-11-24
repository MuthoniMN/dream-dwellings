import React from "react";
const NavBar = () => {
    return (
        <nav className="flex flex-row justify-between items-center h-32 text-slate-50">
            <img src="/img/light-logo.png" alt="Dream Dwellings" />
            <ul className="flex flex-row gap-4 list-none">
                <li>
                    <a href="#contact">Home</a>
                </li>
                <li>
                    <a href="#contact">About Us</a>
                </li>
                <li>
                    <a href="#homes">Available Homes</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
            </ul>
            <a href="#contact" className="text-green-950 bg-slate-50 p-3 rounded mr-4 transition-all hover:scale-110 font-bold text-emerald-950">Get a Home</a>
        </nav>
    )
}


export default NavBar;