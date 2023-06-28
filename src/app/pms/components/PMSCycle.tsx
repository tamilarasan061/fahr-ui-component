'use client'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PMSObjective from './PMSObjective';
import { Divide } from 'lucide-react';
import PMSCompetencies from './PMSCompetencies';

type Props = {
  img?: any;
  lable?: string;
  selected?: string;
  handleClick?: (data:any) => void;
};

const PMSCycle: React.FC<Props> = (props) => {
  const { img, lable, selected,handleClick } = props;
 
  return (
    <div className='w-full h-full'>
        <Tabs defaultValue="1" className="flex w-full h-full">
            <TabsList className="grid h-full p-0">
                <TabsTrigger className="grid max-w-[320px] items-center grid-cols-3 border px-3 py-2" value="1">
                    <Image
                        src={'/assets/images/empMale.svg'}
                        alt='logo'
                        className="justify-center ms-2"
                        width={60}
                        height={60}
                    />
                    <div className={`flex flex-col`}>
                        <span className="text-sm font-medium text-[#333333]">Waseem Javed</span>
                        <span className="text-xs font-normal text-[#999999]">EID525454</span>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="grid max-w-[320px] items-center grid-cols-3 border px-3 py-2" value="2">
                    <Image
                        src={'/assets/images/empFemale.svg'}
                        alt='logo'
                        className="justify-center ms-2"
                        width={60}
                        height={60}
                    />
                    <div className={`flex flex-col`}>
                        <span className="text-sm font-medium text-[#333333]">Mahidia</span>
                        <span className="text-xs font-normal text-[#999999]">EID525455</span>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="grid max-w-[320px] items-center grid-cols-3 border px-3 py-2" value="3">
                    <Image
                        src={'/assets/images/empMale.svg'}
                        alt='logo'
                        className="justify-center ms-2"
                        width={60}
                        height={60}
                    />
                    <div className={`flex flex-col`}>
                        <span className="text-sm font-medium text-[#333333]">Mohamed Islam</span>
                        <span className="text-xs font-normal text-[#999999]">EID525456</span>
                    </div>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="1" className='w-full mt-0'>
                <Card className="w-full h-full rounded-none">
                    <CardContent>
                        <div className='flex flex-col'>
                            <div className="flex flex-row justify-between items-center py-5 border-b-2">
                                <div className="flex flex-row">
                                    <Image
                                        src={'/assets/images/empMale.svg'}
                                        alt='logo'
                                        className="justify-center ms-2"
                                        width={60}
                                        height={60}
                                    />
                                    <div className="flex flex-col ms-3">
                                        <span className="text-base font-medium text-[#333333]">Waseem Javed</span>
                                        <span className="text-sm font-normal text-[#666666]">Director of Information System Department</span>
                                        <span className="text-xs font-semibold text-[#30A2FF] underline">View PMS History </span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-normal text-[#666666]">Department</span>
                                    <span className="text-sm font-medium text-[#333333]">Human Resources Information System</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-normal text-[#666666]">Grade</span>
                                    <span className="text-sm font-medium text-[#333333]">Expert & Consultants</span>
                                </div>
                            </div>
                            <PMSObjective/>
                            <PMSCompetencies/>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="2" className='w-full mt-0'>
                <Card className="w-full h-full rounded-none">
                    <CardContent>
                        <span className="text-sm font-medium text-[#333333]">Mahidia</span>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="3" className='w-full mt-0'>
                <Card className="w-full h-full rounded-none">
                    <CardContent>
                        <span className="text-sm font-medium text-[#333333]">Mohamed Islam</span>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default PMSCycle
