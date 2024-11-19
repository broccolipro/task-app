export default function Next() {
    return (
        <div className="w-full  py-4">
            <div className="max-w-4xl mx-auto px-4">
                {/* Контейнер с фоновым элементом */}
                <div className="relative">

                    {/* Заголовок */}
                    <div className="relative">
                        <div className='w-full px-3'>
                            <a href="/create-task">
                                <button
                                    className='w-full bg-tint m-auto p-3 rounded-3xl text-sm text-white font-nunito font-bold active:bg-gray-300'>Заказать
                                    услугу
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
