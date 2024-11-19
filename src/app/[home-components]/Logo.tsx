import React from "react";


export default function Logo({size}) {
    return (
        <div className={`w-${size}`} >
            <a href="/public">
                <img src="/logo-v3.png" alt=""/>
            </a>
        </div>

    )
}
