import React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Upload, FileText, PoundSterling, Building, Briefcase, FilePlus, Trash2, CheckCircle } from 'lucide-react';

interface SupportingDocuments {
  businessPlan: File | null;
  financialStatements: File | null;
  bankStatements: File | null;
  assetDetails: File | null;
  additionalDocs: File[];
}

interface DocumentsStepProps {
  financeType: 'loan' | 'asset' | 'invoice' | '';
  documents: SupportingDocuments;
  handleFileUpload: (field: keyof SupportingDocuments, file: File | null) => void;
  handleAdditionalDocs: (files: FileList | null) => void;
  removeAdditionalDoc: (index: number) => void;
}

const DocumentsStep = ({ 
  financeType, 
  documents, 
  handleFileUpload, 
  handleAdditionalDocs, 
  removeAdditionalDoc 
}: DocumentsStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-gray-900">Supporting Documents</h3>
        <p className="text-sm text-gray-500 mt-1">Upload required documentation to support this application</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Plan */}
        <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white">
          <Label className="text-gray-700 flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Business Plan
          </Label>
          <div className="mt-2">
            <input
              type="file"
              id="businessPlan"
              className="hidden"
              onChange={(e) => handleFileUpload('businessPlan', e.target.files?.[0] || null)}
            />
            <label htmlFor="businessPlan" className="cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                {documents.businessPlan ? (
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>{documents.businessPlan.name}</span>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <Upload className="h-8 w-8 mx-auto mb-2" />
                    <p>Click to upload</p>
                    <p className="text-xs mt-1">(PDF, DOCX or PPT)</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        
        {/* Financial Statements */}
        <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white">
          <Label className="text-gray-700 flex items-center">
            <PoundSterling className="h-4 w-4 mr-2" />
            Financial Statements
          </Label>
          <div className="mt-2">
            <input
              type="file"
              id="financialStatements"
              className="hidden"
              onChange={(e) => handleFileUpload('financialStatements', e.target.files?.[0] || null)}
            />
            <label htmlFor="financialStatements" className="cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                {documents.financialStatements ? (
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>{documents.financialStatements.name}</span>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <Upload className="h-8 w-8 mx-auto mb-2" />
                    <p>Click to upload</p>
                    <p className="text-xs mt-1">(PDF, XLSX or CSV)</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        
        {/* Bank Statements */}
        <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white">
          <Label className="text-gray-700 flex items-center">
            <Building className="h-4 w-4 mr-2" />
            Bank Statements
          </Label>
          <div className="mt-2">
            <input
              type="file"
              id="bankStatements"
              className="hidden"
              onChange={(e) => handleFileUpload('bankStatements', e.target.files?.[0] || null)}
            />
            <label htmlFor="bankStatements" className="cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                {documents.bankStatements ? (
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>{documents.bankStatements.name}</span>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <Upload className="h-8 w-8 mx-auto mb-2" />
                    <p>Click to upload</p>
                    <p className="text-xs mt-1">(PDF or CSV)</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>
        
        {/* Asset Details (only for Asset Finance) */}
        {financeType === 'asset' && (
          <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white">
            <Label className="text-gray-700 flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              Asset Documentation
            </Label>
            <div className="mt-2">
              <input
                type="file"
                id="assetDetails"
                className="hidden"
                onChange={(e) => handleFileUpload('assetDetails', e.target.files?.[0] || null)}
              />
              <label htmlFor="assetDetails" className="cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                  {documents.assetDetails ? (
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{documents.assetDetails.name}</span>
                    </div>
                  ) : (
                    <div className="text-gray-500">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p>Click to upload</p>
                      <p className="text-xs mt-1">(PDF or Images)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        )}
        
        {/* Additional Documents */}
        <div className="space-y-2 p-4 border border-gray-200 rounded-lg bg-white md:col-span-2">
          <Label className="text-gray-700 flex items-center">
            <FilePlus className="h-4 w-4 mr-2" />
            Additional Documents (Optional)
          </Label>
          <div className="mt-2">
            <input
              type="file"
              id="additionalDocs"
              className="hidden"
              multiple
              onChange={(e) => handleAdditionalDocs(e.target.files)}
            />
            <label htmlFor="additionalDocs" className="cursor-pointer">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors">
                <div className="text-gray-500">
                  <Upload className="h-8 w-8 mx-auto mb-2" />
                  <p>Click to upload additional documents</p>
                  <p className="text-xs mt-1">You can select multiple files</p>
                </div>
              </div>
            </label>
          </div>
          
          {/* Display uploaded additional documents */}
          {documents.additionalDocs.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
              <div className="max-h-32 overflow-auto">
                {documents.additionalDocs.map((file, index) => (
                  <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md mb-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700 truncate max-w-[200px]">{file.name}</span>
                    </div>
                    <button 
                      onClick={() => removeAdditionalDoc(index)}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DocumentsStep;
