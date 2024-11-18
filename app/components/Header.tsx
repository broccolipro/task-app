import React from "react";


export default function Header() {
    return (
        <header className='border-b bg-white'>
            <div className={' w-full flex justify-center px-4'}>
                <img src="/logo-mini.png" alt="" className='w-20 aspect-auto m-3'/>
            </div>
        </header>
    )
}
