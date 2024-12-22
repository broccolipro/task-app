'use client'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";
import NavButtons from "@/components/NavButtons";
import Logo from "@/components/Logo";

export default function AppSidebar() {

    const {sidebarIsOpen, setSidebarIsOpen} = useContext(AppContext)

    return (
        <Sheet
            open={sidebarIsOpen} onOpenChange={setSidebarIsOpen}
        >
            <SheetContent className=''>
                <SheetHeader>
                    <SheetTitle>
                        <Logo className={'mx-auto'}/>
                    </SheetTitle>
                </SheetHeader>
                <div className='mt-10'>
                    <ol className='text-2xl font-nunito font-bold items-start space-y-3'>
                        <NavButtons withIcons={true}/>
                    </ol>
                </div>
            </SheetContent>
        </Sheet>

    )
}
