import {BiCabinet, BiPaintRoll} from "react-icons/bi";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import React, {ReactNode} from "react";

export interface CategoryItem {
    id: number;
    value: string;
    title: string;
    icon: ReactNode;
    image: string;
    options: string[];
}

const _size = 30;
const _color = '#929292'

export const categories: CategoryItem[] = [
    {
        id: 1,
        value: 'construction',
        title: 'Строительство и ремонт',
        icon: <BiPaintRoll size={_size} color={_color}/>,
        image: '',
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
    icon: <GiWashingMachine size={_size} color={_color}/>,
    image: '',
    options: [
        'Установка и подключение стиральных машин, холодильников, посудомоек',
        'Ремонт бытовой техники',
        'Установка телевизоров и настройка оборудования'
    ]
},
{
    id: 3,
        value: 'doors',
    title: 'Окна и двери',
    icon: <GiDoorHandle size={_size} color={_color}/>,
    image: '',
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
    icon: <BiCabinet size={_size} color={_color}/>,
    image: '',
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
    icon: <TbGardenCart size={_size} color={_color}/>,
    image: '',
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
    icon: <RiHammerLine size={_size} color={_color}/>,
    image: '',
    options: [
        'Установка карнизов, жалюзи, штор',
        'Монтаж картин, зеркал, полок',
        'Установка телевизоров на стену'
    ]
}
]
