import React from 'react';
import { CheckCircle } from 'lucide-react'; 

const Features = () => {
  return (
    <section id="features" className="px-10 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
           <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000" 
            alt="Interior Design" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          We Create Your Home <br /> More Aesthetic
        </h2>
        <p className="text-gray-500 mb-8">
          Furniture power is a software as services for multipurpose business management system.
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-teal-100 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-teal-700 font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Valuation Services</h4>
              <p className="text-sm text-gray-500">Sometimes features require a short description. This can be detailed description.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-teal-100 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-teal-700 font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Development of Furniture Models</h4>
              <p className="text-sm text-gray-500">Sometimes features require a short description. This can be detailed description.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;