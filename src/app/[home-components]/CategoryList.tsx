"use client"

import React, {useEffect, useRef, useState} from "react";
import { ChevronDown } from 'lucide-react';
import {FaPaintRoller} from "react-icons/fa";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {BiCabinet, BiPaintRoll} from "react-icons/bi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CategoryLIst2 from "@/app/[home-components]/CategoryLIst2";
import {categories} from "@/shared/categories";

export default function CategoryList2() {
    const [activeCategory, setActiveCategory] = useState(null);
    const categoryRefs = useRef({});

    // Функция плавной прокрутки
    const scrollToCategory = (categoryId) => {
        const element = categoryRefs.current[categoryId];
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 3);

            window.scrollTo({
                top: middle,
                behavior: 'smooth'
            });
        }
    };

    // Функция для переключения активной категории
    const toggleCategory = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };

    // Эффект для прокрутки при изменении активной категории
    useEffect(() => {
        if (activeCategory) {
            // Небольшая задержка для анимации
            setTimeout(() => {
                scrollToCategory(activeCategory);
            }, 100);
        }
    }, [activeCategory]);
    return (
        <div>
            <div className="w-full max-w-lg mx-auto">
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;

                    return (
                        <div
                            key={category.id}
                            className="border-b border-gray-200"
                            ref={el => {
                                categoryRefs.current[category.id] = el;
                                return void 0;
                            }}
                        >
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full px-4 py-3 flex categories-center justify-between hover:bg-gray-50 transition-all duration-200 ${
                                    isActive ? 'bg-gray-50' : ''
                                }`}
                            >
                                <div className="flex categories-center gap-3">
                                    <span className="text-xl">{category.icon}</span>
                                    <span className="text-base text-gray-700">{category.title}</span>
                                </div>
                                <div className={`transform transition-transform duration-200 ${
                                    isActive ? 'rotate-180' : ''
                                }`}>
                                    <ChevronDown className="w-5 h-5 text-gray-500"/>
                                </div>
                            </button>

                            <div className={`grid transition-all duration-200 ${
                                isActive
                                    ? 'grid-rows-[1fr] opacity-100'
                                    : 'grid-rows-[0fr] opacity-0'
                            }`}>
                                <div className="overflow-hidden">
                                    <ul className={`bg-gray-50 px-12 py-2 transform transition-transform duration-200 ${
                                        isActive ? 'translate-y-0' : '-translate-y-2'
                                    } list-disc text-gray-600`}>
                                        {category.options.map((item, index) => (
                                            <li
                                                key={index}
                                                className="py-2 hover:bg-gray-100 cursor-pointer rounded transition-colors duration-150"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/*<CategoryLIst2 categories={categories} />*/}
        </div>
    )
}


