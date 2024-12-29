import type {Metadata} from "next";
import "./globals.css";
import {Nunito} from "next/font/google";
import SideBar from "@/components/AppSidebar";
import AppProvider from "@/shared/providers/AppProvider";
import ClientProvider from "@/shared/providers/ClientProvider";

// const jura = Jura({
//     subsets: ["cyrillic"],
//     variable: '--font-jura'
// })
//
// const comfortaa = Comfortaa({
//     subsets: ["cyrillic"],
//     variable: '--font-comfortaa',
//     weight: ['300', '400', "500", "600", "700",]
// })

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: '--font-nunito',
})

export const metadata: Metadata = {
    title: "009",
    description: "Professional help",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en">
        <body
            className={` ${nunito.variable}  antialiased bg-white`}
        >
        <ClientProvider>
            <AppProvider>
                <SideBar/>
                {children}
            </AppProvider>
        </ClientProvider>
        </body>
        </html>
    );
}
