import React from "react";
import Tour from "./Tour";

export default function Tours() {
    return (
        <section>
            <h2 className="font-bold text-3xl text-center my-8">Get a Virtual Tour</h2>
            <p className="italic text-center">These are short snippets of virtual tours of our best properties</p>
            <section className="flex justify-center gap-5 p-5 flex-wrap">
                <Tour video={"videos/production_id_3773486 (1080p).mp4"} />
                <Tour video={"videos/production_id_3773488 (1080p).mp4"} />
                <Tour video={"videos/pexels-kindel-media-7578540 (1080p).mp4"} />
            </section>
        </section>
    )
}