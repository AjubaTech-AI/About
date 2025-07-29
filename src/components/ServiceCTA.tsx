import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
  description: string;
  gradient: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ title, description, gradient }) => {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradient}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            Start Your Project
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
            Schedule Consultation
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>hello@ajubatech.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;