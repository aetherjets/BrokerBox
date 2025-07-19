"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ShieldCheck, Copy } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const SecuritySettings = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <ShieldCheck className="h-5 w-5 text-gray-700" />
            Security Settings
          </CardTitle>
          <CardDescription className="text-gray-500">
            Manage account security and two-factor authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          {/* Password */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Password</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-gray-700">Current Password</Label>
                <Input id="currentPassword" type="password" className="bg-white border-gray-200" />
              </div>
              <div className="md:col-span-2 md:w-1/2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-gray-700">New Password</Label>
                  <Input id="newPassword" type="password" className="bg-white border-gray-200" />
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Update Password
              </Button>
            </div>
          </div>
          
          <Separator className="bg-gray-100" />
          
          {/* Two-Factor Authentication */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch 
                checked={twoFAEnabled} 
                onCheckedChange={setTwoFAEnabled}
              />
            </div>
            
            {twoFAEnabled && (
              <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-100 space-y-6">
                <div className="text-center">
                  <div className="bg-white p-4 inline-block rounded-lg border border-gray-100 shadow-sm mb-4">
                    {/* This would be a QR code in a real app */}
                    <div className="w-40 h-40 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                      QR Code Placeholder
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Scan this QR code with your authenticator app
                  </p>
                </div>
                
                <div className="space-y-2 max-w-md mx-auto">
                  <Label htmlFor="backupCode" className="text-gray-700">Backup Code</Label>
                  <div className="relative">
                    <Input 
                      id="backupCode" 
                      value="XXXX-XXXX-XXXX-XXXX" 
                      readOnly 
                      className="bg-white border-gray-200 pr-10"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="absolute right-1 top-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Save this backup code in a safe place. You'll need it if you lose access to your authenticator app.
                  </p>
                </div>
                
                <div className="space-y-2 max-w-md mx-auto">
                  <Label htmlFor="verifyCode" className="text-gray-700">Verification Code</Label>
                  <Input 
                    id="verifyCode" 
                    placeholder="Enter code from your authenticator app" 
                    className="bg-white border-gray-200"
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Verify & Activate 2FA
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SecuritySettings
