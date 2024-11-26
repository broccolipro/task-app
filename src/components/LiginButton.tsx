import {FiLogIn} from "react-icons/fi";
import React from "react";


export default function () {
    return (
        <a href={'/login'}>
            <div className='flex space-x-1 border-0 rounded-full border-black items-center px-2 py-2'>
                <span className={'font-bold text-sm text-gray-600'}>Войти</span>
                <FiLogIn size={20} className={'stroke-gray-600'}/>
            </div>
        </a>

    )
}
