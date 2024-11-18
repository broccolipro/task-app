'use client'
import {createContext, useState} from "react";
export const DrawerContext = createContext({
    open: false,
    setOpen: (value) => {}
});

export default function DrawerProvider({children}) {

    const [open, setOpen] = useState(false)

    return (
        <DrawerContext.Provider value={{open, setOpen}} >
            {children}
        </DrawerContext.Provider>
    )
}
