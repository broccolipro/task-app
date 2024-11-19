import React from "react";


export default function Logo({size}) {
    return (
        <div className={`w-${size}`} >
            <a href="/">
                <img src="/logo-v3.png" alt=""/>
            </a>
        </div>

    )
}
