

export default function Discount() {
    return (
        <div className='bg-tint rounded-2xl my-16 p-3 h-40 flex' >
            <div className='relative h-full w-full' >
                <h1 className='text-white text-2xl font-nunito font-bold'>Типа скидка у нас будет</h1>
                <div className='w-10/12 text-gray-300 leading-4'>
                    <p>Немного посаиня тут должно быть но пока нету но с</p>
                </div>
                <button className='w-24 h-10 rounded-full bg-white font-semibold absolute bottom-2 left-2 '>
                    Заказать
                </button>
            </div>
            <div className='w-24 relative'>
                <img src="/worker.png" alt="A man with toolbox" className='absolute bottom-0 right-3'/>
            </div>
        </div>
    )
}
