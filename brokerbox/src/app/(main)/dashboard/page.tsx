"use client"

import React, { useState } from 'react'
import { DollarSign, FileText, Inbox } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
import AddNewDealForm from '@/components/AddNewDeal/AddNewDealForm'
import { useRouter } from 'next/navigation'


const dealStatusData = [
  { name: 'In Progress', value: 12, color: '#FFB020' },
  { name: 'Approved', value: 8, color: '#14B8A6' },
  { name: 'Declined', value: 3, color: '#F04438' },
  { name: 'Awaiting Response', value: 5, color: '#6366F1' },
];

const commissionData = [
  { name: 'Jan', commission: 4500 },
  { name: 'Feb', commission: 6700 },
  { name: 'Mar', commission: 5900 },
  { name: 'Apr', commission: 8100 },
  { name: 'May', commission: 7200 },
  { name: 'Jun', commission: 9300 },
  { name: 'Jul', commission: 8500 },
];

// const productPerformanceData = [
//   { name: 'Secured Loans', approval: 76 },
//   { name: 'Unsecured Loans', approval: 68 },
//   { name: 'Asset Finance', approval: 82 },
//   { name: 'Invoice Finance', approval: 74 },
//   { name: 'Property Finance', approval: 65 },
//   { name: 'Merchant Cash Advance', approval: 70 },
// ];

const recentDeals = [
  {
    id: 'DEA-3942',
    clientName: 'Smithson Enterprises',
    amount: '£75,000',
    product: 'Asset Finance',
    status: 'Approved',
    statusColor: 'bg-green-100 text-green-800',
    date: '2023-08-15',
    lender: 'Capital Bank',
    commission: '£ 2,250',
    messages: 3,
  },
  {
    id: 'DEA-3941',
    clientName: 'Green Garden Landscaping',
    amount: '£45,000',
    product: 'Unsecured Loan',
    status: 'In Progress',
    statusColor: 'bg-yellow-100 text-yellow-800',
    date: '2023-08-14',
    lender: 'Phoenix Finance',
    commission: '£ 1,350',
    messages: 2,
  },
  {
    id: 'DEA-3940',
    clientName: 'Urban Architects Ltd',
    amount: '£120,000',
    product: 'Property Finance',
    status: 'Awaiting Response',
    statusColor: 'bg-blue-100 text-blue-800',
    date: '2023-08-12',
    lender: 'Heritage Funding',
    commission: '£ 3,600',
    messages: 0,
  },
  {
    id: 'DEA-3939',
    clientName: 'Prime Logistics Co.',
    amount: '£55,000',
    product: 'Invoice Finance',
    status: 'Declined',
    statusColor: 'bg-red-100 text-red-800',
    date: '2023-08-10',
    lender: 'Vista Capital',
    commission: '£ 0',
    messages: 1,
  },
];

