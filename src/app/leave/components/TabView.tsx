import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import LeaveCard from './LeaveCard'

export default function TabView() {
  return (
    <div>
      <Card className="h-[480px] m-4 p-0">
        <CardHeader>
          <CardTitle>Leave Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="total" className="flex-col h-[80px] divide-y-4 divide-x-0">
            <TabsList className="grid w-full h-full grid-cols-6">
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="total">
                <p className="text-3xl font-bold">08</p>
                <p className="text-base font-semibold">Total Requested Leaves</p>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="annual">
                <div className="flex-row">
                  <span className="text-3xl font-bold">01</span>
                  <span className="text-xs font-normal">/18</span>
                </div>
                <p className="text-base font-semibold">Annual Leaves</p>
              </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="sick">
                <div className="flex-row">
                  <span className="text-3xl font-bold">02</span>
                  <span className="text-xs font-normal">/12</span>
                </div>
                <p className="text-base font-semibold">Sick Leaves</p>
                </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="unpaid">
                <p className="text-3xl font-bold">01</p>
                <p className="text-base font-semibold">Unpaid Leave</p>
                </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="exit">
                <div className="flex-row">
                  <span className="text-3xl font-bold">01</span>
                  <span className="text-xs font-normal">/04</span>
                </div>
                <p className="text-base font-semibold">Exit Permit</p>
                </TabsTrigger>
              <TabsTrigger className="h-full flex-col rounded-[10px]" value="emergency">
                <div className="flex-row">
                  <span className="text-3xl font-bold">02</span>
                  <span className="text-xs font-normal">/08</span>
                </div>
                <p className="text-base font-semibold">Emergency Leave</p>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="total" className="pt-6"><LeaveCard/></TabsContent>
            <TabsContent value="annual" className="pt-6"><LeaveCard/></TabsContent>
            <TabsContent value="sick" className="pt-6"><LeaveCard/></TabsContent>
          </Tabs>
        </CardContent>
        
      </Card>
    </div>
  )
}
