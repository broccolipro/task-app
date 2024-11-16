export default function ListTitle() {
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
                            <div className='' >
                                <span className=" block text-amber-500 text-3xl -mb-3">квалифицированными</span>
                                <span className=" block text-amber-500">специалистами</span>
                            </div>

                        </h2>
                    </div>

                    {/* Линия под заголовком */}
                    {/*<div className="mt-6 flex items-center gap-4">*/}
                    {/*    <div className="w-16 h-1 bg-teal-600"></div>*/}
                    {/*    <p className="text-gray-600 text-lg">*/}
                    {/*        Гарантия качества на все виды работ*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
