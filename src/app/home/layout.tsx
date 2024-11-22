'use client'
import Footer from "@/app/[home-components]/Footer";
import Header from "@/app/[home-components]/Header";
import Drawer from "@/app/[home-components]/Drawer";
import { RootProvider } from "@/shared/RootProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function PasswordProtectedContent({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const password = searchParams.get('password');

    if (password === '00900') {
        return (
            <RootProvider>
                <Drawer />
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow bg-tbg">
                        <AntdRegistry>{children}</AntdRegistry>
                    </main>
                    <Footer />
                </div>
            </RootProvider>
        );
    } else {
        return <div>Wrong password</div>;
    }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PasswordProtectedContent>{children}</PasswordProtectedContent>
        </Suspense>
    );
}
