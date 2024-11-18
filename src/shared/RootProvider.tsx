import DrawerProvider from "@/shared/drawer/DrawerProvider";


export function RootProvider({children}) {
    return(
        <DrawerProvider>
            {children}
        </DrawerProvider>
    )
}
