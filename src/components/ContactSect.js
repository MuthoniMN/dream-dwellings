import React from "react";

export function ContactForm() {
    return (
        <form className="bg-white mr-10 my-6 w-1/2 p-8 rounded-md">
            <div className="my-4">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="border-black border-2 w-full rounded-lg px-4 py-2" />
            </div>
            <div className="my-4">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" className="border-black border-2 w-full rounded-lg px-4 py-2" />
            </div>
            <div className="my-4">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols={"10"} rows={"4"} className="border-black border-2 w-full rounded-lg px-4 py-2"></textarea>
            </div>
            <input type="submit" value={"Send Message"} style={{ background: "#398F72", color: "#fafafa" }} className="px-8 py-4 rounded-md" />
        </form>
    )
}

export function ContactDetails() {
    return (
        <section className="p-8 text-white">
            <h2 className="font-bold text-2xl">Contact Us Today</h2>
            <p className="italic mb-4">Would you like to work with us? Get in Contact with us</p>
            <p className="my-4"><i class="fa-solid fa-map-pin fa-xl mr-4"></i>Nairobi, Kenya</p>
            <p className="my-4"><i class="fa-solid fa-phone fa-xl mr-4"></i>+254 724 567890</p>
            <p className="my-4"><i class="fa-solid fa-envelope fa-xl mr-4"></i>info@dreamdwellings.com</p>
            <h3 className="my-4">Social Media</h3>
            <i class="fa-brands fa-facebook fa-xl mr-4"></i>
            <i class="fa-brands fa-instagram fa-xl mr-4"></i>
        </section>
    )
}

export default function ContactSection() {
    return (
        <section className="flex justify-between items-center flex-wrap contactSect" >
            <ContactDetails />
            <ContactForm />
        </section>
    )
}