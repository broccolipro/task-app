import {GiArrowed, GiTeamDowngrade} from "react-icons/gi";
import {BsArrowsFullscreen} from "react-icons/bs";
import {LuSofa} from "react-icons/lu";
import {AiOutlineSafetyCertificate} from "react-icons/ai";
import {RiUserSettingsLine} from "react-icons/ri";
import {BiWallet} from "react-icons/bi";
import {TbPigMoney} from "react-icons/tb";


export default function WhyWe() {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap:2'>
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className={`p-6 mb-2 flex flex-col gap-4 rounded-xl shadow-xl`}
                >
                    <div className='lg:mx-auto'>

                        {benefit.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-teal-600">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                            {benefit.description}
                        </p>
                    </div>
                </div>

            ))}
        </div>
    )
}

const size = 50;
const color = 'rgb(245,158,11)';

const benefits = [
    {
        title: "Собственная команда мастеров",
        description: "Все работы выполняют наши квалифицированные сотрудники — никаких посредников.",
        icon: <GiTeamDowngrade size={size} color={color}/>
    },
    {
        title: "Индивидуальный подход",
        description: "Мы учитываем ваши пожелания и предлагаем лучшие решения под ваши задачи.",
        icon: <RiUserSettingsLine size={size} color={color}/>
    },
    {
        title: "Широкий спектр услуг",
        description: "Ремонт, монтаж, обслуживание — решаем задачи любой сложности.",
        icon: <BsArrowsFullscreen size={size} color={color}/>
    },
    {
        title: "Удобство для клиента",
        description: "Оперативное выполнение работ, гибкий график, выезд в удобное время.",
        icon: <LuSofa size={size} color={color}/>
    },
    {
        title: "Надежность и доверие",
        description: "Работаем на репутацию, придерживаемся сроков и договоренностей.",
        icon: <AiOutlineSafetyCertificate size={size} color={color}/>
    },
    {
        title: "Прозрачное ценообразование",
        description: "Вы точно знаете, за что платите — никаких скрытых платежей и неожиданных расходов.",
        icon: <TbPigMoney size={size} color={color}/>
    }
];

