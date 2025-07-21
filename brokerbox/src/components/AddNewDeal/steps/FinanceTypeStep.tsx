import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PoundSterling, FileText, Briefcase, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FinanceTypeStepProps {
  financeType: 'loan' | 'asset' | 'invoice' | '';
  setFinanceType: (type: 'loan' | 'asset' | 'invoice' | '') => void;
}

const FinanceTypeStep = ({ financeType, setFinanceType }: FinanceTypeStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full space-y-8"
    >
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-xl font-medium text-slate-900 mb-2">Choose Finance Type</h3>
        <p className="text-slate-600">Select the type of finance your client needs for their business</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Business Loan Option */}
        <Card 
          className={cn(
            "relative border transition-all cursor-pointer",
            financeType === 'loan' 
              ? "border-slate-900 ring-1 ring-slate-900" 
              : "border-slate-200 hover:border-slate-300"
          )}
          onClick={() => setFinanceType('loan')}
        >
          <CardContent className="p-6">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto",
              financeType === 'loan' ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
            )}>
              <PoundSterling className="h-6 w-6" />
            </div>
            <h4 className="text-center text-base font-medium text-slate-900 mb-2">Business Loan</h4>
            <p className="text-center text-sm text-slate-600">Secured and unsecured loans with competitive rates</p>
            
            {financeType === 'loan' && (
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-900"></div>
            )}
          </CardContent>
        </Card>
        
        {/* Asset Finance Option */}
        <Card 
          className={cn(
            "relative border transition-all cursor-pointer",
            financeType === 'asset' 
              ? "border-slate-900 ring-1 ring-slate-900" 
              : "border-slate-200 hover:border-slate-300"
          )}
          onClick={() => setFinanceType('asset')}
        >
          <CardContent className="p-6">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto",
              financeType === 'asset' ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
            )}>
              <Briefcase className="h-6 w-6" />
            </div>
            <h4 className="text-center text-base font-medium text-slate-900 mb-2">Asset Finance</h4>
            <p className="text-center text-sm text-slate-600">Finance for equipment, vehicles and business assets</p>
            
            {financeType === 'asset' && (
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-900"></div>
            )}
          </CardContent>
        </Card>
        
        {/* Invoice Finance Option */}
        <Card 
          className={cn(
            "relative border transition-all cursor-pointer",
            financeType === 'invoice' 
              ? "border-slate-900 ring-1 ring-slate-900" 
              : "border-slate-200 hover:border-slate-300"
          )}
          onClick={() => setFinanceType('invoice')}
        >
          <CardContent className="p-6">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto",
              financeType === 'invoice' ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
            )}>
              <FileText className="h-6 w-6" />
            </div>
            <h4 className="text-center text-base font-medium text-slate-900 mb-2">Invoice Finance</h4>
            <p className="text-center text-sm text-slate-600">Release cash from unpaid invoices to improve cash flow</p>
            
            {financeType === 'invoice' && (
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-900"></div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {financeType && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 border border-slate-100 rounded-lg p-4"
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-slate-400 mt-0.5" />
            </div>
            <div>
              <h5 className="text-sm font-medium text-slate-900 mb-1">About {financeType === 'loan' ? 'Business Loans' : financeType === 'asset' ? 'Asset Finance' : 'Invoice Finance'}</h5>
              <p className="text-sm text-slate-600">
                {financeType === 'loan' 
                  ? 'Business loans provide a lump sum that is paid back with interest over a set period. They can be secured against assets or unsecured based on the business creditworthiness.'
                  : financeType === 'asset'
                  ? 'Asset finance helps businesses obtain equipment, vehicles or machinery without paying the full cost upfront. The asset itself typically serves as security for the finance.'
                  : 'Invoice finance allows businesses to borrow money against the amounts due from customers, helping to improve cash flow and releasing funds that would otherwise be tied up in unpaid invoices.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FinanceTypeStep;
