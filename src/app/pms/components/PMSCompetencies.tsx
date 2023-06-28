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

const PMSCompetencies: React.FC<Props> = (props) => {
  const { img, lable, selected,handleClick } = props;
 
  return (
    <div className='w-full h-full py-3'>
        <span className='text-[#223559] text-lg font-semibold'>Competencies <span className='text-[#999999] text-sm font-normal'>(01)</span></span>
        <Card className="w-full h-full rounded-lg my-2">
            <CardContent className='p-0'>
                <div className="flex flex-col w-full pt-3">
                    <div className="flex flex-row w-full justify-between px-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <span className="border-l-4 border-[#4BAFFF] pl-2 text-xs font-normal text-[#999999] ">Rating - </span>
                                <span className="text-xs font-medium text-[#3D537E]"> Partial</span>
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-[#DDDDDD] bg-[#EDF0F6] rounded-md py-1 px-3 items-center">
                            <span className="text-xs font-normal text-[#3D537E] ">Behavioural</span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full border-b-2">
                        <div className="flex flex-row w-full py-2">
                            <span className='px-5 text-sm font-normal'>Future Outlook/Futuristic/Awareness</span>
                            <Image
                                    src={'/assets/images/infoCircle.svg'}
                                    alt='logo'
                                    className="justify-center"
                                    width={18}
                                    height={19}
                                />
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
                        <Image
                            src={'/assets/images/upload.svg'}
                            alt='logo'
                            className="justify-center"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default PMSCompetencies
