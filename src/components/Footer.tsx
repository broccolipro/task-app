import React from "react";
import Logo from "./Logo";
import {RxDividerVertical} from "react-icons/rx";
import {Pickaxe} from "lucide-react";


export default function Footer() {
    return (
        <footer className="max-h-24 bg-tbg border-t border-gray-200 py-6">
            <div className="container mx-auto px-5 lg:w-7/12 flex justify-between">
                <div className='flex font-nunito'>
                    <Logo className='w-16'/>
                    <RxDividerVertical size={20} color={'gray'} className='ml-3'/>
                    2024
                </div>
                <div>
                    <Pickaxe className='text-tint' />
                </div>
            </div>
        </footer>
    )
}
