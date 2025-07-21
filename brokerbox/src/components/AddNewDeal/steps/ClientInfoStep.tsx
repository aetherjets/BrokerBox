import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { User, Building2, Mail, Phone } from 'lucide-react';

interface ClientInfo {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  existingClient: boolean;
}

interface ClientInfoStepProps {
  clientInfo: ClientInfo;
  setClientInfo: React.Dispatch<React.SetStateAction<ClientInfo>>;
}

const ClientInfoStep = ({ clientInfo, setClientInfo }: ClientInfoStepProps) => {
  const inputVariants = {
    focus: { scale: 1.01, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-8 max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <h3 className="text-xl font-medium text-slate-900">Client Information</h3>
        <p className="text-slate-600 mt-2">Please enter your client's contact details</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Client Name Field */}
        <div className="space-y-2">
          <Label 
            htmlFor="clientName" 
            className="text-slate-800 font-medium flex items-center"
          >
            <User className="w-4 h-4 mr-2 text-slate-500" />
            Client Name <span className="text-rose-500 ml-1">*</span>
          </Label>
          <motion.div
            whileFocus="focus"
            whileTap="focus"
            variants={inputVariants}
            className="relative"
          >
            <Input 
              id="clientName" 
              placeholder="Enter client name" 
              value={clientInfo.name}
              onChange={e => setClientInfo({...clientInfo, name: e.target.value})}
              className={cn(
                "bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all",
                "pl-3 h-11"
              )}
              required
            />
          </motion.div>
        </div>
        
        {/* Company Name Field */}
        <div className="space-y-2">
          <Label 
            htmlFor="companyName" 
            className="text-slate-800 font-medium flex items-center"
          >
            <Building2 className="w-4 h-4 mr-2 text-slate-500" />
            Company Name
          </Label>
          <motion.div
            whileFocus="focus"
            whileTap="focus"
            variants={inputVariants}
          >
            <Input 
              id="companyName" 
              placeholder="Enter company name" 
              value={clientInfo.companyName}
              onChange={e => setClientInfo({...clientInfo, companyName: e.target.value})}
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
            />
          </motion.div>
        </div>
        
        {/* Email Field */}
        <div className="space-y-2">
          <Label 
            htmlFor="clientEmail" 
            className="text-slate-800 font-medium flex items-center"
          >
            <Mail className="w-4 h-4 mr-2 text-slate-500" />
            Email Address <span className="text-rose-500 ml-1">*</span>
          </Label>
          <motion.div
            whileFocus="focus"
            whileTap="focus"
            variants={inputVariants}
          >
            <Input 
              id="clientEmail" 
              type="email" 
              placeholder="Enter email address" 
              value={clientInfo.email}
              onChange={e => setClientInfo({...clientInfo, email: e.target.value})}
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              required
            />
          </motion.div>
        </div>
        
        {/* Phone Field */}
        <div className="space-y-2">
          <Label 
            htmlFor="clientPhone" 
            className="text-slate-800 font-medium flex items-center"
          >
            <Phone className="w-4 h-4 mr-2 text-slate-500" />
            Phone Number <span className="text-rose-500 ml-1">*</span>
          </Label>
          <motion.div
            whileFocus="focus"
            whileTap="focus"
            variants={inputVariants}
          >
            <Input 
              id="clientPhone" 
              placeholder="Enter phone number" 
              value={clientInfo.phone}
              onChange={e => setClientInfo({...clientInfo, phone: e.target.value})}
              className="bg-white border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all h-11"
              required
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="flex items-center space-x-3 pt-6 mt-2 border-t border-slate-100"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <Switch 
          id="existingClient" 
          checked={clientInfo.existingClient}
          onCheckedChange={checked => setClientInfo({...clientInfo, existingClient: checked})}
          className="data-[state=checked]:bg-slate-900"
        />
        <Label 
          htmlFor="existingClient" 
          className="text-slate-800 font-medium cursor-pointer"
        >
          This is an existing client
        </Label>
      </motion.div>
      
      <p className="text-xs text-slate-500 mt-8">
        Fields marked with <span className="text-rose-500">*</span> are required
      </p>
    </motion.div>
  );
};

export default ClientInfoStep;
