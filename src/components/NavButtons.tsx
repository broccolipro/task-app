import React, {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";
import {GrContactInfo} from "react-icons/gr";
import {CgPlayListAdd} from "react-icons/cg";
import {MdOutlineReviews} from "react-icons/md";
import {TiContacts} from "react-icons/ti";

export default function NavButtons({withIcons = false}) {
    const {
        scrollToView,
        reviewsRef,
        aboutRef,
        setSidebarIsOpen,
        setOrderIsOpen,
        currentLang
    } = useContext(AppContext)


    const clickHandler = (action) => {
        setSidebarIsOpen(false)
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

    const localizedTexts = {
        ru: {
            order: "Заказать",
            about: "О нас",
            contacts: "Контакты",
            reviews: "Отзывы"
        },
        ro: {
            order: "Comandă",
            about: "Despre noi",
            contacts: "Contacte",
            reviews: "Recenzii"
        }
    };

    return (
        <>
            <li>
                <LocalButton action={'order'}
                             icon={<CgPlayListAdd size={size}/>}
                >
                    {localizedTexts[currentLang].order}
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toAbout'}
                             icon={<GrContactInfo size={size}/>}
                >
                    {localizedTexts[currentLang].about}
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toAbout'}
                             icon={<TiContacts size={size}/>}
                >
                    {localizedTexts[currentLang].contacts}
                </LocalButton>
            </li>
            <li>
                <LocalButton action={'toReviews'}
                             icon={<MdOutlineReviews size={size}/>}
                >
                    {localizedTexts[currentLang].reviews}
                </LocalButton>
            </li>
        </>
    )
}
