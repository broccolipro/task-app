"use client"

import React, {useEffect, useRef, useState} from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import {FaPaintRoller} from "react-icons/fa";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {BiCabinet} from "react-icons/bi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";

export default function CategoryList() {
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
        <div className="w-full max-w-md mx-auto">
            {items.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                    <div
                        key={category.id}
                        className="border-b border-gray-200"
                        ref={el => categoryRefs.current[category.id] = el}
                    >
                        <button
                            onClick={() => toggleCategory(category.id)}
                            className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-all duration-200 ${
                                isActive ? 'bg-gray-50' : ''
                            }`}
                        >
                            <div className="flex items-center gap-3">
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
                                } list-disc `}>
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
    )
}

const items = [
    {
        id: 1,
        title: 'Строительство и ремонт',
        icon: <FaPaintRoller size={30} color={'#107888'}/>,
        options: [
            'Косметический и капитальный ремонт',
            'Отделочные работы (штукатурка, покраска, поклейка обоев)',
            'Укладка плитки, ламината, паркета',
            'Монтаж и демонтаж перегородок, потолков, полов'
        ]
    },
    {
        id: 2,
        title: 'Ремонт и установка бытовой техники',
        icon: <GiWashingMachine size={30} color={'#107888'}/>,
        options: [
            'Установка и подключение стиральных машин, холодильников, посудомоек',
            'Ремонт мелкой бытовой техники (микроволновки, утюги и т. д.)',
            'Установка телевизоров и настройка оборудования'
        ]
    },
    {
        id: 3,
        title: 'Окна и двери',
        icon: <GiDoorHandle size={30} color={'#107888'}/>,
        options: [
            'Регулировка окон и дверей',
            'Замена и установка дверных замков, ручек',
            'Установка межкомнатных и входных дверей',
            'Монтаж и герметизация окон'
        ]
    },
    {
        id: 4,
        title: 'Мебель и кухня',
        icon: <BiCabinet size={30} color={'#107888'}/>,
        options: [
            'Сборка и разборка мебели',
            'Ремонт мебели (замена фурнитуры, реставрация)',
            'Установка встроенной мебели',
            'Установка кухонных гарнитуров',
            'Монтаж и подключение варочных панелей, духовых шкафов',
            'Установка вытяжек и систем фильтрации воды'
        ]
    },
    {
        id: 5,
        title: 'Сад и двор',
        icon: <TbGardenCart size={30} color={'#107888'}/>,
        options: [
            'Уход за газоном (стрижка, полив, аэрация)',
            'Обрезка кустов, деревьев',
            'Посадка цветов, растений',
            'Укладка тротуарной плитки'
        ]
    },
    {
        id: 6,
        title: 'Картины, карнизы, ТВ',
        icon: <RiHammerLine size={30} color={'#107888'} />,
        options: [
            'Установка карнизов, жалюзи, штор',
            'Монтаж картин, зеркал, полок',
            'Установка телевизоров на стену'
        ]
    }
]
