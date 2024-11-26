'use client'
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, { useRef, useState} from "react";
import {Accordion} from "@/components/ui/accordion";
import {AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";
import {BiCabinet, BiPaintRoll} from "react-icons/bi";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";


export default function () {


    return (
        <div className='flex w-full justify-center font-nunito bg-tbg'>
            <Tabs className='w-full space-y-5' defaultValue={items[0].value}>
                <TabsList
                    className='w-full h-auto flex-wrap gap-4 p-3'
                    defaultChecked={true}
                    defaultValue={items[0].value}
                >
                    {
                        items.map((item) =>
                            <TabsTrigger value={item.value}
                                         key={item.id}
                                         className='w-auto cursor-pointer'
                            >
                                {item.icon}
                                <h1>{item.title}</h1>
                            </TabsTrigger>)
                    }
                </TabsList>
                {items.map(item =>
                    <TabsContent value={item.value} key={item.id} className='h-auto p-4 lg:p-10 '>
                        <div className='md:w-6/12' >
                            <Accordion type="single" collapsible className="w-full bg-white p-3 rounded-xl">
                                {
                                    item.options.map((option, index) =>
                                        <AccordionItem key={`item-${index}`} value={`item-${index}`} className='' >
                                            <AccordionTrigger>{option}</AccordionTrigger>
                                            <AccordionContent>
                                                {/*<Image src={'/placeholder-image.jpg'} width={200} height={200} alt={''} />*/}
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem corporis dignissimos, dolorum expedita fuga fugit ipsum itaque nesciunt nihil nobis obcaecati placeat provident quos rem repellat sint sunt suscipit.
                                            </AccordionContent>
                                        </AccordionItem>)
                                }
                            </Accordion>
                        </div>
                    </TabsContent>
                )}

            </Tabs>
        </div>

    )
}


const items = [
    {
        id: 1,
        value: 'construction',
        title: 'Строительство и ремонт',
        icon: <BiPaintRoll size={30} color={'#107888'}/>,
        options: [
            'Косметический и капитальный ремонт',
            'Отделочные работы (штукатурка, покраска, поклейка обоев)',
            'Укладка плитки, ламината, паркета',
            'Монтаж и демонтаж перегородок, потолков, полов'
        ]
    },
    {
        id: 2,
        value: 'repair',
        title: 'Бытовая техника',
        icon: <GiWashingMachine size={30} color={'#107888'}/>,
        options: [
            'Установка и подключение стиральных машин, холодильников, посудомоек',
            'Ремонт мелкой бытовой техники (микроволновки, утюги и т. д.)',
            'Установка телевизоров и настройка оборудования'
        ]
    },
    {
        id: 3,
        value: 'doors',
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
        value: 'furniture',
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
        value: 'garden',
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
        value: 'pictures',
        title: 'Картины, карнизы, ТВ',
        icon: <RiHammerLine size={30} color={'#107888'}/>,
        options: [
            'Установка карнизов, жалюзи, штор',
            'Монтаж картин, зеркал, полок',
            'Установка телевизоров на стену'
        ]
    }
]
