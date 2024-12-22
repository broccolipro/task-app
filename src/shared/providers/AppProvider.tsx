'use client'

import React, {createContext, useRef, MutableRefObject, ReactNode, useState, useEffect} from 'react';
import translations from "@/shared/hooks/translations";

type AppContextType = {
    aboutRef: MutableRefObject<HTMLDivElement | null>;
    reviewsRef: MutableRefObject<HTMLDivElement | null>;
    findMoreRef: MutableRefObject<HTMLDivElement | null>;
    scrollToView: (ref: MutableRefObject<HTMLDivElement | null>) => void;
    sidebarIsOpen: boolean;
    setSidebarIsOpen: (value: boolean) => void;
    orderIsOpen: boolean;
    setOrderIsOpen: (value: boolean) => void;
    categoryIsOpen: boolean;
    setCategoryIsOpen: (value: boolean) => void;
    alertIsOpen: boolean;
    setAlertIsOpen: (value: boolean) => void;
    currentLang: string;
    t: (key) => string;
    switchLanguage: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({children}: { children: ReactNode }) {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const reviewsRef = useRef<HTMLDivElement | null>(null);
    const findMoreRef = useRef<HTMLDivElement | null>(null);

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const [orderIsOpen, setOrderIsOpen] = useState(false)
    const [categoryIsOpen, setCategoryIsOpen] = useState(false)
    const [alertIsOpen, setAlertIsOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState('ru');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang)
            setCurrentLang(storedLang)
    }, []);

    const scrollToView = (ref: MutableRefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth',});
        }
    };

    const t = (key) => {
        return translations[currentLang][key] || key
    }

    const switchLanguage = () => {
        const switchedLang = currentLang == 'ru' ? 'ro' : 'ru';
        localStorage.setItem('lang', switchedLang)
        setCurrentLang(localStorage.getItem('lang'))
    }

    return (
        <AppContext.Provider
            value={{
                aboutRef, reviewsRef, findMoreRef, scrollToView,
                sidebarIsOpen, setSidebarIsOpen,
                orderIsOpen, setOrderIsOpen,
                categoryIsOpen, setCategoryIsOpen,
                alertIsOpen, setAlertIsOpen,
                currentLang, t, switchLanguage
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
