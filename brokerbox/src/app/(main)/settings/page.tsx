"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  CreditCard, Users, Building, Percent, 
  ShieldCheck, Webhook, ChevronRight, Bell, UserCog
} from 'lucide-react'

// Import settings component modules
import PaymentSettings from '@/pages/Settings/PaymentSettings'
import TeamSettings from '@/pages/Settings/TeamSettings'
import CompanySettings from '@/pages/Settings/CompanySettings'
import CommissionSettings from '@/pages/Settings/CommissionSettings'
import SecuritySettings from '@/pages/Settings/SecuritySettings'
import WebhookSettings from '@/pages/Settings/WebhookSettings'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("payment")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren",
        duration: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  }
  
  return (
    <motion.div 
      className="py-4 px-4 md:px-8 max-w-[1600px] mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <motion.div variants={itemVariants} className="lg:w-1/4">
          <div className="lg:fixed lg:w-[calc(25%-1rem)]">
            <Card className="overflow-hidden border border-gray-100 shadow-sm bg-white">
              <CardContent className="p-0">
                <div className="bg-white border-b border-gray-100 text-gray-900 px-6 pb-4">
                  <h2 className="font-semibold flex items-center text-2xl">
                    <UserCog className="w-5 h-5 mr-2 text-gray-700" />
                    Settings
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">Manage your preferences</p>
                </div>
                
                <div className="p-3">
                  {[
                    {
                      id: "payment", 
                      icon: <CreditCard className="h-5 w-5" />, 
                      label: "Payment Details",
                      description: "Bank accounts & payments",
                      color: "from-blue-500 to-blue-600" 
                    },
                    { 
                      id: "team", 
                      icon: <Users className="h-5 w-5" />, 
                      label: "Team Members",
                      description: "Manage users & roles",
                      color: "from-purple-500 to-purple-600" 
                    },
                    { 
                      id: "contact", 
                      icon: <Building className="h-5 w-5" />, 
                      label: "Company Information",
                      description: "Business details",
                      color: "from-emerald-500 to-emerald-600" 
                    },
                    { 
                      id: "commission", 
                      icon: <Percent className="h-5 w-5" />, 
                      label: "Commission Settings",
                      description: "Fee rates & thresholds",
                      color: "from-amber-500 to-amber-600" 
                    },
                    { 
                      id: "security", 
                      icon: <ShieldCheck className="h-5 w-5" />, 
                      label: "Security & 2FA",
                      description: "Account protection",
                      color: "from-red-500 to-red-600" 
                    },
                    { 
                      id: "webhooks", 
                      icon: <Webhook className="h-5 w-5" />, 
                      label: "API & Webhooks",
                      description: "Integrations & events",
                      color: "from-violet-500 to-violet-600" 
                    }
                  ].map(tab => (
                    <motion.button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`w-full flex items-start gap-3 py-2 px-4 rounded-lg text-left transition-all mb-1 relative overflow-hidden ${
                        activeTab === tab.id 
                          ? "bg-gray-100 shadow-sm  cursor-pointer" 
                          : "hover:bg-gray-50 cursor-pointer"
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={`shrink-0 h-10 w-10 rounded-md flex items-center justify-center ${
                        activeTab === tab.id 
                          ? `bg-gray-100 text-gray-900` 
                          : "bg-white text-gray-600 border border-gray-100"
                      }`}>
                        {tab.icon}
                      </div>
                      
                      <div>
                        <div className={`font-medium ${
                          activeTab === tab.id ? "text-gray-900" : "text-gray-700"
                        }`}>
                          {tab.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {tab.description}
                        </div>
                      </div>
                      
                      {activeTab === tab.id && (
                        <motion.div 
                          className="ml-auto self-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-5 w-5 text-gray-700" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
                
                <div className="p-4 mt-2 mx-3 mb-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg border border-dashed border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700">
                      <Bell size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Need help?</p>
                      <p className="text-xs text-slate-500">Contact support team</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        
        {/* Settings Content */}
        <motion.div variants={itemVariants as any} className="lg:w-3/4">
          <div className="w-full">
            {activeTab === "payment" && <PaymentSettings />}
            {activeTab === "team" && <TeamSettings />}
            {activeTab === "contact" && <CompanySettings />}
            {activeTab === "commission" && <CommissionSettings />}
            {activeTab === "security" && <SecuritySettings />}
            {activeTab === "webhooks" && <WebhookSettings />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SettingsPage


