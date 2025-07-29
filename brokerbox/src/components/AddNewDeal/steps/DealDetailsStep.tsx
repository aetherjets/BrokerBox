import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { 
  PoundSterling, CalendarDays, FileText, ListFilter, 
  Package, Calculator, Clock, BarChart 
} from 'lucide-react';

interface LoanDetails {
  amount: string;
  purpose: string;
  term: string;
  repaymentMethod: string;
}

interface AssetDetails extends LoanDetails {
  assetType: string;
  assetValue: string;
  assetAge: string;
}

interface InvoiceFinanceDetails {
  annualTurnover: string;
  averageInvoiceValue: string;
  invoicesPerMonth: string;
  paymentTerms: string;
}

// Define StateWithStringFields type
// type StateWithStringFields = {
//   [key: string]: string ;
// };

interface DealDetailsStepProps {
  financeType: 'loan' | 'asset' | 'invoice' | '';
  loanDetails: LoanDetails;
  setLoanDetails: React.Dispatch<React.SetStateAction<LoanDetails>>;
  assetDetails: AssetDetails;
  setAssetDetails: React.Dispatch<React.SetStateAction<AssetDetails>>;
  invoiceDetails: InvoiceFinanceDetails;
  setInvoiceDetails: React.Dispatch<React.SetStateAction<InvoiceFinanceDetails>>;
  formatCurrency: (value: string) => string;
  handleCurrencyChange: <T extends LoanDetails | AssetDetails | InvoiceFinanceDetails>(
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<T>>, 
    field: keyof T
  ) => void;
}

