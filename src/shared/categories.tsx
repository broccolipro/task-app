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
        title: 'Ремонт и отделка',
        icon: <BiPaintRoll size={_size} color={_color}/>,
        image: '',
        options: [
            'Исправление дефектов в отделке',
            'Отделочные работы (покраска, обклейка итп.)',
            'Укладка напольного покрытия (ламинат, паркет, винил итп.)',
            'Монтаж и демонтаж старой отделки'
        ]
    },
    {
        id: 2,
        value: 'repair',
        title: 'Бытовая техника',
        icon: <GiWashingMachine size={_size} color={_color}/>,
        image: '',
        options: [
            'Установка и подключение бытовой техники',
            'Ремонт бытовой техники',
            'Демонтаж и вывоз старой терхники'
        ]
    },
    {
        id: 3,
        value: 'doors',
        title: 'Окна и двери',
        icon: <GiDoorHandle size={_size} color={_color}/>,
        image: '',
        options: [
            'Установка межкомнатных и входных дверей',
            'Установка окон',
            'Регулировка окон и дверей',
            'Замена и установка замков, ручек, устранение дефектов',
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
        value: 'electrician',
        title: 'Электрика',
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
