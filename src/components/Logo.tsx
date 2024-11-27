import React from "react";
import Image from 'next/image'

export default function Logo({className}: props) {
    return (
        <a href="/">
            <Image src="/logo-v3.png" alt="" width={80} height={80} className={className}/>
        </a>

    )
}

type props = {
    className: string
}
