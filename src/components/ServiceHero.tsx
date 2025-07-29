import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, tagline, description, icon: Icon, gradient }) => {
  return (
    <section className={`py-20 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
          <Icon size={40} className="text-white" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 font-light mb-6 max-w-2xl mx-auto">
          {tagline}
        </p>
        
        <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
          <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;