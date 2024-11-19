import React from 'react';
import {Steps} from 'antd';

export default function Step() {

    return (

        <div className='p-4 bg-white'>
            <h1 className='text-xl font-nunito font-bold mb-4' >Наша команда опытных мастеров поможет вам решить вашу бытрвую задачу</h1>
            <Steps
                direction="vertical"
                size="default"
                current={0}
                items={[
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
                ]}
            />
        </div>


    )
}


