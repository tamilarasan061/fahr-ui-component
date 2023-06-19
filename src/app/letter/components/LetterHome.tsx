'use client'
import React, { useState } from 'react'
import CheckButton from './CheckButton/CheckButton'


export default function LetterHome() {

    const [selected,setSelected]= useState<string>()
    const handleClick=(data:any)=>{
        console.log(data);
        
      setSelected(data)
    }
  
    console.log(selected);

  return (
    <div className="p-5 flex">
        <CheckButton img={'/assets/images/letterImg.svg'} lable="Manual Signed by HR" selected={selected} handleClick={handleClick}/>
        <CheckButton img={'/assets/images/email.svg'} lable="System Generated" selected={selected} handleClick={handleClick}/>
    </div>
  )
}
