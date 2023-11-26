import React from "react";

export default function Search() {
    return (
        <section className="search flex justify-center flex-col items-center">
            <h2 className="text-3xl font-bold text-white">Find Your Next Property</h2>
            <p className="italic">Search for a property in your desired location</p>
            <div class="relative my-8 max-w-lg">
                <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                <input type="text" class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" placeholder="Search for a specific location" />
                <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
            </div>
        </section>
    );
}