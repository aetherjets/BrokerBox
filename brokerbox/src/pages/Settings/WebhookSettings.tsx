"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Copy, Webhook } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const webhookEvents = [
	{ id: 1, name: 'Deal Created', status: 'Active', lastDelivery: '2 hours ago', failures: 0 },
	{ id: 2, name: 'Deal Updated', status: 'Active', lastDelivery: '30 minutes ago', failures: 0 },
	{ id: 3, name: 'Deal Approved', status: 'Active', lastDelivery: '1 day ago', failures: 0 },
	{ id: 4, name: 'Deal Declined', status: 'Active', lastDelivery: '3 days ago', failures: 0 },
	{ id: 5, name: 'Message Received', status: 'Inactive', lastDelivery: 'Never', failures: 0 },
]

const WebhookSettings = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Card className="border border-gray-100 shadow-sm">
				<CardHeader className="bg-white border-b border-gray-100">
					<CardTitle className="flex items-center gap-2 text-gray-900">
						<Webhook className="h-5 w-5 text-gray-700" />
						Webhooks
					</CardTitle>
					<CardDescription className="text-gray-500">
						Configure webhook endpoints to receive real-time updates
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-8 p-6">
					{/* Webhook URL */}
					<div className="space-y-4">
						<h3 className="text-lg font-medium text-gray-900">Webhook URL</h3>
						<p className="text-sm text-gray-500">
							We&apos;ll send POST requests to this URL when events happen
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="webhookUrl" className="text-gray-700">
									Endpoint URL
								</Label>
								<div className="flex space-x-2">
									<Input
										id="webhookUrl"
										defaultValue="https://your-domain.com/api/webhooks/brokerbox"
										className="flex-1 bg-white border-gray-200"
									/>
									<Button
										variant="outline"
										className="border-gray-200 text-gray-700 hover:bg-gray-50"
									>
										Test
									</Button>
								</div>
							</div>
						</div>

						<div>
							<Label htmlFor="secretKey" className="text-gray-700">
								Secret Key
							</Label>
							<div className="relative">
								<Input
									id="secretKey"
									type="password"
									defaultValue="whsk_bB67dF90eE5A33c71D98zQ2p"
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
							<p className="text-xs text-gray-500 mt-1">
								Use this secret to verify webhook signatures
							</p>
						</div>
					</div>

					<Separator className="bg-gray-100" />

					{/* Webhook Events */}
					<div className="space-y-4">
						<h3 className="text-lg font-medium text-gray-900">Webhook Events</h3>
						<p className="text-sm text-gray-500">
							Select which events should trigger webhook notifications
						</p>

						<div className="overflow-auto rounded-lg border border-gray-100">
							<table className="min-w-full divide-y divide-gray-100">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Event
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Last Delivery
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-100">
									{webhookEvents.map((event) => (
										<tr
											key={event.id}
											className="hover:bg-gray-50/50 transition-colors"
										>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
												{event.name}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm">
												<span
													className={`px-2 py-1 rounded-full text-xs font-medium ${
														event.status === 'Active'
															? 'bg-gray-900 text-white'
															: 'bg-gray-100 text-gray-700'
													}`}
												>
													{event.status}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
												{event.lastDelivery}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
												<Switch checked={event.status === 'Active'} />
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default WebhookSettings
