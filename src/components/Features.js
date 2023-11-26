import React from "react";
import Feature from "./Feature";

export default function Features() {
    return (
        <section className="bg-slate-50 p-8 text-center" id="about">
            <h2 className="text-4xl font-medium mb-4">Who we are</h2>
            <p className="block max-w-lg mx-auto">We are a real estate company based in Nairobi, Kenya. We help our clients find their next homes. We offer services such as: </p>
            <section className="flex gap-4 justify-center my-10">
                <Feature title={"Property Sale"} img={"img/house 1.png"} desc={"We help you sell your properties at the best price based on the market value and location"} />
                <Feature title={"Property Management"} img={"img/assets 1.png"} desc={"We help you manage your properties at affordable rates"} />
                <Feature title={"Buy a Property"} img={"img/town 1.png"} desc={"Get access to quality homes at the best locations with the best facilities in the neighborhood."} />
            </section>
        </section>
    )
}