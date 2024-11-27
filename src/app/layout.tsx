import type {Metadata} from "next";
import "./globals.css";
import {Jura, Comfortaa, Nunito} from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Drawer from "@/components/Drawer";
import {RootProvider} from "@/shared/RootProvider";
import {AntdRegistry} from "@ant-design/nextjs-registry";

const jura = Jura({
    subsets: ["cyrillic"],
    variable: '--font-jura'
})

const comfortaa = Comfortaa({
    subsets: ["cyrillic"],
    variable: '--font-comfortaa',
    weight: ['300', '400', "500", "600", "700",]
})

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
        <RootProvider>
            <AntdRegistry>
                <Drawer/>

                <div className='flex flex-col min-h-screen'>
                    <Header/>
                    <main className="flex-grow flex flex-col">
                        {children}
                    </main>
                    <Footer/>
                </div>

            </AntdRegistry>
        </RootProvider>

        </body>
        </html>
    );
}