const DealDetailsStep = ({ 
  financeType, 
  loanDetails, 
  setLoanDetails,
  assetDetails, 
  setAssetDetails,
  invoiceDetails, 
  setInvoiceDetails,
  handleCurrencyChange
}: DealDetailsStepProps) => {
  // Animation variants for form elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.h3 
          className="text-xl font-medium text-slate-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {financeType === 'loan' ? 'Business Loan Details' : 
           financeType === 'asset' ? 'Asset Finance Details' : 
           'Invoice Finance Details'}
        </motion.h3>
        <motion.p 
          className="text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Enter the financial requirements for this application
        </motion.p>
      </div>
      
      {/* Loan Details Form */}
      {financeType === 'loan' && (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="loanAmount" 
              className="text-slate-800 font-medium flex items-center"
            >
              <PoundSterling className="w-4 h-4 mr-2 text-slate-500" />
              Loan Amount <span className="text-rose-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-slate-50 border-r border-slate-200 rounded-l-md">
                <span className="text-slate-500 font-medium">£</span>
              </div>
              <Input 
                id="loanAmount" 
                className="pl-12 bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
                value={loanDetails.amount}
                onChange={(e) => handleCurrencyChange(e, setLoanDetails, 'amount')}
                required
              />
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="loanTerm" 
              className="text-slate-800 font-medium flex items-center"
            >
              <CalendarDays className="w-4 h-4 mr-2 text-slate-500" />
              Term (Months) <span className="text-rose-500 ml-1">*</span>
            </Label>
            <Input 
              id="loanTerm" 
              type="number"
              min="1"
              max="120" 
              placeholder="e.g. 36" 
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              value={loanDetails.term}
              onChange={(e) => setLoanDetails({...loanDetails, term: e.target.value})}
              required
            />
          </motion.div>
          
          <motion.div className="space-y-2 md:col-span-2" variants={item}>
            <Label 
              htmlFor="loanPurpose" 
              className="text-slate-800 font-medium flex items-center"
            >
              <FileText className="w-4 h-4 mr-2 text-slate-500" />
              Purpose of Loan
            </Label>
            <Textarea 
              id="loanPurpose" 
              placeholder="Briefly describe the purpose of this loan" 
              className="min-h-[100px] bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all resize-none"
              value={loanDetails.purpose}
              onChange={(e) => setLoanDetails({...loanDetails, purpose: e.target.value})}
            />
          </motion.div>
          
          <motion.div className="space-y-3 md:col-span-2" variants={item}>
            <Label 
              className="text-slate-800 font-medium flex items-center"
              htmlFor="repaymentMethod"
            >
              <ListFilter className="w-4 h-4 mr-2 text-slate-500" />
              Repayment Method
            </Label>
            <RadioGroup 
              id="repaymentMethod"
              value={loanDetails.repaymentMethod} 
              onValueChange={(value) => setLoanDetails({...loanDetails, repaymentMethod: value})}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2"
            >
              {[
                { value: "monthly", label: "Monthly" },
                { value: "quarterly", label: "Quarterly" },
                { value: "annually", label: "Annually" }
              ].map(option => (
                <div 
                  key={option.value}
                  className={cn(
                    "flex items-center space-x-2 border rounded-md p-3 transition-all cursor-pointer",
                    loanDetails.repaymentMethod === option.value 
                      ? "border-slate-800 bg-slate-50" 
                      : "border-slate-200 hover:border-slate-300"
                  )}
                  onClick={() => setLoanDetails({...loanDetails, repaymentMethod: option.value})}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="text-slate-900" />
                  <Label htmlFor={option.value} className="cursor-pointer font-medium">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        </motion.div>
      )}
      
      {/* Asset Finance Details Form */}
      {financeType === 'asset' && (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="assetType" 
              className="text-slate-800 font-medium flex items-center"
            >
              <Package className="w-4 h-4 mr-2 text-slate-500" />
              Asset Type <span className="text-rose-500 ml-1">*</span>
            </Label>
            <Select
              value={assetDetails.assetType}
              onValueChange={(value) => setAssetDetails({...assetDetails, assetType: value})}
              required
            >
              <SelectTrigger 
                id="assetType" 
                className="bg-white border-slate-200 focus:ring-1 focus:ring-slate-500 h-11 text-left"
              >
                <SelectValue placeholder="Select asset type" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200">
                <SelectItem value="vehicle">Vehicle</SelectItem>
                <SelectItem value="machinery">Machinery</SelectItem>
                <SelectItem value="equipment">Office Equipment</SelectItem>
                <SelectItem value="technology">Technology/IT</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="assetValue" 
              className="text-slate-800 font-medium flex items-center"
            >
              <Calculator className="w-4 h-4 mr-2 text-slate-500" />
              Asset Value
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-slate-50 border-r border-slate-200 rounded-l-md">
                <span className="text-slate-500 font-medium">£</span>
              </div>
              <Input 
                id="assetValue" 
                className="pl-12 bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
                value={assetDetails.assetValue}
                onChange={(e) => handleCurrencyChange(e, setAssetDetails, 'assetValue')}
              />
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="assetFinanceAmount" 
              className="text-slate-800 font-medium flex items-center"
            >
              <PoundSterling className="w-4 h-4 mr-2 text-slate-500" />
              Finance Amount <span className="text-rose-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-slate-50 border-r border-slate-200 rounded-l-md">
                <span className="text-slate-500 font-medium">£</span>
              </div>
              <Input 
                id="assetFinanceAmount" 
                className="pl-12 bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
                value={assetDetails.amount}
                onChange={(e) => handleCurrencyChange(e, setAssetDetails, 'amount')}
                required
              />
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="assetTerm" 
              className="text-slate-800 font-medium flex items-center"
            >
              <CalendarDays className="w-4 h-4 mr-2 text-slate-500" />
              Term (Months) <span className="text-rose-500 ml-1">*</span>
            </Label>
            <Input 
              id="assetTerm" 
              type="number" 
              min="1"
              max="84"
              placeholder="e.g. 36" 
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              value={assetDetails.term}
              onChange={(e) => setAssetDetails({...assetDetails, term: e.target.value})}
              required
            />
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="assetAge" 
              className="text-slate-800 font-medium flex items-center"
            >
              <Clock className="w-4 h-4 mr-2 text-slate-500" />
              Asset Age (Years)
            </Label>
            <Input 
              id="assetAge" 
              type="number" 
              min="0"
              placeholder="e.g. 2" 
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              value={assetDetails.assetAge}
              onChange={(e) => setAssetDetails({...assetDetails, assetAge: e.target.value})}
            />
          </motion.div>
          
          <motion.div className="space-y-2 md:col-span-2" variants={item}>
            <Label 
              htmlFor="assetPurpose" 
              className="text-slate-800 font-medium flex items-center"
            >
              <FileText className="w-4 h-4 mr-2 text-slate-500" />
              Purpose/Description
            </Label>
            <Textarea 
              id="assetPurpose" 
              placeholder="Briefly describe the asset and its purpose" 
              className="min-h-[100px] bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all resize-none"
              value={assetDetails.purpose}
              onChange={(e) => setAssetDetails({...assetDetails, purpose: e.target.value})}
            />
          </motion.div>
        </motion.div>
      )}
      
      {/* Invoice Finance Details Form */}
      {financeType === 'invoice' && (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="annualTurnover" 
              className="text-slate-800 font-medium flex items-center"
            >
              <BarChart className="w-4 h-4 mr-2 text-slate-500" />
              Annual Turnover <span className="text-rose-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-slate-50 border-r border-slate-200 rounded-l-md">
                <span className="text-slate-500 font-medium">£</span>
              </div>
              <Input 
                id="annualTurnover" 
                className="pl-12 bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
                value={invoiceDetails.annualTurnover}
                onChange={(e) => handleCurrencyChange(e, setInvoiceDetails, 'annualTurnover')}
                required
              />
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="averageInvoiceValue" 
              className="text-slate-800 font-medium flex items-center"
            >
              <PoundSterling className="w-4 h-4 mr-2 text-slate-500" />
              Average Invoice Value <span className="text-rose-500 ml-1">*</span>
            </Label>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center bg-slate-50 border-r border-slate-200 rounded-l-md">
                <span className="text-slate-500 font-medium">£</span>
              </div>
              <Input 
                id="averageInvoiceValue" 
                className="pl-12 bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
                value={invoiceDetails.averageInvoiceValue}
                onChange={(e) => handleCurrencyChange(e, setInvoiceDetails, 'averageInvoiceValue')}
                required
              />
            </div>
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="invoicesPerMonth" 
              className="text-slate-800 font-medium flex items-center"
            >
              <FileText className="w-4 h-4 mr-2 text-slate-500" />
              Invoices per Month
            </Label>
            <Input 
              id="invoicesPerMonth" 
              type="number" 
              min="1"
              placeholder="e.g. 25" 
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              value={invoiceDetails.invoicesPerMonth}
              onChange={(e) => setInvoiceDetails({...invoiceDetails, invoicesPerMonth: e.target.value})}
            />
          </motion.div>
          
          <motion.div className="space-y-2" variants={item}>
            <Label 
              htmlFor="paymentTerms" 
              className="text-slate-800 font-medium flex items-center"
            >
              <Clock className="w-4 h-4 mr-2 text-slate-500" />
              Payment Terms (Days)
            </Label>
            <Input 
              id="paymentTerms" 
              type="number" 
              min="1"
              placeholder="e.g. 30" 
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              value={invoiceDetails.paymentTerms}
              onChange={(e) => setInvoiceDetails({...invoiceDetails, paymentTerms: e.target.value})}
            />
          </motion.div>
        </motion.div>
      )}

      <p className="text-xs text-slate-500 mt-8">
        Fields marked with <span className="text-rose-500">*</span> are required
      </p>
    </motion.div>
  );
};

export default DealDetailsStep;
