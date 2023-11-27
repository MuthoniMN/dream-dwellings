import React from "react";

export default function Footer() {
    return (
        <footer className="bg-emerald-700 h-36 text-white">
            <section className="flex justify-between p-8 items-center">
                <img src="/img/light-logo.png" alt="Dream Dwellings Real Estate" className="w-24" />
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </section>
            <p className="text-center">Dream Dwellings Copyright 2023 &copy;</p>
        </footer>
    )
}