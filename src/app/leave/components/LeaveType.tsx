import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DatePickerWithRange } from './Date/DatePicker'
import Attachment from './Attachment/Attachment'

export default function LeaveType() {
  return (
    <div>
      <Card className="mx-4 mt-4 p-4">
        <CardContent>
          <Tabs defaultValue="total" className="flex-col relative">
            <TabsList className="grid h-full grid-cols-6">
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="total">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/annual.svg'}
                      alt='logo'
                      className="object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                    <div>
                      <span className='text-sm font-medium'>Annual</span>
                      <p className='text-sm font-medium'>Leave</p>
                    </div>
                    <Image
                        src={'/assets/icons/arrow.svg'}
                        alt='logo'
                        className="justify-self-center object-contain mt-2"
                        width={20}
                        height={20}
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="annual">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/first.svg'}
                      alt='logo'
                      className="justify-self-start object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                    <div>
                      <span className='text-sm font-medium'>Annual</span>
                      <p className='text-sm font-medium'>Leave</p>
                    </div>
                    <Image
                        src={'/assets/icons/arrow.svg'}
                        alt='logo'
                        className="justify-self-center object-contain mt-2"
                        width={20}
                        height={20}
                    />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="sick">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/second.svg'}
                      alt='logo'
                      className="justify-self-start object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                      <div>
                  <span className='text-sm font-medium'>Annual</span>
                  <p className='text-sm font-medium'>Leave</p>
                  </div>
                  <Image
                      src={'/assets/icons/arrow.svg'}
                      alt='logo'
                      className="justify-self-center object-contain mt-2"
                      width={20}
                      height={20}
                  />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="unpaid">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/hajj.svg'}
                      alt='logo'
                      className="justify-self-start object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                      <div>
                  <span className='text-sm font-medium'>Annual</span>
                  <p className='text-sm font-medium'>Leave</p>
                  </div>
                  <Image
                      src={'/assets/icons/arrow.svg'}
                      alt='logo'
                      className="justify-self-center object-contain mt-2"
                      width={20}
                      height={20}
                  />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="exit">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/parental.svg'}
                      alt='logo'
                      className="justify-self-start object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                      <div>
                  <span className='text-sm font-medium'>Annual</span>
                  <p className='text-sm font-medium'>Leave</p>
                  </div>
                  <Image
                      src={'/assets/icons/arrow.svg'}
                      alt='logo'
                      className="justify-self-center object-contain mt-2"
                      width={20}
                      height={20}
                  />
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-t-[10px] items-center justify-center" value="emergency">
                <div className='flex cursor-pointer hover:cursor-pointer'>
                  <Image
                      src={'/assets/images/sick.svg'}
                      alt='logo'
                      className="justify-self-start object-contain mr-4"
                      width={50}
                      height={40}
                  />
                  <div className="flex-col">
                      <div>
                  <span className='text-sm font-medium'>Annual</span>
                  <p className='text-sm font-medium'>Leave</p>
                  </div>
                  <Image
                      src={'/assets/icons/arrow.svg'}
                      alt='logo'
                      className="justify-self-center object-contain mt-2"
                      width={20}
                      height={20}
                  />
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="total" className="w-full"><Attachment/></TabsContent>
            <TabsContent value="annual" className="w-full"></TabsContent>
            <TabsContent value="sick" className="w-full"></TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}