import { FaPhoneVolume } from "react-icons/fa6";
import React, {useContext} from "react";
import social, {iconSize} from "@/shared/social";
import {AppContext} from "@/shared/providers/AppProvider";
import {BsInstagram} from "react-icons/bs";
import Logo from "@/components/Logo";
import {Card} from "@/components/ui/card";
export default function () {
    const {aboutRef, t} = useContext(AppContext)

    const LocalLi = ({textContent}) =>
        <li className="before:content-['✅'] ">
            {t(textContent)}
        </li>

    return (
        <div className='font-nunito bg-tbg pt-16' id={'about-us'} ref={aboutRef}>
            <div className='md:w-9/12 lg:w-7/12 m-auto p-10'>
                <h1 className='text-4xl  font-bold text-center'>
                    {t('about_us')}
                </h1>
                <div className=''>
                    <div className='space-y-2'>
                        <br/>
                        <p className='lg:text-center text-xl'>
                            <Logo className='w-16 inline'/>
                            {t('about_us_p')}
                        </p>
                        <br/>
                        <p className='font-bold text-xl'>
                            {t('our_services_include_h')}:
                        </p>
                        <ul className='space-y-3'>
                            <LocalLi textContent={'our_services_include_opt_1'}/>
                            <LocalLi textContent={'our_services_include_opt_2'}/>
                            <LocalLi textContent={'our_services_include_opt_3'}/>
                            <LocalLi textContent={'our_services_include_opt_4'}/>
                        </ul>
                    </div>
                    <Card className='flex flex-col items-center mt-10 space-y-10 py-5'>
                        <h1 className='text-xl font-bold'>
                            {t('our_contacts')}
                        </h1>
                        <div className='flex gap-10 flex-wrap'>
                            <div className='flex gap-3  items-center text-xl mx-auto'>
                                <FaPhoneVolume/>
                                <a className='underline' href='tel:+373 76 666 009'>+373 76 666 009 </a>
                            </div>
                            <div className={'flex gap-x-5 mx-auto'}>
                                {
                                    Object.entries(social).map(([key, value]) =>
                                        <a href={value.href} key={key} className='flex flex-col items-center '>
                                            {value.icon()}
                                            {/*{value.title}*/}
                                        </a>
                                    )
                                }
                                <a href={'https://www.instagram.com/m009.md/'} className='flex flex-col items-center '>
                                    <BsInstagram size={iconSize} color={'red'}/>
                                    {/*Instagram*/}
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
