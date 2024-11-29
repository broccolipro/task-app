'use client'
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, { useRef, useState} from "react";
import {Accordion} from "@/components/ui/accordion";
import {AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";
import {BiCabinet, BiPaintRoll} from "react-icons/bi";
import {GiDoorHandle, GiWashingMachine} from "react-icons/gi";
import {TbGardenCart} from "react-icons/tb";
import {RiHammerLine} from "react-icons/ri";
import {categories} from "@/shared/categories";


export default function () {


    return (
        <div className='flex w-full justify-center font-nunito bg-tbg'>
            <Tabs className='w-full space-y-5' defaultValue={categories[0].value}>
                <TabsList
                    className='w-full h-auto flex-wrap gap-4 p-3'
                    defaultChecked={true}
                    defaultValue={categories[0].value}
                >
                    {
                        categories.map((item) =>
                            <TabsTrigger value={item.value}
                                         key={item.id}
                                         className='w-auto cursor-pointer'
                            >
                                {item.icon}
                                <h1>{item.title}</h1>
                            </TabsTrigger>)
                    }
                </TabsList>
                {categories.map(item =>
                    <TabsContent value={item.value} key={item.id} className='h-auto p-4 lg:p-10 '>
                        <div className='md:w-6/12' >
                            <Accordion type="single" collapsible className="w-full bg-white p-3 rounded-xl">
                                {
                                    item.options.map((option, index) =>
                                        <AccordionItem key={`item-${index}`} value={`item-${index}`} className='' >
                                            <AccordionTrigger>{option}</AccordionTrigger>
                                            <AccordionContent>
                                                {/*<Image src={'/placeholder-image.jpg'} width={200} height={200} alt={''} />*/}
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem corporis dignissimos, dolorum expedita fuga fugit ipsum itaque nesciunt nihil nobis obcaecati placeat provident quos rem repellat sint sunt suscipit.
                                            </AccordionContent>
                                        </AccordionItem>)
                                }
                            </Accordion>
                        </div>
                    </TabsContent>
                )}

            </Tabs>
        </div>

    )
}