const DashboardPage = () => {
  const [dateRange, setDateRange] = useState('thisMonth');
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);
  const [activeStatusFilter, setActiveStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const totalDeals = dealStatusData.reduce((acc, curr) => acc + curr.value, 0);
  const approvedDeals = dealStatusData.find(d => d.name === 'Approved')?.value || 0;
  const conversionRate = Math.round((approvedDeals / totalDeals) * 100);
  const totalCommission = commissionData.reduce((acc, curr) => acc + curr.commission, 0);
  const avgCommissionPct = 3.2;
  const totalFundingVolume = 1250000;
  const avgDealSize = Math.round(totalFundingVolume / totalDeals);

  const route = useRouter();
  
  const filteredDeals = activeStatusFilter === 'all' 
    ? recentDeals 
    : recentDeals.filter(deal => 
        deal.status.toLowerCase().replace(' ', '') === activeStatusFilter.toLowerCase());
  
  const handleStatusFilter = (status: string) => {
    setIsLoading(true);
    setActiveStatusFilter(status);
    setTimeout(() => setIsLoading(false), 500);
  };
  
  const [showDealForm, setShowDealForm] = useState(false);

  return (
    <div className="p-6 space-y-8 bg-white max-w-[1600px] mx-auto">
      {/* Dashboard header with date selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Broker Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Overview and performance for {dateRange === 'thisMonth' ? 'this month' : 'selected period'}</p>
        </div>
        <div className="flex gap-3 items-center">
          <select 
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-900"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            <option value="thisYear">This Year</option>
            <option value="allTime">All Time</option>
          </select>
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={() => setShowDealForm(true)}
          >
            <span className="flex items-center gap-1">
              <span className="text-sm">New Deal</span>
              <span className="text-xs">+</span>
            </span>
          </Button>
        </div>
      </div>
      
      {/* Performance snapshot cards - refined for even cleaner look */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border border-gray-100 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gray-50/80 p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Total Deals</p>
                <div className="p-1.5 bg-white rounded-md border border-gray-100">
                  <FileText className="h-4 w-4 text-gray-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{totalDeals}</h3>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="text-gray-900">+12%</span> from last month
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-gray-600">Conversion Rate</p>
                  <p className="font-bold text-gray-900 mt-0.5">{conversionRate}%</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Avg. Deal Size</p>
                  <p className="font-bold text-gray-900 mt-0.5">£{(avgDealSize).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-100 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Total Commission</p>
                <div className="p-1.5 bg-gray-200 rounded-md">
                  <DollarSign className="h-4 w-4 text-gray-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">£{totalCommission.toLocaleString()}</h3>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="text-green-600">↑ 8.5%</span> from last month
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-gray-700">Avg. Commission</p>
                  <p className="font-bold text-gray-900 mt-0.5">{avgCommissionPct}%</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Commission YTD</p>
                  <p className="font-bold text-gray-900 mt-0.5">£{(totalCommission * 1.8).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Deal Status Overview */}
        <Card className="border border-gray-100 shadow-sm col-span-1 lg:col-span-2 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gray-50 p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Deal Status Overview</p>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {dealStatusData.map((status) => (
                <div 
                  key={status.name}
                  className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                  onClick={() => handleStatusFilter(status.name.replace(' ', ''))}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: status.color }}></div>
                    <p className="text-xs font-medium text-gray-500">{status.name}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{status.value}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((status.value / totalDeals) * 100)}% of total
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Deals table with filters */}
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="border-b border-gray-100 bg-white p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-gray-900 text-lg">Deal Management</CardTitle>
              <CardDescription>
                {activeStatusFilter === 'all' ? 'All deals' : `Filtered by: ${activeStatusFilter}`} 
                ({filteredDeals.length})
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className={`border-gray-200 ${activeStatusFilter === 'all' ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => handleStatusFilter('all')}
              >
                All Deals
              </Button>
              {dealStatusData.map((status) => (
                <Button 
                  key={status.name}
                  variant="outline" 
                  size="sm"
                  className={`border-gray-200 ${activeStatusFilter === status.name.replace(' ', '') ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => handleStatusFilter(status.name.replace(' ', ''))}
                >
                  {status.name} ({status.value})
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : filteredDeals.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <FileText className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">No deals found</h3>
              <p className="text-gray-500 max-w-md mt-2">
                There are no deals matching your current filter criteria. Try changing your filters or create a new deal.
              </p>
              <Button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white">
                <Link href="/dashboard/submit-deal">+ Create New Deal</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 font-medium text-gray-500">Deal ID</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Client</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Amount</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Product</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Lender</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Commission</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Date</th>
                    <th className="px-6 py-3 font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDeals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{deal.id}</td>
                      <td className="px-6 py-4 text-gray-700">{deal.clientName}</td>
                      <td className="px-6 py-4 text-gray-700">{deal.amount}</td>
                      <td className="px-6 py-4 text-gray-700">{deal.product}</td>
                      <td className="px-6 py-4 text-gray-700">{deal.lender}</td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          deal.status === 'Approved' 
                            ? 'bg-gray-100 text-gray-900' 
                            : deal.status === 'In Progress'
                            ? 'bg-gray-100 text-gray-700'
                            : deal.status === 'Declined'
                            ? 'bg-gray-50 text-gray-600'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {deal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">{deal.commission}</td>
                      <td className="px-6 py-4 text-gray-700">{new Date(deal.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => route.push("/lender")}
                            className="border-gray-200 text-gray-700 hover:bg-gray-50"
                          >
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="relative border-gray-200 text-gray-700 hover:bg-gray-50"
                            onClick={() => setSelectedDeal(deal.id === selectedDeal ? null : deal.id)}
                          >
                            <Inbox className="h-4 w-4" />
                            {deal.messages > 0 && (
                              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                {deal.messages}
                              </span>
                            )}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
        <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredDeals.length}</span> deals
          </p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-200 text-gray-700"
              disabled
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-200 text-gray-700"
              disabled
            >
              Next
            </Button>
          </div>
        </div>
      </Card>

      {/* Message panel - shown when a deal is selected */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 p-4">
              <CardTitle className="text-gray-900">Messages for {selectedDeal}</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-500 hover:text-gray-900"
                onClick={() => setSelectedDeal(null)}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent className="h-96 flex flex-col p-4">
              <div className="flex-grow overflow-y-auto mb-4 space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs ml-auto">
                  <p className="text-sm text-gray-800">Can you please provide additional information about the client&apos;s credit history?</p>
                  <p className="text-xs text-gray-500 mt-1">You - 2 days ago</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">I&apos;ve attached the requested documents. Let me know if you need anything else.</p>
                  <p className="text-xs text-gray-500 mt-1">Capital Bank - Yesterday</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-grow px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* New Deal Form Modal */}
      {showDealForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl mx-auto">
            <AddNewDealForm onClose={() => setShowDealForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
