'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

type Props = {
  img?: any;
  lable?: string;
  selected?: string;
  handleClick?: (data:any) => void;
};

const CheckButton: React.FC<Props> = (props) => {
  const { img, lable, selected,handleClick } = props;
 
  return (
    <div className="me-3" onClick={()=>handleClick(lable)} dir={'ltr'}>
      <Card className={`grid w-[350px] h-[100px] items-center grid-cols-3 ${selected === lable ? "bg-[#EDF0F6] border-[#7388B2]" : "bg-[#FFFFFF] border-[#DDDDDD]"}  border-2 `}>
        <Image
          src={img}
          alt='logo'
          className="justify-center ms-2"
          width={50}
          height={60}
        />
        <div>
          <span className="text-base font-medium text-[#333333]">{lable}</span><br/>
        </div>
        <Checkbox className={`me-[20px] justify-self-end w-[26px] h-[26px]`} checked={selected === lable ? true: false}/>
      </Card>
    </div>
  )
}

export default CheckButton
