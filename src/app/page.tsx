import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'
import LeaveManagement from './leave/page'

export default function Home() {
  return (
    <div>
      <LeaveManagement/>
    </div>
  )
}
