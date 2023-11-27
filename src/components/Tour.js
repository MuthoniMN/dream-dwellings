import React from "react";

export default function Tour({ video }) {
    return (
        <div className="min-w-[300px] w-1/4 ">
            <video className="h-full w-full rounded-lg" controls autoPlay muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}