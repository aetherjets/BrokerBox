import React from 'react'
import { motion } from 'framer-motion'
import { LenderDetails, containerVariants, itemVariants } from '@/lib/types';

interface TechnicalIntegrationFormProps {
  lenderDetails: LenderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleArrayChange: (field: keyof LenderDetails, value: string) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  dataPointOptions: string[];
}

const TechnicalIntegrationForm: React.FC<TechnicalIntegrationFormProps> = ({
  lenderDetails,
  handleChange,
  handleArrayChange,
  handleNextStep,
  handlePrevStep,
  dataPointOptions
}) => {
  return (
    <motion.div
      key="technical-integration"
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 
        className="text-xl font-semibold mb-6"
        variants={itemVariants}
      >
        Technical Integration
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        {/* API for instant quote generation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <input
              type="checkbox"
              name="offersApi"
              checked={lenderDetails?.offersApi}
              onChange={handleChange}
              className="h-4 w-4 text-black border-stone-300 rounded mr-2"
            />
            Do you offer an API for instant quote generation?
          </label>
          
          {lenderDetails?.offersApi && (
            <div className="pl-6 mt-4 space-y-4 border-l-2 border-stone-200">
              {/* API Documentation URL */}
              <div>
                <label htmlFor="apiDocUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  API Documentation URL
                </label>
                <input
                  id="apiDocUrl"
                  name="apiDocUrl"
                  type="text"
                  value={lenderDetails?.apiDocUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="https://example.com/api-docs"
                />
              </div>
              
              {/* API Key/Token process */}
              <div>
                <label htmlFor="apiKeyProcess" className="block text-sm font-medium text-gray-700 mb-1">
                  API Key/Token process
                </label>
                <textarea
                  id="apiKeyProcess"
                  name="apiKeyProcess"
                  rows={2}
                  value={lenderDetails?.apiKeyProcess}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="Describe how brokers can obtain API keys or tokens"
                />
              </div>
              
              {/* Supported data points */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supported data points (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {dataPointOptions?.map((point) => (
                    <div key={point} className="flex items-center">
                      <input
                        id={`dataPoint-${point}`}
                        type="checkbox"
                        checked={lenderDetails.supportedDataPoints.includes(point)}
                        onChange={() => handleArrayChange('supportedDataPoints', point)}
                        className="h-4 w-4 text-black border-stone-300 rounded"
                      />
                      <label htmlFor={`dataPoint-${point}`} className="ml-2 block text-sm text-gray-700">
                        {point}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Support for webhooks/callbacks */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <input
              type="checkbox"
              name="supportsWebhooks"
              checked={lenderDetails?.supportsWebhooks}
              onChange={handleChange}
              className="h-4 w-4 text-black border-stone-300 rounded mr-2"
            />
            Do you support webhook/callbacks for status updates?
          </label>
        </motion.div>
        
        {/* Sandbox/test environment */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <input
              type="checkbox"
              name="offersSandbox"
              checked={lenderDetails?.offersSandbox}
              onChange={handleChange}
              className="h-4 w-4 text-black border-stone-300 rounded mr-2"
            />
            Do you offer sandbox/test environment access?
          </label>
        </motion.div>

        <motion.div className="mt-8 flex justify-between" variants={itemVariants}>
          <motion.button
            type="button"
            onClick={handlePrevStep}
            className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-black/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="inline-block mr-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </motion.button>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next Step
            <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default TechnicalIntegrationForm;
