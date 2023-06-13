'use client'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Attachment } from './Attachment/Attachment'

function convertFileToBase64(file:any){
  return new Promise((resolve, reject)=>{
    const reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })
}

export default function LeaveType() {

  const [payload, setPayload] = useState(()=>[]);

  const handleChange=(e:any,key:string)=>{
      let files = [...e.target.files]; 
      const newFiles: any = [] 
      if (files && files.length > 0) {
        files.map((data,index)=>{
          newFiles.push(
            {
              ['I_FILENAME_'+(index+1)]:data.name,
              ['I_FILE_BLOB_'+(index+1)]:convertFileToBase64(data),
              ['I_FILE_TYPE_'+(index+1)]:data.type
            }
          )
        })
      }
      setPayload(Object.assign({},...newFiles));
   
  }
  console.log("FILES",payload);   

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
            <TabsContent value="total" className="w-full"><Attachment handleChange={handleChange}/></TabsContent>
            <TabsContent value="annual" className="w-full"></TabsContent>
            <TabsContent value="sick" className="w-full"></TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}