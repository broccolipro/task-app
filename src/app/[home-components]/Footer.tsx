import React from "react";
import Link from "next/link";
import Logo from "./Logo";


export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 lg:w-8/12">
                <div className="flex items-center space-x-4">
                    <Logo size={16}/>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-gray-800">О нас</Link>
                    <Link href="#" className="hover:text-gray-800">Контакты</Link>
                </div>

                <p className="mt-4 md:mt-0 text-sm">
                    © 2024 <font className='underline' >009.md</font> Все права защищены.
                </p>
            </div>
        </footer>
    )
}
