import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function LeaveCard() {
  return (
    <div>
      <Card className="w-[400px]">
        <CardHeader className='grid w-full grid-cols-3'>
          <CardTitle className="text-sm font-semibold">Sick Leave</CardTitle>
          <Image
              src={'/assets/icons/doc.svg'}
              alt='logo'
              className="justify-self-end object-contain"
              width={18}
              height={22}
        />
            <Badge variant="outline" className="text-xs font-medium justify-self-end">Submitted</Badge>
        </CardHeader>
        <CardContent className="mb-2">
          <div className='flex mb-4'>
            <Image
                src={'/assets/icons/calendar.svg'}
                alt='logo'
                className="justify-self-start object-contain mr-4"
                width={18}
                height={22}
            />
            <span className='text-sm font-medium'>05 April 2023 - 20 April 2023</span>
            <span className='border-r-2 mx-4'/>
            <span className='text-sm font-normal'>05 days</span>
          </div>
          <div className='flex justify-between'>
            <div className='w-[170px] text-justify'>
                <p className='text-sm font-normal truncate ...'>Taking sick leave to recover from a personal...</p>
            </div>
            <div className="flex">
            <Image
                src={'/assets/icons/approver1.svg'}
                alt='logo'
                className="object-contain"
                width={30}
                height={30}
            />
            <Image
                src={'/assets/icons/approver2.svg'}
                alt='logo'
                className="object-contain"
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
