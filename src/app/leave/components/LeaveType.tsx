'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Attachment } from './Attachment/Attachment'

export default function LeaveType() {

  let key = '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]'

  const [attachment, setAttachment] = useState(()=>{
    let object:any={}
    const parsed = JSON.parse(key)
    parsed.forEach((key:string)=>{
    object[key]=''
  })
  return object
  });

const handleFiles=(e:any,key:string)=>{
  console.log(key);
  
  
    let files = [...e.target.files];
    
    if (files && files.length > 0) {
        files.map((data,i)=>{
            const fileSize = Math.round(data?.size / 1024);
            console.log(data);
            
            if (fileSize < 2048) {
                setAttachment((currentAttachment:any)=>({...currentAttachment,...{[key[i]]:data.name}
                }));
            }
        })
    }
    console.log(attachment);   
}

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
            <TabsContent value="total" className="w-full"><Attachment handleChange={handleFiles}/></TabsContent>
            <TabsContent value="annual" className="w-full"></TabsContent>
            <TabsContent value="sick" className="w-full"></TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}