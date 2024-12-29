import {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";

export default function Main() {

    const {setOrderIsOpen, scrollToView, findMoreRef, t} = useContext(AppContext)

    return (
        <div className={` bg-tbg `}>
            <div className='lg:w-7/12 mx-auto'>

                <div className='h-2.5/6 sm:h-2/6 pt-10 flex flex-col overflow-hidden'>
                    <div className='space-y-5 p-5'>
                        <h1 className={'font-bold font-nunito text-4xl lg:text-6xl text-center'}>
                            {t('what_can_we_help')}
                        </h1>
                        <p className={'text-center text-mute font-nunito font-medium text-xl'}>
                            {t('main_p')}
                        </p>
                    </div>

                    <div className={'mx-auto space-x-10 p-5'}>
                        <button className='bg-tint p-2 rounded-lg text-white'
                                onClick={() => setOrderIsOpen(true)}
                        >
                            {t('order_service')}
                        </button>
                        <button onClick={() => scrollToView(findMoreRef)}>
                            {t('find_out_more')}
                        </button>
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
