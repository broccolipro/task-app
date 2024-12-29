'use client'

import {
    Sheet,
    SheetContent, SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";
import NavButtons from "@/components/NavButtons";
import Logo from "@/components/Logo";
import {Button} from "@/components/ui/button";

export default function AppSidebar() {

    const {sidebarIsOpen, setSidebarIsOpen} = useContext(AppContext)

    return (
        <Sheet
            open={sidebarIsOpen} onOpenChange={setSidebarIsOpen}
        >
            <SheetContent className=''>
                <SheetHeader>
                    <SheetTitle>
                        <Logo/>
                    </SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <div className='mt-10'>
                    <a href={'/review/add'}>
                        <Button className=' bg-tint mb-10 transform transition-transform duration-100 active:scale-95 '>Оставить
                            отзыв</Button>
                    </a>
                    <ol className='text-xl font-nunito font-bold items-start space-y-4'>
                        <NavButtons withIcons={true}/>
                    </ol>

                </div>
            </SheetContent>
        </Sheet>
    )
}
