"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Bell, DollarSign, MessageSquare, Settings, User, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter();
  const totalCommission = 38500
  const unreadMessages = 4 
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="bg-gray-900 text-white h-8 w-8 rounded-md flex items-center justify-center font-bold">BB</div>
                <span className="text-xl font-bold text-gray-900">BrokerBox</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications - Commission */}
            <div className="hidden md:flex items-center">
              <div 
                onClick={() => router.push('/track-commision')}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-colors"
                title="View commission details"
              >
                <DollarSign className="h-4 w-4 text-gray-700" />
                <span className="text-gray-900">£ {totalCommission.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Notifications - Messages */}
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative cursor-pointer hover:bg-gray-100 rounded-full h-9 w-9 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-gray-700" />
                    {unreadMessages > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadMessages}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-0 rounded-lg border border-gray-200 shadow-lg">
                  <DropdownMenuLabel className="bg-gray-50 border-b border-gray-100 p-3 text-gray-900">Messages</DropdownMenuLabel>
                  <div className="max-h-[300px] overflow-auto py-1">
                    {[1, 2, 3, 4].map((item) => (
                      <DropdownMenuItem key={item} className="cursor-pointer p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://i.pravatar.cc/150?img=${item}`} />
                            <AvatarFallback>LN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {item % 2 === 0 ? 'Capital Bank' : 'Phoenix Finance'}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item % 2 === 0 
                                ? 'We need additional documentation for...' 
                                : 'Your application has been processed and...'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuSeparator className="m-0" />
                  <DropdownMenuItem className="cursor-pointer justify-center p-2 hover:bg-gray-50">
                    <Link href="/dashboard/messages" className="text-sm text-gray-900 font-medium">
                      View all messages
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Notifications */}
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative cursor-pointer hover:bg-gray-100 rounded-full h-9 w-9 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-0 rounded-lg border border-gray-200 shadow-lg">
                  <DropdownMenuLabel className="bg-gray-50 border-b border-gray-100 p-3 text-gray-900">Notifications</DropdownMenuLabel>
                  <div className="max-h-[300px] overflow-auto py-1">
                    {[1, 2, 3].map((item) => (
                      <DropdownMenuItem key={item} className="cursor-pointer p-3 hover:bg-gray-50 border-b border-gray-50 last:border-0">
                        <div className="flex items-start gap-3">
                          <div className="h-9 w-9 rounded-full flex items-center justify-center bg-gray-100">
                            <DollarSign className="h-4 w-4 text-gray-700" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {item === 1 ? 'Deal Approved' : item === 2 ? 'New Message' : 'Status Update'}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item === 1 
                                ? 'Your deal #DEA-3942 has been approved!' 
                                : item === 2
                                  ? 'Capital Bank has sent you a message'
                                  : 'Deal #DEA-3941 status changed to "In Progress"'
                              }
                            </p>
                            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Profile */}
            <div className="hidden md:flex items-center ml-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm focus:outline-none cursor-pointer hover:opacity-90 transition-opacity">
                    <Avatar className="h-9 w-9 border-2 border-white shadow-sm">
                      <AvatarImage src="https://i.pravatar.cc/150?img=68" />
                      <AvatarFallback className="bg-gray-200 text-gray-700">JD</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-0 rounded-lg border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-3 p-3 border-b border-gray-100 bg-gray-50">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src="https://i.pravatar.cc/150?img=68" />
                      <AvatarFallback className="bg-gray-200 text-gray-700">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">john@brokercompany.com</p>
                    </div>
                  </div>
                  <div className="py-1">
                    <DropdownMenuItem onClick={() => router.push("/profile")} className="cursor-pointer hover:bg-gray-50 py-2 px-3">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Your Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/settings")} className="cursor-pointer hover:bg-gray-50 py-2 px-3">
                      <Settings className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator className="m-0" />
                  <DropdownMenuItem onClick={() => router.push("/sign-in")} className="cursor-pointer hover:bg-gray-50 py-2 px-3 text-gray-900">
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button 
                className="p-2 rounded-md text-gray-500 hover:text-black hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black bg-gray-100"
            >
              Dashboard
            </Link>
            <Link 
              href="/dashboard/deals" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
            >
              My Deals
            </Link>
            <Link 
              href="/dashboard/lenders" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
            >
              Lenders
            </Link>
            <Link 
              href="/dashboard/clients" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
            >
              Clients
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://i.pravatar.cc/150?img=68" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">John Doe</div>
                <div className="text-sm font-medium text-gray-500">john@brokercompany.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <div 
                onClick={() => router.push('/track-commision')}
                className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
              >
                <span className="text-base font-medium text-gray-700">Total Commission</span>
                <span className="font-semibold text-green-600">£{totalCommission.toLocaleString()}</span>
              </div>
              
              <Link 
                href="/dashboard/messages" 
                className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
              >
                <span>Messages</span>
                {unreadMessages > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadMessages}
                  </span>
                )}
              </Link>
              
              <Link 
                href="/dashboard/settings" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100"
              >
                Settings
              </Link>
              
              <Link 
                href="/auth/signout" 
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar2
