'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Props = {
  img?: any;
  lable?: string;
  selected?: string;
  handleClick?: (data:any) => void;
};

const PMSObjective: React.FC<Props> = (props) => {
  const { img, lable, selected,handleClick } = props;
 
  return (
    <div className='w-full h-full py-3'>
        <span className='text-[#223559] text-lg font-semibold'>Objectives <span className='text-[#999999] text-sm font-normal'>(02)</span></span>
        <Card className="w-full h-full rounded-lg my-2">
            <CardContent className='p-0'>
                <div className="flex flex-col w-full pt-3">
                    <div className="flex flex-row w-full justify-between px-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row border-r-2 pe-5 items-center">
                                <span className="border-l-4 border-[#4BAFFF] pl-2 text-xs font-normal text-[#999999] ">Rating - </span>
                                <span className="text-xs font-medium text-[#3D537E]"> Partial</span>
                            </div>
                            <div className="flex flex-row ps-5 border-r-2 pe-5 items-center">
                                <span className="text-xs font-normal text-[#999999] ">Weight Scale - </span>
                                <span className="text-xs font-medium text-[#3D537E]"> 20%</span>
                            </div>
                            <div className="flex flex-row ms-5 items-center">
                                <Image
                                    src={'/assets/icons/calendar.svg'}
                                    alt='logo'
                                    className="justify-center"
                                    width={18}
                                    height={19}
                                />
                                <span className="ms-2 text-xs font-normal text-[#666666]">05 May 2023{' '}<span className="text-xs font-normal text-[#999999]">to</span>{' '}05 Aug 2023</span>
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-[#C62D2C] bg-[#FFDCD9] rounded-md py-1 px-3 items-center">
                            <span className="text-xs font-normal text-[#C62D2C] ">High Priority</span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full border-b-2">
                        <div className="flex flex-col w-full">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className='border-b-0'>
                                    <AccordionTrigger className='px-5 text-sm font-normal'>Build and implement digital solutions that enable the government to efficiently and effectively manage its human resource functions</AccordionTrigger>
                                        <AccordionContent className='px-5'>
                                            <div className='flex flex-col'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='flex flex-col py-2'>
                                                        <span className="text-xs font-normal text-[#666666] ">Group</span>
                                                        <span className="text-sm font-medium text-[#333333]">Information Technology</span>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xs font-normal text-[#666666] ">Next Review Date</span>
                                                        <span className="text-sm font-medium text-[#333333]">06 Jan 2024</span>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xs font-normal text-[#666666] ">Achievement Date</span>
                                                        <span className="text-sm font-medium text-[#333333]">01 Jan 2024</span>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xs font-normal text-[#666666] ">Complete</span>
                                                        <span className="text-sm font-medium text-[#333333]">80%</span>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xs font-normal text-[#666666] ">Aligned with</span>
                                                        <span className="text-sm font-medium text-[#333333]">- -</span>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row py-2'>
                                                    <div className='flex flex-col pe-3'>
                                                        <span className="text-xs font-normal text-[#666666] ">Measurement Style</span>
                                                        <span className="text-sm font-medium text-[#333333]">- -</span>
                                                    </div>
                                                    <div className='flex flex-col ps-3'>
                                                        <span className="text-xs font-normal text-[#666666] ">Overall Perfomance</span>
                                                        <span className="text-sm font-medium text-[#333333]">- -</span>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row py-2 justify-between'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xs font-normal text-[#666666] ">Detail</span>
                                                        <span className="text-sm font-medium text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra est nunc, nec convallis sem ultricies ac. In hac habitasse platea dictumst.</span>
                                                    </div>
                                                    <div className='flex flex-col ps-3'>
                                                        <span className="text-xs font-normal text-[#666666] ">Success Criteria</span>
                                                        <span className="text-sm font-medium text-[#333333]">Donec vel mattis nunc, vel consequat lorem. Proin lobortis interdum vulputate. Class aptent taciti sociosqu ad litora torquent per conubia</span>
                                                    </div>
                                                    <div className='flex flex-col ps-3'>
                                                        <span className="text-xs font-normal text-[#666666] ">Comments</span>
                                                        <span className="text-sm font-medium text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra est nunc, nec convallis sem ultricies ac. In hac habitasse platea dictumst.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    
                    <div className="flex flex-row justify-between px-4 py-3 bg-[#f9f9f9]">
                        <div className='pr-2 bg-white'>
                            <Select>
                                <SelectTrigger className="w-[180px] h-[30px]">
                                    <SelectValue placeholder="Weight Scale" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='pl-2 bg-white'>
                            <Select>
                                <SelectTrigger className="w-[180px] h-[30px]">
                                    <SelectValue placeholder="Rating" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <input className="h-[30px] text-xs w-full mx-4 border-2 rounded-md font-normal text-[#666666] px-2" type='text' placeholder='Add Comment'/>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default PMSObjective
