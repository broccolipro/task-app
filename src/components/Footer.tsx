import React from "react";
import Logo from "./Logo";


export default function Footer() {
    return (
        <footer className=" max-h-24 bg-tbg border-t border-gray-200 py-6">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 lg:w-7/12">
                <div className="flex items-center ">
                    <Logo className={'w-1/2'}/>
                    <span className="text-gray-300">|</span>
                </div>

                <p className="mt-4 md:mt-0 text-sm">
                   2024 <u>009.md</u>
                </p>
            </div>
        </footer>
    )
}
