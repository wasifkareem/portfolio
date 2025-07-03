"use client"

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Accordian({ company, companyLogo, role, tenure, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl  bg-white">
      <div className=" border-b border-gray-200 overflow-hidden ">
        {/* Header */}
        <button
          onClick={toggleAccordion}
          className="w-full flex items-center justify-between px-6 p-4 bg-white transition-colors duration-200  "
        >
          <div className="flex items-center space-x-4">
            {/* Company Logo */}
            <div className="w-12 h-12 shadow-sm border flex items-center justify-center">
             <Image src={companyLogo}/>
            </div>
            
            {/* Company Info */}
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-medium text-gray-900">{company}</h3>
                <ChevronUp 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
              <p className="text-gray-600">{role}</p>
            </div>
          </div>
          
          {/* Date Range */}
          <div className="text-gray-500 text-sm">
            {tenure}
          </div>
        </button>

        {/* Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 space-y-4">
           
            
            {/* Achievement 1 */}
           { skills.map((skill)=>(
            <div className="flex space-x-3">
              <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-gray-700 leading-relaxed">
               {skill}
              </div>
            </div>
           )) }

          </div>
        </div>
      </div>
    </div>
  );
}