"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { CopyIcon, Link, PieChart, Percent, CheckCircle, Clock, BellRing, AlertCircle, Building2, Eye, Share2, PoundSterling } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock lender offers data
const mockLenderOffers = [
	{
		id: "1",
		lender: "Capital Finance",
		logo: "https://placehold.co/200x80?text=Capital+Finance",
		productType: "Business Loan",
		amount: "£150,000",
		term: "48 months",
		rate: "8.5%",
		monthlyPayment: "£3,698",
		totalRepayable: "£177,504",
		apr: "9.2%",
		status: "Available",
		conditions: [
			"3 years trading history required",
			"Personal guarantee needed",
			"All directors must have good credit history"
		],
		fees: {
			arrangement: "2%",
			early_repayment: "3%",
			late_payment: "£25"
		},
		processingTime: "2-3 business days",
		maxBrokerFee: "5%"
	},
	{
		id: "2",
		lender: "Growth Funding",
		logo: "https://placehold.co/200x80?text=Growth+Funding",
		productType: "Asset Finance",
		amount: "£75,000",
		term: "36 months",
		rate: "7.2%",
		monthlyPayment: "£2,320",
		totalRepayable: "£83,520",
		apr: "7.9%",
		status: "Available",
		conditions: [
			"Asset must be less than 5 years old",
			"Business must be profitable for last 12 months",
			"10% deposit required"
		],
		fees: {
			arrangement: "1.5%",
			documentation: "£250",
			early_settlement: "2%"
		},
		processingTime: "3-5 business days",
		maxBrokerFee: "4%"
	},
	{
		id: "3",
		lender: "Invoice Capital",
		logo: "https://placehold.co/200x80?text=Invoice+Capital",
		productType: "Invoice Finance",
		amount: "£100,000",
		term: "Revolving",
		rate: "3.5% + 0.15% daily",
		advance: "90% of invoice value",
		serviceFee: "0.65%",
		status: "Available",
		conditions: [
			"Minimum 12 months trading",
			"UK-based debtors only",
			"Minimum invoice value £5,000"
		],
		fees: {
			setup: "£500",
			monthly: "£250",
			early_termination: "1 month's fee"
		},
		processingTime: "1-2 business days",
		maxBrokerFee: "3.5%"
	},
	{
		id: "4",
		lender: "SME Loans Direct",
		logo: "https://placehold.co/200x80?text=SME+Loans",
		productType: "Business Loan",
		amount: "£200,000",
		term: "60 months",
		rate: "9.2%",
		monthlyPayment: "£4,165",
		totalRepayable: "£249,900",
		apr: "10.1%",
		status: "Available",
		conditions: [
			"Minimum turnover £100k",
			"2 years filed accounts",
			"No CCJs in last 12 months"
		],
		fees: {
			arrangement: "2.5%",
			early_repayment: "2%",
		},
		processingTime: "3-4 business days",
		maxBrokerFee: "4.5%"
	}
];

// Mock pending client quotes
const pendingQuotes = [
	{
		id: "Q1001",
		clientName: "Acme Corporation",
		lender: "Capital Finance",
		product: "Business Loan",
		amount: "£150,000",
		quoteDate: "12 Apr 2023",
		status: "Awaiting Client",
		linkClicks: 3,
		expiryDate: "26 Apr 2023"
	},
	{
		id: "Q1002",
		clientName: "Tech Solutions Ltd",
		lender: "Growth Funding",
		product: "Asset Finance",
		amount: "£75,000",
		quoteDate: "14 Apr 2023",
		status: "Accepted",
		linkClicks: 2,
		expiryDate: "28 Apr 2023"
	}
];

// Mock completed deals
const completedDeals = [
	{
		id: "D2001",
		clientName: "Global Trading Co",
		lender: "Capital Finance",
		product: "Business Loan",
		amount: "£180,000",
		completionDate: "05 Mar 2023",
		brokerFee: "£8,100",
		status: "Paid Out",
		paidDate: "07 Mar 2023"
	},
	{
		id: "D2002",
		clientName: "City Restaurants Group",
		lender: "SME Loans Direct",
		product: "Business Loan",
		amount: "£120,000",
		completionDate: "21 Mar 2023",
		brokerFee: "£5,400",
		status: "Processing",
		paidDate: "-"
	}
];

