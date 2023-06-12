import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

export default function Attachment() {

  return (
    <div dir='ltr'>
        <p className="text-sm font-medium py-2">Attachment</p>
        <Card className="max-w-[590px] max-h-[100px] w-full border-dashed border-2 border-[#cccccc] bg-[#EDF0F6] pt-3">
            <CardContent className='flex ms-[10%]'>
                <label htmlFor='file-input' className='flex items-center justify-center'>
                    <input
                        style={{
                            display: "none",
                        }}
                        id="file-input"
                        type="file"
                        multiple
                    />
                    <Image
                        src={'/assets/icons/attach.svg'}
                        alt='logo'
                        className="justify-self-end object-contain"
                        width={60}
                        height={62}
                    />
                    <div className="ltr:ms-4 rtl:me-4 flex-col">
                        <div>
                            <span className='text-sm font-medium text-[#5B547C]'>Drag & drop your file or</span>
                            <span className='text-xs font-semibold text-[#1784DD] underline underline-offset-2 ltr:ms-1 rtl:me-1'>choose file</span>
                        </div>
                        <span className='ltr text-xs font-normal text-[#666666]'> 2 MB max file size</span>
                    </div>
                </label>
            </CardContent>
        </Card>
    </div>
  )
}
