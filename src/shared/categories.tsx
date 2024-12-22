import {BiCabinet, BiPaintRoll} from "react-icons/bi";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import React, {ReactNode} from "react";

export interface CategoryItem {
    id: number;
    value: string;
    title: {
        ru: string;
        ro: string;
    };
    icon: ReactNode;
    image: string;
    options: {
        ru: string;
        ro: string;
    }[];
}

const _size = 30;
const _color = '#929292'

export const categories: CategoryItem[] = [
    {
        id: 1,
        value: 'construction',
        title: {
            ru: 'Ремонт и отделка',
            ro: 'Reparații și finisaje'
        },
        icon: <BiPaintRoll size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Исправление дефектов в отделке',
                ro: 'Corectarea defectelor de finisare'
            },
            {
                ru: 'Отделочные работы (покраска, обклейка итп.)',
                ro: 'Lucrări de finisare (vopsire, tapetare etc.)'
            },
            {
                ru: 'Укладка напольного покрытия (ламинат, паркет, винил итп.)',
                ro: 'Montarea pardoselii (laminat, parchet, vinil etc.)'
            },
            {
                ru: 'Монтаж и демонтаж старой отделки',
                ro: 'Montaj și demontare a finisajelor vechi'
            }
        ]
    },
    {
        id: 2,
        value: 'repair',
        title: {
            ru: 'Бытовая техника',
            ro: 'Electrocasnice'
        },
        icon: <GiWashingMachine size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Установка и подключение бытовой техники',
                ro: 'Instalarea și conectarea electrocasnicelor'
            },
            {
                ru: 'Ремонт бытовой техники',
                ro: 'Reparația electrocasnicelor'
            },
            {
                ru: 'Демонтаж и вывоз старой терхники',
                ro: 'Demontarea și eliminarea electrocasnicelor vechi'
            }
        ]
    },
    {
        id: 3,
        value: 'doors',
        title: {
            ru: 'Окна и двери',
            ro: 'Ferestre și uși'
        },
        icon: <GiDoorHandle size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Установка межкомнатных и входных дверей',
                ro: 'Montarea ușilor de interior și de intrare'
            },
            {
                ru: 'Установка окон',
                ro: 'Montarea ferestrelor'
            },
            {
                ru: 'Регулировка окон и дверей',
                ro: 'Reglarea ferestrelor și ușilor'
            },
            {
                ru: 'Замена и установка замков, ручек, устранение дефектов',
                ro: 'Înlocuirea și montarea broaștelor, mânerelor, eliminarea defectelor'
            }
        ]
    },
    {
        id: 4,
        value: 'furniture',
        title: {
            ru: 'Мебель и кухня',
            ro: 'Mobilă și bucătărie'
        },
        icon: <BiCabinet size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Сборка и разборка мебели',
                ro: 'Asamblarea și dezasamblarea mobilei'
            },
            {
                ru: 'Ремонт мебели (замена фурнитуры, реставрация)',
                ro: 'Reparația mobilei (înlocuirea feroneriei, restaurare)'
            },
            {
                ru: 'Установка встроенной мебели',
                ro: 'Montarea mobilei încorporate'
            },
            {
                ru: 'Установка кухонных гарнитуров',
                ro: 'Montarea mobilierului de bucătărie'
            },
            {
                ru: 'Монтаж и подключение варочных панелей, духовых шкафов',
                ro: 'Montarea și conectarea plitelor, cuptoarelor'
            },
            {
                ru: 'Установка вытяжек и систем фильтрации воды',
                ro: 'Montarea hotei și a sistemelor de filtrare a apei'
            }
        ]
    },
    {
        id: 5,
        value: 'electrician',
        title: {
            ru: 'Электрика',
            ro: 'Electricitate'
        },
        icon: <TbGardenCart size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Поиск и устранение проблем в электросети',
                ro: 'Detectarea și remedierea problemelor în rețeaua electrică'
            },
            {
                ru: 'Подключение и замена (светильников, розеток, выключателей итп)',
                ro: 'Conectarea și înlocuirea (corpurilor de iluminat, prizelor, întrerupătoarelor etc.)'
            },
            {
                ru: 'Проведение новых электро-точек',
                ro: 'Crearea de noi puncte electrice'
            },
            {
                ru: 'Подключение бытовых приборов',
                ro: 'Conectarea aparatelor electrice'
            }
        ]
    },
    {
        id: 6,
        value: 'pictures',
        title: {
            ru: 'ТВ, картины, карнизы',
            ro: 'TV, tablouri, cornișe'
        },
        icon: <RiHammerLine size={_size} color={_color}/>,
        image: '',
        options: [
            {
                ru: 'Установка карнизов, жалюзи, штор',
                ro: 'Montarea cornișelor, jaluzelelor, perdelelor'
            },
            {
                ru: 'Монтаж картин, зеркал, полок',
                ro: 'Montarea tablourilor, oglinzilor, rafturilor'
            },
            {
                ru: 'Установка телевизоров на стену',
                ro: 'Montarea televizoarelor pe perete'
            }
        ]
    }
];
