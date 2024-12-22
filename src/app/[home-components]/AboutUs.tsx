import { FaPhoneVolume } from "react-icons/fa6";
import React, {useContext} from "react";
import social from "@/shared/social";
import {AppContext} from "@/shared/providers/AppProvider";
import {BsInstagram} from "react-icons/bs";
export default function () {
    const {aboutRef, t} = useContext(AppContext)

    return (
        <div className='font-nunito bg-tbg pt-16' id={'about-us'} ref={aboutRef}>
            <div className='md:w-7/12 m-auto p-10'>
                <h1 className='text-4xl  font-bold '>
                    {t('about_us')}
                </h1>
                <div className=' 2xl:grid grid-cols-[1fr_auto]'>
                    <div className='space-y-2'>

                        <br/>
                        <p>
                            <span className='font-bold text-xl'>009</span>
                            {t('about_us_p')}
                        </p>
                        <br/>
                        <p className='font-bold text-xl'>
                            {t('our_services_include_h')}:
                        </p>
                        <ul className=' list-decimal pl-5'>
                            <li>{t('our_services_include_opt_1')}</li>
                            <li>{t('our_services_include_opt_2')}</li>
                            <li>{t('our_services_include_opt_3')}</li>
                            <li>{t('our_services_include_opt_4')}</li>
                        </ul>
                    </div>
                    <div className='xl:px-20'>
                        <br/>
                        <h1 className='text-xl font-bold'>
                            {t('our_contacts')}
                        </h1>
                        <br/>
                        <div className='flex gap-3  items-center text-xl'>
                            <FaPhoneVolume/>
                            <a className='underline' href='tel:+373 76 666 009'>+373 76 666 009 </a>
                        </div>
                        <br/>
                        <div className={'flex gap-x-10'}>
                            {
                                Object.entries(social).map(([key, value]) =>
                                    <a href={value.href} key={key} className='flex flex-col items-center '>
                                        {value.icon()}
                                        {value.title}
                                    </a>
                                )
                            }
                            <a href={'https://www.instagram.com/m009.md/'} className='flex flex-col items-center '>
                                <BsInstagram size={30} color={'red'}/>
                                Instagram
                            </a>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
