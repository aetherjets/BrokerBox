"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Percent } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const CommissionSettings = () => {
  const [defaultCommission, setDefaultCommission] = useState('3.5')

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Percent className="h-5 w-5 text-gray-700" />
            Commission Management
          </CardTitle>
          <CardDescription className="text-gray-500">
            Configure your default and custom commission rates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          {/* Default Commission */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Default Commission Rate</h3>
            <p className="text-sm text-gray-500">
              This is the default commission rate applied to all deals unless overridden
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="defaultCommission" className="text-gray-700">Default Rate (%)</Label>
                <div className="relative">
                  <Input 
                    id="defaultCommission" 
                    value={defaultCommission}
                    onChange={(e) => setDefaultCommission(e.target.value)}
                    className="bg-white border-gray-200"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Update Default Rate
              </Button>
            </div>
          </div>
          
          <Separator className="bg-gray-100" />
          
          {/* Product-Specific Commission */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Product-Specific Commission Rates</h3>
            <p className="text-sm text-gray-500">
              Set custom commission rates for specific finance products
            </p>
            
            <div className="overflow-auto rounded-lg border border-gray-100">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Asset Finance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">Edit</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Invoice Finance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.0%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">Edit</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Property Finance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">Edit</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Secured Loans</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.2%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">Edit</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CommissionSettings
