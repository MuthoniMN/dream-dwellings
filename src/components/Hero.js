import React from "react";

export default function Hero() {
    return (
        <section className="flex justify-between p-8 lg:relative lg:h-80 flex-wrap gap-8">
            <section className="text-slate-100 px-8 pt-8 max-w-md">
                <h2 className="text-3xl  font-bold mb-4">
                    Let's find your next home
                </h2>
                <p className="mb-8">One of our available homes could be your next home. Contact us today to get started</p>
                <a href="#contact" className="text-green-950 bg-slate-50 p-3 rounded mr-4 transition-all hover:scale-110 font-bold">Get a Home</a>
            </section>
            <img src="img/hero-img.avif" alt="Dream Dwellings" className="lg:absolute lg:bottom-0 lg:right-0 " />
        </section>
    )
}