import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/[home-components]/Footer";
import Header from "@/app/[home-components]/Header";
import Drawer from "@/app/[home-components]/Drawer";
import {RootProvider} from "@/shared/RootProvider";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "009",
    description: "Professional help",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        >
        <RootProvider>

            <Drawer/>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </RootProvider>

        </body>
        </html>
    );
}
