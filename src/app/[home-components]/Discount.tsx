import {useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";


export default function Discount() {

    const { setOrderIsOpen } = useContext(AppContext)

    return (
        <div className='md:p-4'>
            <div className='bg-tint rounded-2xl my-16 p-3  md:h-52 md:p-10 flex'>
                <div className='flex flex-col h-full w-full space-y-4'>
                    <div className='flex-grow space-y-3'>
                        <h1 className='text-white text-2xl font-nunito font-bold'>Обратись за помощью сейчас</h1>
                        <div className='w-10/12 text-gray-300 leading-4'>
                            <p>Получи консультацию и расчет стоимости бесплатно!</p>
                        </div>
                    </div>
                    <button className='w-24 h-10 rounded-full bg-white font-semibold '
                            onClick={() => setOrderIsOpen(true)}
                    >
                        Заказать
                    </button>
                </div>
                <div className='w-24 lg:w-28 relative'>
                    <img src="/worker.png" alt="A man with toolbox" className='absolute bottom-0 right-3 lg:right-16 lg:-bottom-3'/>
                </div>
            </div>
        </div>

    )
}
