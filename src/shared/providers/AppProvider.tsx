'use client'

import React, {createContext, useRef, MutableRefObject, ReactNode, useState} from 'react';

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

};

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({children}: { children: ReactNode }) {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const reviewsRef = useRef<HTMLDivElement | null>(null);
    const findMoreRef = useRef<HTMLDivElement | null>(null);
    const [scrollTo, setScrollTo] = useState('')

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const [orderIsOpen, setOrderIsOpen] = useState(false)
    const [categoryIsOpen, setCategoryIsOpen] = useState(false)
    const [alertIsOpen, setAlertIsOpen] = useState(false)


    const scrollToView = (ref: MutableRefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', });
        }
    };

    return (
        <AppContext.Provider
            value={{
                aboutRef, reviewsRef, findMoreRef, scrollToView,
                sidebarIsOpen, setSidebarIsOpen,
                orderIsOpen, setOrderIsOpen,
                categoryIsOpen, setCategoryIsOpen,
                alertIsOpen, setAlertIsOpen
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
