'use client'

import React, {useContext, useState} from 'react';
import WhyWe from "@/components/[home-components]/WhyWe";
import Discount from "@/components/[home-components]/Discount";
import Reviews from "@/components/[home-components]/Reviews";
import Main from "@/components/[home-components]/Main";
import Categories3 from "@/components/[home-components]/Categories3";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import AboutUs from "@/components/[home-components]/AboutUs";
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import social from "@/shared/social";
import {AppContext} from "@/shared/providers/AppProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
    const {orderIsOpen, setOrderIsOpen, t} = useContext(AppContext)
    const [select, setSelect] = useState('telegram')
    const form = useForm()

    const href = social[select].href

    return (
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className="flex-grow flex flex-col">
                <div>
                    <Main/>
                    <div className='md:w-11/12 lg:w-9/12 xl:w-7/12 m-auto p-5 md:mt-10 sm:space-y-20'>
                        <Categories3/>
                        <Discount/>
                        <WhyWe/>
                        <Reviews/>

                    </div>
                    <AboutUs/>

                    <Dialog open={orderIsOpen} onOpenChange={(value) => {
                        setOrderIsOpen(value)
                    }}>
                        <DialogContent className="">
                            <DialogHeader>
                                <DialogTitle>{t('app_submission')}</DialogTitle>
                                <DialogDescription>
                                    {t('app_submission_p')}
                                </DialogDescription>
                            </DialogHeader>

                            <Form {...form}>

                                <form className="w-2/3 space-y-6">

                                    <FormField
                                        name="messenger"
                                        render={({}) => (
                                            <FormItem>
                                                <FormLabel>{t('messenger')}</FormLabel>
                                                <Select defaultValue={'telegram'}
                                                        onValueChange={(value) => setSelect(value)}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={t('choose_app')}/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value={'telegram'}>
                                                            <div
                                                                className='flex justify-center items-center gap-2'>{social.telegram.icon(20)}
                                                                Telegram
                                                            </div>
                                                        </SelectItem>
                                                        <SelectItem value={'whatsapp'}>
                                                            <div
                                                                className='flex justify-center items-center gap-2'>{social.whatsapp.icon(20)}
                                                                Whatsapp
                                                            </div>
                                                        </SelectItem>
                                                        <SelectItem value={'viber'}>
                                                            <div
                                                                className='flex justify-center items-center gap-2'>{social.viber.icon(20)}
                                                                Viber
                                                            </div>
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    {t('app_submission_advice')}
                                                </FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button onClick={() => setOrderIsOpen(true)}>
                                        <a href={href}>{t('go')}</a>
                                    </Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>

            </main>
            <Footer/>
        </div>
    );
};
