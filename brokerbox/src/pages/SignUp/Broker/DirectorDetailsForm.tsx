"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface DirectorDetails {
  name: string
  address: string
  mobile: string
  email: string
  dateOfBirth: string
  drivingLicenseFront: string
  drivingLicenseRear: string
}

interface DirectorDetailsFormProps {
  directorDetails: DirectorDetails
  handleDirectorChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleNextStep: () => void
  handlePrevStep: () => void
  handleUploadImage?: (file: File, side: 'front' | 'rear') => Promise<string>
  uploadingSide?: null | 'front' | 'rear'
}

const DirectorDetailsForm: React.FC<DirectorDetailsFormProps> = ({
  directorDetails,
  handleDirectorChange,
  handleNextStep,
  handlePrevStep,
  handleUploadImage,
  uploadingSide = null
}) => {

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  const [uploadedUrls, setUploadedUrls] = useState<{ front?: string; rear?: string }>({});

  const onFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    side: 'front' | 'rear'
  ) => {

    const file = e.target.files?.[0];
    if (file && handleUploadImage) {
      try {
        const url = await handleUploadImage(file, side);
        setUploadedUrls((prev) => ({ ...prev, [side]: url }));
        console.log(`File uploaded successfully: ${url}`);
      } catch (err) {
        console.error("File upload failed:", err);
        alert("Failed to upload file. Please try again.");
      }
    }
  };

  return (
    <motion.div
      key="director-details"
      className="p-8"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Director&apos;s Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={directorDetails?.name}
              onChange={handleDirectorChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Director&apos;s Mobile*
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              value={directorDetails?.mobile}
              onChange={handleDirectorChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Director&apos;s Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={directorDetails?.email}
              onChange={handleDirectorChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
              Director&apos;s Date of Birth*
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              required
              value={directorDetails?.dateOfBirth}
              onChange={handleDirectorChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>
        </div>

        <motion.div className="mt-6" variants={itemVariants}>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Director&apos;s Address*
          </label>
          <textarea
            id="address"
            name="address"
            required
            rows={3}
            value={directorDetails?.address}
            onChange={handleDirectorChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </motion.div>

        <motion.div className="mt-6" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="drivingLicenseFront" className="block text-sm font-medium text-gray-700 mb-1">
                Director&apos;s Driving License (Front)*
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-stone-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  {/* Show image if uploaded, else SVG */}
                  {(uploadedUrls.front || directorDetails?.drivingLicenseFront) ? (
                    <Image
                      src={uploadedUrls.front || directorDetails?.drivingLicenseFront}
                      alt="Driving License Front"
                      className="mx-auto h-12 w-20 object-contain rounded shadow"
                      width={80}
                      height={60}
                    />
                  ) : (
                    <svg className="mx-auto h-12 w-12 text-stone-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <div className="flex text-sm text-stone-600">
                    <label htmlFor="drivingLicenseFront" className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-black">
                      <span>Upload a file</span>
                      <input 
                        id="drivingLicenseFront" 
                        name="drivingLicenseFront" 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                        onChange={(e) => onFileChange(e, 'front')}
                        required
                      />
                    </label>
                  </div>
                  <p className="text-xs text-stone-500">
                    {uploadingSide === 'front' ? (
                      <span>Uploading...</span>
                    ) : uploadedUrls.front ? (
                      <a
                        href={uploadedUrls.front}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline inline-block max-w-xs align-middle bg-stone-100 px-2 py-1 rounded"
                        style={{ wordBreak: 'break-all', overflowX: 'auto', display: 'block' }}
                      >
                        {uploadedUrls.front}
                      </a>
                    ) : directorDetails?.drivingLicenseFront ? (
                      <span
                        className="inline-block max-w-xs align-middle bg-stone-100 px-2 py-1 rounded"
                        style={{ wordBreak: 'break-all', overflowX: 'auto', display: 'block' }}
                      >
                        {directorDetails?.drivingLicenseFront}
                      </span>
                    ) : (
                      'PNG, JPG up to 5MB'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="drivingLicenseRear" className="block text-sm font-medium text-gray-700 mb-1">
                Director&apos;s Driving License (Rear)*
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-stone-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  {/* Show image if uploaded, else SVG */}
                  {(uploadedUrls.rear || directorDetails?.drivingLicenseRear) ? (
                    <Image
                      src={uploadedUrls.rear || directorDetails?.drivingLicenseRear}
                      alt="Driving License Rear"
                      className="mx-auto h-12 w-20 object-contain rounded shadow"
                      width={80}
                      height={60}
                    />
                  ) : (
                    <svg className="mx-auto h-12 w-12 text-stone-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <div className="flex text-sm text-stone-600">
                    <label htmlFor="drivingLicenseRear" className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-black">
                      <span>Upload a file</span>
                      <input 
                        id="drivingLicenseRear" 
                        name="drivingLicenseRear" 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                        onChange={(e) => onFileChange(e, 'rear')}
                        required
                      />
                    </label>
                  </div>
                  <p className="text-xs text-stone-500">
                    {uploadingSide === 'rear' ? (
                      <span>Uploading...</span>
                    ) : uploadedUrls.rear ? (
                      <a
                        href={uploadedUrls.rear}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline inline-block max-w-xs align-middle bg-stone-100 px-2 py-1 rounded"
                        style={{ wordBreak: 'break-all', overflowX: 'auto', display: 'block' }}
                      >
                        {uploadedUrls.rear}
                      </a>
                    ) : directorDetails?.drivingLicenseRear ? (
                      <span
                        className="inline-block max-w-xs align-middle bg-stone-100 px-2 py-1 rounded"
                        style={{ wordBreak: 'break-all', overflowX: 'auto', display: 'block' }}
                      >
                        {directorDetails?.drivingLicenseRear}
                      </span>
                    ) : (
                      'PNG, JPG up to 5MB'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            Review Application
            <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default DirectorDetailsForm
