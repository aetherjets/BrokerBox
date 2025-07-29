"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Lock, Bell, Settings, MapPin, Mail, Phone, Building, Edit, Shield, KeyRound, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

const ProfilePage = () => {
  // Mock user data - would come from an API or auth context in a real app
  const [userData, setUserData] = useState({
    name: "Alex Thompson",
    email: "alex.thompson@brokerbox.com",
    role: "Senior Broker",
    memberSince: "June 2021",
    phone: "+44 7700 900123",
    location: "London, UK",
    company: "BrokerBox Financial Ltd",
    avatar: "/profile-avatar.jpg", // This is a placeholder path
    notifications: {
      email: true,
      deals: true,
      marketing: false,
    },
    dealsClosed: 127,
    activeDeals: 14,
    totalValue: "£4.2M"
  })

  // State to track if we're editing
  const [isEditing, setIsEditing] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 md:px-8 py-6 max-w-7xl mx-auto"
    >
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-white shadow-md">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="text-xl font-semibold bg-slate-800 text-white">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{userData.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-slate-800 hover:bg-slate-700">{userData.role}</Badge>
                <p className="text-sm text-slate-500">Member since {userData.memberSince}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex gap-2 text-slate-600">
              <Upload size={16} />
              Update Photo
            </Button>
            <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white flex gap-2"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit size={16} />
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-slate-50 to-white border border-slate-100">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm">Deals Closed</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{userData.dealsClosed}</h3>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-slate-50 to-white border border-slate-100">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm">Active Deals</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{userData.activeDeals}</h3>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-slate-50 to-white border border-slate-100">
          <CardContent className="p-6">
            <p className="text-slate-500 text-sm">Total Value</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{userData.totalValue}</h3>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-6 bg-slate-100">
          <TabsTrigger value="personal" className="data-[state=active]:bg-white">
            <User size={16} className="mr-2" />
            Personal Info
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white">
            <Shield size={16} className="mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-white">
            <Bell size={16} className="mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <User size={20} className="text-slate-700" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Manage your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    defaultValue={userData.name} 
                    readOnly={!isEditing}
                    className={!isEditing ? "bg-slate-50" : ""}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-slate-500" />
                    <Input 
                      id="email" 
                      type="email" 
                      defaultValue={userData.email} 
                      readOnly={!isEditing}
                      className={!isEditing ? "bg-slate-50" : ""}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: isEditing ? 1.01 : 1 }}
                    whileTap={{ scale: isEditing ? 0.99 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.span
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone size={16} className="text-slate-500" />
                    </motion.span>
                    <Input 
                      id="phone" 
                      defaultValue={userData.phone}
                      readOnly={!isEditing}
                      className={cn(
                        !isEditing ? "bg-slate-50" : "",
                        "transition-all duration-300 focus:ring-2 focus:ring-slate-300"
                      )}
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: isEditing ? 1.01 : 1 }}
                    whileTap={{ scale: isEditing ? 0.99 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.span
                      whileHover={{ y: [0, -2, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin size={16} className="text-slate-500" />
                    </motion.span>
                    <Input 
                      id="location" 
                      defaultValue={userData.location} 
                      readOnly={!isEditing}
                      className={cn(
                        !isEditing ? "bg-slate-50" : "",
                        "transition-all duration-300 focus:ring-2 focus:ring-slate-300"
                      )}
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: isEditing ? 1.01 : 1 }}
                    whileTap={{ scale: isEditing ? 0.99 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.span
                      whileHover={{ rotate: [0, 5, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Building size={16} className="text-slate-500" />
                    </motion.span>
                    <Input 
                      id="company" 
                      defaultValue={userData.company} 
                      readOnly={!isEditing}
                      className={cn(
                        !isEditing ? "bg-slate-50" : "",
                        "transition-all duration-300 focus:ring-2 focus:ring-slate-300"
                      )}
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <motion.div
                    whileHover={{ scale: isEditing ? 1.01 : 1 }}
                    whileTap={{ scale: isEditing ? 0.99 : 1 }}
                  >
                    <Input 
                      id="role" 
                      defaultValue={userData.role} 
                      readOnly={!isEditing}
                      className={cn(
                        !isEditing ? "bg-slate-50" : "",
                        "transition-all duration-300 focus:ring-2 focus:ring-slate-300"
                      )}
                    />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Lock size={20} className="text-slate-700" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <KeyRound size={16} className="text-slate-600" />
                      <Label className="text-base">Change Password</Label>
                    </div>
                    <p className="text-sm text-slate-500">Update your account password</p>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-slate-600" />
                      <Label className="text-base">Two-Factor Authentication</Label>
                    </div>
                    <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Settings size={16} className="text-slate-600" />
                      <Label className="text-base">Login Sessions</Label>
                    </div>
                    <p className="text-sm text-slate-500">Manage your active sessions on different devices</p>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Bell size={20} className="text-slate-700" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-slate-500">Receive emails about account activity</p>
                  </div>
                  <Switch 
                    checked={userData.notifications.email} 
                    onCheckedChange={(checked) => 
                      setUserData({...userData, notifications: {...userData.notifications, email: checked}})
                    }
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Deal Updates</Label>
                    <p className="text-sm text-slate-500">Get notified about changes to your deals</p>
                  </div>
                  <Switch 
                    checked={userData.notifications.deals} 
                    onCheckedChange={(checked) => 
                      setUserData({...userData, notifications: {...userData.notifications, deals: checked}})
                    }
                  />
                </div>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Marketing Communications</Label>
                    <p className="text-sm text-slate-500">Receive news, announcements and product updates</p>
                  </div>
                  <Switch 
                    checked={userData.notifications.marketing} 
                    onCheckedChange={(checked) => 
                      setUserData({...userData, notifications: {...userData.notifications, marketing: checked}})
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

export default ProfilePage
