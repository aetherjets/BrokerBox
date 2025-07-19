import React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Info, CheckCircle } from 'lucide-react';

interface ClientInfo {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  existingClient: boolean;
}

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

interface SupportingDocuments {
  businessPlan: File | null;
  financialStatements: File | null;
  bankStatements: File | null;
  assetDetails: File | null;
  additionalDocs: File[];
}

interface ReviewSubmitStepProps {
  financeType: 'loan' | 'asset' | 'invoice' | '';
  clientInfo: ClientInfo;
  loanDetails: LoanDetails;
  assetDetails: AssetDetails;
  invoiceDetails: InvoiceFinanceDetails;
  documents: SupportingDocuments;
  agreeTerms: boolean;
  setAgreeTerms: (value: boolean) => void;
}

const ReviewSubmitStep = ({ 
  financeType, 
  clientInfo, 
  loanDetails, 
  assetDetails, 
  invoiceDetails,
  documents,
  agreeTerms,
  setAgreeTerms
}: ReviewSubmitStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-gray-900">Review & Submit</h3>
        <p className="text-sm text-gray-500 mt-1">Please review the details before submitting</p>
      </div>
      
      <div className="space-y-6">
        {/* Review sections for client info, finance details, and documents */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Client Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Client Name</p>
              <p className="font-medium text-gray-900">{clientInfo.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Company Name</p>
              <p className="font-medium text-gray-900">{clientInfo.companyName || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-gray-500">Email Address</p>
              <p className="font-medium text-gray-900">{clientInfo.email}</p>
            </div>
            <div>
              <p className="text-gray-500">Phone Number</p>
              <p className="font-medium text-gray-900">{clientInfo.phone}</p>
            </div>
          </div>
        </div>
        
        {/* Finance Details Review */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">
            {financeType === 'loan' ? 'Loan Details' : 
             financeType === 'asset' ? 'Asset Finance Details' : 
             'Invoice Finance Details'}
          </h4>
          
          {financeType === 'loan' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Loan Amount</p>
                <p className="font-medium text-gray-900">£{loanDetails.amount || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Term</p>
                <p className="font-medium text-gray-900">{loanDetails.term} months</p>
              </div>
              <div>
                <p className="text-gray-500">Repayment Method</p>
                <p className="font-medium text-gray-900 capitalize">{loanDetails.repaymentMethod}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500">Purpose</p>
                <p className="font-medium text-gray-900">{loanDetails.purpose || 'Not provided'}</p>
              </div>
            </div>
          )}
          
          {financeType === 'asset' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Asset Type</p>
                <p className="font-medium text-gray-900 capitalize">{assetDetails.assetType}</p>
              </div>
              <div>
                <p className="text-gray-500">Asset Value</p>
                <p className="font-medium text-gray-900">£{assetDetails.assetValue || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Finance Amount</p>
                <p className="font-medium text-gray-900">£{assetDetails.amount || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Term</p>
                <p className="font-medium text-gray-900">{assetDetails.term} months</p>
              </div>
            </div>
          )}
          
          {financeType === 'invoice' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Annual Turnover</p>
                <p className="font-medium text-gray-900">£{invoiceDetails.annualTurnover || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Average Invoice Value</p>
                <p className="font-medium text-gray-900">£{invoiceDetails.averageInvoiceValue || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Invoices per Month</p>
                <p className="font-medium text-gray-900">{invoiceDetails.invoicesPerMonth || '0'}</p>
              </div>
              <div>
                <p className="text-gray-500">Payment Terms</p>
                <p className="font-medium text-gray-900">{invoiceDetails.paymentTerms || '0'} days</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Document Review */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Uploaded Documents</h4>
          <div className="space-y-2 text-sm">
            {documents.businessPlan && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Business Plan: {documents.businessPlan.name}</span>
              </div>
            )}
            {documents.financialStatements && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Financial Statements: {documents.financialStatements.name}</span>
              </div>
            )}
            {documents.bankStatements && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Bank Statements: {documents.bankStatements.name}</span>
              </div>
            )}
            {financeType === 'asset' && documents.assetDetails && (
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Asset Documentation: {documents.assetDetails.name}</span>
              </div>
            )}
            {documents.additionalDocs.length > 0 && (
              <div>
                <p className="mb-1">Additional Documents:</p>
                <ul className="list-disc pl-5">
                  {documents.additionalDocs.map((doc, index) => (
                    <li key={index}>{doc.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2 p-4 border border-yellow-100 rounded-md bg-yellow-50 text-yellow-800">
            <Info className="h-5 w-5" />
            <p className="text-sm">This deal will be submitted to our panel of lenders for review.</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="agreeTerms" 
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
            />
            <Label htmlFor="agreeTerms" className="text-sm text-gray-700">
              I confirm that I have permission to share this client's information and the details provided are accurate.
            </Label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewSubmitStep;