const LenderPage = () => {
	const [selectedOffer, setSelectedOffer] = useState<any>(null);
	const [brokerFee, setBrokerFee] = useState<number>(2.5);
	const [activeTab, setActiveTab] = useState("available");
	const [isQuoteGenerated, setIsQuoteGenerated] = useState(false);
	const [clientLink, setClientLink] = useState("");
	
	const handleSelectOffer = (offer: any) => {
		setSelectedOffer(offer);
		setBrokerFee(2.5); // Reset to default fee
		setIsQuoteGenerated(false);
	};
	
	const handleGenerateQuote = () => {
		// In a real application, this would call an API to generate a quote
		setIsQuoteGenerated(true);
		// Generate a mock client link
		setClientLink(`https://brokerbox.com/client/quote/${selectedOffer.id}?fee=${brokerFee}`);
	};
	
	const handleCopyLink = () => {
		navigator.clipboard.writeText(clientLink);
		// In a real app, you would show a toast notification
	};

	return (
		<div className="px-4 md:px-6 py-6 max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
				<div>
					<h1 className="text-3xl font-bold text-slate-900">Lender Offers</h1>
					<p className="text-slate-600 mt-1">View and manage available lending options for your clients</p>
				</div>
				
				<div className="mt-4 md:mt-0 flex items-center gap-2">
					<Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
						<CheckCircle size={14} />
						<span>Last updated: Today at 09:15</span>
					</Badge>
				</div>
			</div>
			
			<Tabs defaultValue="available" className="w-full" onValueChange={setActiveTab}>
				<TabsList className="grid grid-cols-3 mb-8">
					<TabsTrigger value="available" className="flex items-center gap-2">
						<Building2 size={16} />
						<span>Available Offers</span>
					</TabsTrigger>
					<TabsTrigger value="pending" className="flex items-center gap-2">
						<Clock size={16} />
						<span>Pending Quotes</span>
					</TabsTrigger>
					<TabsTrigger value="completed" className="flex items-center gap-2">
						<CheckCircle size={16} />
						<span>Completed Deals</span>
					</TabsTrigger>
				</TabsList>
				
				<TabsContent value="available" className="space-y-6">
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
						<div className="xl:col-span-2 space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{mockLenderOffers.map((offer) => (
									<Card 
										key={offer.id} 
										className={`cursor-pointer transition-all hover:border-slate-300 ${selectedOffer?.id === offer.id ? 'border-2 border-slate-900 shadow-md' : 'border-slate-200'}`}
										onClick={() => handleSelectOffer(offer)}
									>
										<CardHeader className="pb-2">
											<div className="flex justify-between items-start">
												<div>
													<Badge className="mb-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800">
														{offer.productType}
													</Badge>
													<CardTitle className="text-lg">{offer.lender}</CardTitle>
												</div>
												<img src={offer.logo} alt={offer.lender} className="h-8 w-auto object-contain" />
											</div>
										</CardHeader>
										<CardContent className="pb-3">
											<div className="grid grid-cols-2 gap-y-2 text-sm">
												<div className="text-slate-500">Amount</div>
												<div className="font-medium text-right">{offer.amount}</div>
												
												<div className="text-slate-500">Term</div>
												<div className="font-medium text-right">{offer.term}</div>
												
												<div className="text-slate-500">Interest Rate</div>
												<div className="font-medium text-right">{offer.rate}</div>
												
												{offer.monthlyPayment && (
													<>
														<div className="text-slate-500">Monthly</div>
														<div className="font-medium text-right">{offer.monthlyPayment}</div>
													</>
												)}
											</div>
											
											<div className="mt-3 pt-3 border-t border-dashed border-slate-200">
												<p className="text-xs text-slate-500 flex items-center gap-1">
													<Clock size={12} />
													Processing time: {offer.processingTime}
												</p>
											</div>
										</CardContent>
										<CardFooter className="pt-0">
											<Button 
												variant="outline" 
												size="sm" 
												className="w-full border-slate-300"
												onClick={(e) => {
													e.stopPropagation();
													handleSelectOffer(offer);
												}}
											>
												<Eye size={14} className="mr-1" />
												View Details
											</Button>
										</CardFooter>
									</Card>
								))}
							</div>
						</div>
						
						<div>
							{selectedOffer ? (
								<Card className="sticky top-4">
									<CardHeader>
										<CardTitle>Selected Offer Details</CardTitle>
										<CardDescription>Review and create client quote</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex flex-col space-y-2">
											<h3 className="font-medium">{selectedOffer.lender} - {selectedOffer.productType}</h3>
											<div className="flex justify-between items-center text-sm">
												<span className="text-slate-500">Amount:</span>
												<span className="font-medium">{selectedOffer.amount}</span>
											</div>
											<div className="flex justify-between items-center text-sm">
												<span className="text-slate-500">Term:</span>
												<span className="font-medium">{selectedOffer.term}</span>
											</div>
											<div className="flex justify-between items-center text-sm">
												<span className="text-slate-500">Interest Rate:</span>
												<span className="font-medium">{selectedOffer.rate}</span>
											</div>
											{selectedOffer.monthlyPayment && (
												<div className="flex justify-between items-center text-sm">
													<span className="text-slate-500">Monthly Payment:</span>
													<span className="font-medium">{selectedOffer.monthlyPayment}</span>
												</div>
											)}
											{selectedOffer.totalRepayable && (
												<div className="flex justify-between items-center text-sm">
													<span className="text-slate-500">Total Repayable:</span>
													<span className="font-medium">{selectedOffer.totalRepayable}</span>
												</div>
											)}
										</div>
										
										<Separator />
										
										<div>
											<h3 className="font-medium mb-2">Lender Conditions</h3>
											<ul className="text-sm space-y-1">
												{selectedOffer.conditions.map((condition: string, index: number) => (
													<li key={index} className="flex items-start gap-2">
														<div className="mt-1">
															<div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
														</div>
														<span className="text-slate-600">{condition}</span>
													</li>
												))}
											</ul>
										</div>
										
										<Separator />
										
										<div>
											<h3 className="font-medium mb-2">Add Broker Fee</h3>
											<div className="flex items-center mb-6">
												<Percent size={16} className="text-slate-500 mr-2" />
												<div className="w-full flex items-center gap-3">
													<Slider
														value={[brokerFee]}
														min={0}
														max={parseFloat(selectedOffer.maxBrokerFee)}
														step={0.1}
														onValueChange={(value) => setBrokerFee(value[0])}
														className="flex-1"
													/>
													<div className="w-16 flex items-center justify-center bg-slate-100 rounded-md py-1">
														<span className="font-medium">{brokerFee}%</span>
													</div>
												</div>
											</div>
											
											<div className="bg-slate-50 p-3 rounded-lg">
												<div className="flex justify-between text-sm font-medium">
													<span>Broker Fee Amount:</span>
													<span>
														£{(parseFloat(selectedOffer.amount.replace('£', '').replace(',', '')) * brokerFee / 100).toLocaleString()}
													</span>
												</div>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										{isQuoteGenerated ? (
											<div className="w-full space-y-3">
												<div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
													<div className="text-sm text-green-800 flex items-center">
														<CheckCircle size={16} className="mr-2 text-green-600" />
														Quote generated successfully
													</div>
													<Badge className="bg-green-600">Ready to share</Badge>
												</div>
												
												<div className="flex gap-2">
													<Input value={clientLink} readOnly className="flex-1 bg-slate-50" />
													<Button size="icon" variant="outline" onClick={handleCopyLink}>
														<CopyIcon size={16} />
													</Button>
												</div>
												
												<Dialog>
													<DialogTrigger asChild>
														<Button className="w-full gap-2 bg-slate-900">
															<Share2 size={16} />
															Share with Client
														</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Share Quote with Client</DialogTitle>
															<DialogDescription>
																Send the quote directly to your client via email or SMS.
															</DialogDescription>
														</DialogHeader>
														<div className="space-y-4 py-4">
															<div className="space-y-2">
																<Label htmlFor="client-email">Client Email</Label>
																<Input id="client-email" placeholder="client@example.com" />
															</div>
															<div className="space-y-2">
																<Label htmlFor="client-phone">Client Phone (optional)</Label>
																<Input id="client-phone" placeholder="+44 7700 900123" />
															</div>
															<div className="space-y-2">
																<Label htmlFor="message">Message (optional)</Label>
																<Input id="message" placeholder="Here's your finance quote as discussed..." />
															</div>
														</div>
														<DialogFooter>
															<Button variant="outline" className="gap-2">
																<Share2 size={16} />
																Send Quote
															</Button>
														</DialogFooter>
													</DialogContent>
												</Dialog>
											</div>
										) : (
											<Button 
												className="w-full bg-slate-900"
												onClick={handleGenerateQuote}
											>
												Generate Client Quote
											</Button>
										)}
									</CardFooter>
								</Card>
							) : (
								<Card>
									<CardHeader>
										<CardTitle>Lender Selection</CardTitle>
										<CardDescription>Select an offer to view details</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-col items-center justify-center py-8 text-center">
										<Building2 size={48} className="text-slate-300 mb-4" />
										<p className="text-slate-500">Select a lender offer from the left to view details and generate a client quote</p>
									</CardContent>
								</Card>
							)}
						</div>
					</div>
				</TabsContent>
				
				<TabsContent value="pending">
					<Card>
						<CardHeader>
							<CardTitle>Pending Client Quotes</CardTitle>
							<CardDescription>Track quotes that have been sent to clients</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>ID</TableHead>
										<TableHead>Client</TableHead>
										<TableHead>Lender</TableHead>
										<TableHead>Product</TableHead>
										<TableHead>Amount</TableHead>
										<TableHead>Date Created</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Action</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{pendingQuotes.map((quote) => (
										<TableRow key={quote.id}>
											<TableCell className="font-medium">{quote.id}</TableCell>
											<TableCell>{quote.clientName}</TableCell>
											<TableCell>{quote.lender}</TableCell>
											<TableCell>{quote.product}</TableCell>
											<TableCell>{quote.amount}</TableCell>
											<TableCell>{quote.quoteDate}</TableCell>
											<TableCell>
												<Badge className={quote.status === "Accepted" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
													{quote.status}
												</Badge>
											</TableCell>
											<TableCell>
												<Button variant="ghost" size="sm" className="h-8 gap-1">
													<Eye size={14} />
													<span>View</span>
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>
				
				<TabsContent value="completed">
					<Card>
						<CardHeader>
							<CardTitle>Completed Deals</CardTitle>
							<CardDescription>View completed deals and commission payouts</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>ID</TableHead>
										<TableHead>Client</TableHead>
										<TableHead>Lender</TableHead>
										<TableHead>Product</TableHead>
										<TableHead>Amount</TableHead>
										<TableHead>Completion Date</TableHead>
										<TableHead>Broker Fee</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{completedDeals.map((deal) => (
										<TableRow key={deal.id}>
											<TableCell className="font-medium">{deal.id}</TableCell>
											<TableCell>{deal.clientName}</TableCell>
											<TableCell>{deal.lender}</TableCell>
											<TableCell>{deal.product}</TableCell>
											<TableCell>{deal.amount}</TableCell>
											<TableCell>{deal.completionDate}</TableCell>
											<TableCell className="font-medium">{deal.brokerFee}</TableCell>
											<TableCell>
												<Badge className={deal.status === "Paid Out" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
													{deal.status}
												</Badge>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default LenderPage
