"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CreditCard, Download, BriefcaseBusiness, FileCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const PaymentSettings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <CreditCard className="h-5 w-5 text-gray-700" />
            Payment & Payout Details
          </CardTitle>
          <CardDescription className="text-gray-500">
            Manage how you receive commissions and payments
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          {/* Bank Account Details */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center text-gray-900">
                <BriefcaseBusiness className="h-5 w-5 mr-2 text-gray-700" />
                Bank Account Details
              </h3>
              <Badge variant="outline" className="bg-white text-gray-700 border-gray-200">Primary</Badge>
            </div>
            <p className="text-sm text-gray-500">Your commissions will be paid to this account</p>
            
            <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accountName" className="text-gray-700">Account Name</Label>
                  <Input 
                    id="accountName" 
                    defaultValue="Broker Box Ltd" 
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountNumber" className="text-gray-700">Account Number</Label>
                  <Input 
                    id="accountNumber" 
                    defaultValue="****6789" 
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sortCode" className="text-gray-700">Sort Code</Label>
                  <Input 
                    id="sortCode" 
                    defaultValue="**-**-**" 
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bankName" className="text-gray-700">Bank Name</Label>
                  <Input 
                    id="bankName" 
                    defaultValue="HSBC Bank" 
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                variant="default" 
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Update Bank Details
              </Button>
            </div>
          </motion.div>
          
          <Separator className="my-8 bg-gray-100" />
          
          {/* Payment History */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-medium flex items-center text-gray-900">
              <FileCheck className="h-5 w-5 mr-2 text-gray-700" />
              Payment History
            </h3>
            <p className="text-sm text-gray-500">View your commission payment history</p>
            
            <div className="overflow-auto rounded-lg border border-gray-100">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2023-08-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">£2,250.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">PAY-2308-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2023-07-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">£1,850.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">PAY-2307-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2023-06-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">£3,100.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">PAY-2306-001</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-gray-100 text-gray-800">
                        Paid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline" className="flex items-center gap-2 text-gray-700 border-gray-200 hover:bg-gray-50">
                <Download className="h-4 w-4" />
                Download Statement
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default PaymentSettings
