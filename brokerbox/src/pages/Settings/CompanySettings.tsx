"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Building, BriefcaseBusiness, Lock, UserCog } from 'lucide-react'

const CompanySettings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Building className="h-5 w-5 text-gray-700" />
            Contact Information
          </CardTitle>
          <CardDescription className="text-gray-500">
            Update your company and contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Company Information */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h3 className="text-lg font-medium flex items-center text-gray-900">
                <BriefcaseBusiness className="h-5 w-5 mr-2 text-gray-700" />
                Company Information
              </h3>
              
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-gray-700">Company Name</Label>
                    <Input id="companyName" defaultValue="Broker Box Ltd" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tradingName" className="text-gray-700">Trading Name</Label>
                    <Input id="tradingName" defaultValue="Broker Box" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyNumber" className="text-gray-700">Companies House Number</Label>
                    <Input id="companyNumber" defaultValue="12345678" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vatNumber" className="text-gray-700">VAT Number (optional)</Label>
                    <Input id="vatNumber" defaultValue="GB123456789" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="companyAddress" className="text-gray-700">Company Address</Label>
                    <Input id="companyAddress" defaultValue="123 Finance Street" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">City</Label>
                    <Input id="city" defaultValue="London" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postcode" className="text-gray-700">Postcode</Label>
                    <Input id="postcode" defaultValue="EC1A 1BB" className="bg-white border-gray-200" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Primary Contact */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <h3 className="text-lg font-medium flex items-center text-gray-900">
                <UserCog className="h-5 w-5 mr-2 text-gray-700" />
                Primary Contact
              </h3>
              
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-gray-700">Name</Label>
                    <Input id="contactName" defaultValue="John Doe" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-gray-700">Position</Label>
                    <Input id="position" defaultValue="Director" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="text-gray-700">Email</Label>
                    <Input id="contactEmail" type="email" defaultValue="john@brokerbox.com" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone" className="text-gray-700">Phone</Label>
                    <Input id="contactPhone" defaultValue="+44 20 1234 5678" className="bg-white border-gray-200" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* FCA Details */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <h3 className="text-lg font-medium flex items-center text-gray-900">
                <Lock className="h-5 w-5 mr-2 text-gray-700" />
                Regulatory Information
              </h3>
              
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fcaNumber" className="text-gray-700">FCA Registration Number</Label>
                    <Input id="fcaNumber" defaultValue="123456" className="bg-white border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fcaStatus" className="text-gray-700">FCA Status</Label>
                    <Select defaultValue="approved">
                      <SelectTrigger id="fcaStatus" className="bg-white border-gray-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="notRequired">Not Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 py-4 flex justify-end border-t border-gray-100">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default CompanySettings
