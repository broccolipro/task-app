import React from "react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="font-bold text-gray-800">
                        <img src="/logo-mini.png" alt="" className='max-w-16' />
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-gray-800">О нас</Link>
                    <Link href="#" className="hover:text-gray-800">Контакты</Link>
                </div>

                <p className="mt-4 md:mt-0 text-sm">
                    © 2024 009.md. Все права защищены.
                </p>
            </div>
        </footer>
    )
}
