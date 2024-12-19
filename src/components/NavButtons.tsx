import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "@/shared/providers/AppProvider";
import {GrContactInfo} from "react-icons/gr";
import {CgPlayListAdd} from "react-icons/cg";
import {MdOutlineReviews} from "react-icons/md";
import {TiContacts} from "react-icons/ti";

export default function NavButtons({withIcons = false}) {
    const {scrollToView, reviewsRef, aboutRef, setSidebarIsOpen, setOrderIsOpen} = useContext(AppContext)


    const clickHandler = (action) => {
        setSidebarIsOpen(false)
        // if (open) return
        switch (action) {
            case 'order':
                setOrderIsOpen(true);
                break;
            case 'toReviews':
                scrollToView(reviewsRef)
                break;
            case 'toAbout':
                scrollToView(aboutRef)
                break;
        }
    }

    const size = 30
    const LocalButton = ({icon, action, children}) =>
        <button onClick={() => clickHandler(action)} className='flex gap-x-3 items-center'>
            {withIcons && icon}
            {children}
        </button>

    return (
        <>
            <li>
                <LocalButton action={'order'}
                             icon={<CgPlayListAdd size={size}/>}
                >

                    Заказать
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toAbout'}
                             icon={<GrContactInfo size={size}/>}
                >
                    О нас
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toAbout'}
                             icon={<TiContacts size={size}/>}
                >
                    Контакты
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toReviews'}
                             icon={<MdOutlineReviews size={size}/>}
                >
                    Отзывы
                </LocalButton>
            </li>
        </>
    )
}
