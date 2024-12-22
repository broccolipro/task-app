import {GiTeamDowngrade} from "react-icons/gi";
import {BsArrowsFullscreen} from "react-icons/bs";
import {LuSofa} from "react-icons/lu";
import {AiOutlineSafetyCertificate} from "react-icons/ai";
import {RiUserSettingsLine} from "react-icons/ri";
import {TbPigMoney} from "react-icons/tb";
import {ReactNode, useContext} from "react";
import {AppContext} from "@/shared/providers/AppProvider";


export default function WhyWe() {
    const {currentLang} = useContext(AppContext)
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
                            {benefit.title[currentLang]}
                        </h3>
                        <p className="text-gray-600">
                            {benefit.description[currentLang]}
                        </p>
                    </div>
                </div>

            ))}
        </div>
    )
}

const size = 50;
const color = 'rgb(245,158,11)';

export interface BenefitItem {
    title: {
        ru: string;
        ro: string;
    };
    description: {
        ru: string;
        ro: string;
    };
    icon: ReactNode;
}

const benefits: BenefitItem[] = [
    {
        title: {
            ru: "Собственная команда мастеров",
            ro: "Echipă proprie de meșteri"
        },
        description: {
            ru: "Все работы выполняются нашей командой мастеров — никаких посредников.",
            ro: "Toate lucrările sunt efectuate de echipa noastră de meșteri — fără intermediari."
        },
        icon: <GiTeamDowngrade size={size} color={color}/>
    },
    {
        title: {
            ru: "Индивидуальный подход",
            ro: "Abordare individuală"
        },
        description: {
            ru: "Мы учитываем ваши пожелания и предлагаем лучшие решения для ваших задач.",
            ro: "Ținem cont de dorințele dumneavoastră și oferim cele mai bune soluții pentru nevoile dvs."
        },
        icon: <RiUserSettingsLine size={size} color={color}/>
    },
    {
        title: {
            ru: "Широкий спектр услуг",
            ro: "Gamă largă de servicii"
        },
        description: {
            ru: "Ремонт, монтаж, обслуживание — решаем задачи любой сложности.",
            ro: "Reparații, montaj, întreținere — rezolvăm sarcini de orice complexitate."
        },
        icon: <BsArrowsFullscreen size={size} color={color}/>
    },
    {
        title: {
            ru: "Удобство для клиента",
            ro: "Confort pentru client"
        },
        description: {
            ru: "Оперативное выполнение работ, гибкий график, выезд в удобное время.",
            ro: "Lucrări efectuate prompt, program flexibil, vizite la momentul convenabil."
        },
        icon: <LuSofa size={size} color={color}/>
    },
    {
        title: {
            ru: "Надежность и доверие",
            ro: "Fiabilitate și încredere"
        },
        description: {
            ru: "Работаем на репутацию, придерживаемся сроков и договоренностей.",
            ro: "Lucrăm pentru reputație, respectăm termenele și înțelegerile."
        },
        icon: <AiOutlineSafetyCertificate size={size} color={color}/>
    },
    {
        title: {
            ru: "Прозрачное ценообразование",
            ro: "Transparență în stabilirea prețurilor"
        },
        description: {
            ru: "Вы точно знаете, за что платите — никаких неожиданных расходов.",
            ro: "Știți exact pentru ce plătiți — fără costuri neașteptate."
        },
        icon: <TbPigMoney size={size} color={color}/>
    }
];

