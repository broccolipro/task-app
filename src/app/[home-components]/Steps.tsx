import React from 'react';
import {Steps} from 'antd';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {StepProps} from "antd/lib";

export default function Step() {

    const steps:  StepProps[] = [
        {
            title: 'Оставьте заявку',
            description: 'Опишите проблему, прикрепите фото и укажите ваши пожелания.',
            status: "finish",
        },
        {
            title: 'Согласуйте детали и цену',
            description: 'Мы предложим решение, уточним задачу и рассчитаем стоимость.',
            status: "finish",
        },
        {
            title: 'Выберите дату и время',
            description: 'Назначьте удобные дату и время для визита мастера.',
            status: "finish",
        },
        {
            title: 'Проверьте работу и оставьте отзыв',
            description: 'Оцените результат и поделитесь своим мнением.',
            status: "finish",
        },
    ]

    return (

        <div className='p-5 lg:p-10 md:flex lg:space-x-16 md:justify-center'>
            <div className='hidden md:block lg:p-5 md:my-auto md:space-y-8 '>
                <div className='text-xl text-center font-nunito font-bold mb-8 max-w-[30rem] text-black'>
                    Наша команда опытных мастеров поможет вам решить вашу бытрвую задачу
                </div>
                <div className={'px-5'} >
                    <Button className={'w-full bg-tint'}>
                        <Link href={''} > Заказать </Link>
                    </Button>
                </div>
            </div>
            <div className='md:w-6/12 space-y-6'>
                <div className='md:hidden text-xl md:text-center font-nunito font-bold mb-8 max-w-[30rem]'>
                    Наша команда опытных мастеров поможет вам решить вашу бытрвую задачу
                </div>
                <Steps
                    direction="vertical"
                    size="default"
                    current={0}
                    items={steps}
                />
                <div className={'px-8 md:hidden'}>
                    <Button className={'w-full bg-tint'}>
                        <Link href={''} > Заказать </Link>
                    </Button>
                </div>
            </div>

        </div>


    )
}


