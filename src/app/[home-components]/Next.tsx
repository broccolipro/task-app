export default function Next() {
    return (
        <div className="w-full  py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Контейнер с фоновым элементом */}
                <div className="relative">

                    {/* Заголовок */}
                    <div className="relative">
                        <h2 className="text-4xl font-bold leading-tight">
                            <span className="text-white">Работы выполняются</span>
                            <br/>
                            <div className=''>
                                <span className=" block text-amber-500 text-3xl -mb-3">квалифицированными</span>
                                <span className=" block text-amber-500">специалистами</span>
                            </div>
                            <div className='flex justify-center pt-5' >
                                <a href="/create-task">

                                    <button className='bg-white p-2 rounded-lg text-2xl text-tint active:bg-gray-300'>Заказать услугу</button>
                                </a>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
