import Image from 'next/image'

export default function Main({onMakeApp}) {
    return (
        <div className={` bg-tbg `}>
            <div className='lg:w-7/12 mx-auto'>

                <div className='h-2.5/6 sm:h-2/6 pt-10 flex flex-col overflow-hidden'>
                    <div className='space-y-5 p-5'>
                        <h1 className={'font-bold font-nunito text-4xl lg:text-6xl text-center'}>Чем вам помочь?</h1>
                        <p className={'text-center text-mute font-nunito font-medium text-lg'}>Профессиональные услуги по монтажу, ремонту, обслуживанию и многое
                            другое </p>
                    </div>

                    <div className={'mx-auto space-x-10 p-5'}>
                        <button className='bg-tint p-2 rounded-lg text-white'
                                onClick={() => onMakeApp(true)}
                        >Заказать услугу</button>
                        <button>Узнать больше</button>
                    </div>
                </div>
                <div className={'h-3/6 sm:h-4/6 p-10  flex flex-col justify-end'}>


                        <img className='max-w-[500px] w-full max-h-full object-contain mx-auto'
                             src={'/main-image2.png'}
                             alt={''}/>


                </div>


            </div>


        </div>
    )
}
