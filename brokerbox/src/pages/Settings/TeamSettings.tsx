"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Users, Plus, Trash2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@brokerbox.com',
		role: 'Admin',
		avatar: 'https://i.pravatar.cc/150?img=68'
	},
	{
		id: 2,
		name: 'Sarah Johnson',
		email: 'sarah@brokerbox.com',
		role: 'Broker',
		avatar: 'https://i.pravatar.cc/150?img=47'
	},
	{
		id: 3,
		name: 'Mike Williams',
		email: 'mike@brokerbox.com',
		role: 'Broker',
		avatar: 'https://i.pravatar.cc/150?img=12'
	}
]

const TeamSettings = () => {
	const [isAddingTeamMember, setIsAddingTeamMember] = useState(false)

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Card className="border border-gray-100 shadow-sm">
				<CardHeader className="bg-white border-b border-gray-100">
					<CardTitle className="flex items-center gap-2 text-gray-900">
						<Users className="h-5 w-5 text-gray-700" />
						Team Management
					</CardTitle>
					<CardDescription className="text-gray-500">
						Add or remove team members and manage their roles
					</CardDescription>
				</CardHeader>
				<CardContent className="p-6">
					<div className="flex justify-end mb-6">
						<Button
							onClick={() => setIsAddingTeamMember(!isAddingTeamMember)}
							className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white"
						>
							<Plus className="h-4 w-4" />
							Add Team Member
						</Button>
					</div>

					{isAddingTeamMember && (
						<motion.div
							initial={{ opacity: 0, y: -20, height: 0 }}
							animate={{ opacity: 1, y: 0, height: 'auto' }}
							transition={{ duration: 0.3 }}
						>
							<Card className="mb-6 border border-dashed border-gray-200 bg-gray-50/50">
								<CardContent className="pt-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="newName" className="text-gray-700">
												Name
											</Label>
											<Input
												id="newName"
												placeholder="Enter name"
												className="bg-white border-gray-200"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="newEmail" className="text-gray-700">
												Email
											</Label>
											<Input
												id="newEmail"
												type="email"
												placeholder="Enter email"
												className="bg-white border-gray-200"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="newRole" className="text-gray-700">
												Role
											</Label>
											<Select>
												<SelectTrigger id="newRole" className="bg-white border-gray-200">
													<SelectValue placeholder="Select role" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="admin">Admin</SelectItem>
													<SelectItem value="broker">Broker</SelectItem>
													<SelectItem value="readonly">Read Only</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>
									<div className="flex justify-end mt-4 space-x-2">
										<Button
											variant="outline"
											onClick={() => setIsAddingTeamMember(false)}
											className="border-gray-200 text-gray-700 hover:bg-gray-50"
										>
											Cancel
										</Button>
										<Button className="bg-gray-900 hover:bg-gray-800 text-white">
											Add Member
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					)}

					<motion.div className="space-y-4">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.id}
								className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.1 + index * 0.1,
									duration: 0.3,
									ease: 'easeOut'
								}}
								whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
							>
								<div className="flex items-center space-x-4">
									<Avatar className="h-12 w-12 border border-gray-100">
										<AvatarImage src={member.avatar} alt={member.name} />
										<AvatarFallback className="bg-gray-200 text-gray-600">
											{member.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium text-gray-900">{member.name}</div>
										<div className="text-sm text-gray-500">{member.email}</div>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<Badge
										variant={member.role === 'Admin' ? 'default' : 'secondary'}
										className={
											member.role === 'Admin'
												? 'bg-gray-900 text-white'
												: 'bg-gray-100 text-gray-700'
										}
									>
										{member.role}
									</Badge>
									<Select defaultValue={member.role.toLowerCase()}>
										<SelectTrigger className="w-[130px] bg-white border-gray-200">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="admin">Admin</SelectItem>
											<SelectItem value="broker">Broker</SelectItem>
											<SelectItem value="readonly">Read Only</SelectItem>
										</SelectContent>
									</Select>
									{member.id !== 1 && (
										<Button
											variant="ghost"
											size="sm"
											className="text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									)}
								</div>
							</motion.div>
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	)
}

export default TeamSettings
