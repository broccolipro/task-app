import {FaTelegram, FaViber, FaWhatsapp} from "react-icons/fa";
import React from "react";


export const iconSize = 24
export default {
    telegram: {
        icon: (size?) => <FaTelegram size={size || iconSize} color={'#0088CC'}/>,
        title: 'Telegram',
        href: 'tg://resolve?domain=OO9md',
        deskHref: 'https://t.me/OO9md',
    },
    whatsapp: {
        icon: (size?) => <FaWhatsapp size={size || iconSize} color={'#25D366'}/>,
        title: 'Whatsapp',
        href: 'whatsapp://send?phone=+37376666009',
        deskHref: 'https://t.me/OO9md',
    },
    viber: {
        icon: (size?) => <FaViber size={size || iconSize} color={'#665CAC'}/>,
        title: 'Viber',
        href: 'viber://chat?number=+37376666009',
        deskHref: 'https://t.me/OO9md',
    },
}
