import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ClockTime() {
  return (
    <div className="relative rounded-lg">
      <Card className="absolute w-full bg-[#7388B2]">
        <CardHeader className='grid grid-cols-5'>
          <CardTitle className="text-base font-medium text-white mt-2">Today’s Log Status</CardTitle>
          <div className='flex justify-start -top-2'>
            <Button className="text-xs font-normal text-white me-2 rounded-lg" variant="outline">
            <Image
                src={'/assets/icons/clock.svg'}
                alt='logo'
                className="justify-self-center object-contain me-1"
                width={16}
                height={16}
            />
                Clock In
            </Button>
            <Button className="text-xs font-normal text-white ms-2 rounded-lg" variant="outline">
                <Image
                    src={'/assets/icons/clock.svg'}
                    alt='logo'
                    className="justify-self-center object-contain me-1"
                    width={16}
                    height={16}
                />
                Clock Out
            </Button>
          </div>
        </CardHeader>
        <CardContent className="mb-2">
          
        </CardContent>
      </Card>
    </div>
  )
}
