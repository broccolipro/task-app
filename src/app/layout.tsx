import type {Metadata} from "next";
import {Jura, Comfortaa, Nunito} from "next/font/google";
import "./globals.css";
import Footer from "@/app/[home-components]/Footer";
import Header from "@/app/[home-components]/Header";
import Drawer from "@/app/[home-components]/Drawer";
import {RootProvider} from "@/shared/RootProvider";
import {AntdRegistry} from "@ant-design/nextjs-registry";

const jura = Jura({
    subsets: ["cyrillic"],
    variable: '--font-jura'
})

const comfortaa = Comfortaa({
    subsets: ["cyrillic"],
    variable: '--font-comfortaa',
    weight: ['300', '400', "500", "600", "700", ]
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
            <Drawer/>

            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="flex-grow bg-tbg">
                    <AntdRegistry>{children}</AntdRegistry>
                </main>
                <Footer/>
            </div>

        </RootProvider>

        </body>
        </html>
    );
}
