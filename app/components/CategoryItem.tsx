import {TfiPaintRoller} from "react-icons/tfi";
import React from "react";

export default function CategoryItem({title, icon}) {
    return (
        <div className='border-b flex p-3 gap-3 items-center'>
            {icon}
            <span className='text-base'>{title}</span>
        </div>
    )
}

const obj = {
    icon: TfiPaintRoller
}
