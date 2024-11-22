import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";

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
        {/*<RootProvider>*/}
        {/*    <Drawer/>*/}

        {/*    <div className="min-h-screen flex flex-col">*/}
        {/*        <Header/>*/}
        {/*        <main className="flex-grow bg-tbg">*/}
        {/*            <AntdRegistry>{children}</AntdRegistry>*/}
        {/*        </main>*/}
        {/*        <Footer/>*/}
        {/*    </div>*/}

        {/*</RootProvider>*/}

        {children}

        </body>
        </html>
    );
}
