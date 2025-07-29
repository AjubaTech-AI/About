import React from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Palette, Bot, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      summary: 'Modern, scalable web solutions that drive business growth',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      summary: 'Engaging mobile experiences that users love',
      color: 'from-green-500 to-emerald-500',
      link: '/services/mobile-apps'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      summary: 'Secure, scalable cloud infrastructure and migration',
      color: 'from-purple-500 to-pink-500',
      link: '/services/cloud-solutions'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights.',
      summary: 'Turn data into competitive advantages and insights',
      color: 'from-orange-500 to-red-500',
      link: '/services/data-analytics'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      summary: 'Enterprise-grade security and compliance solutions',
      color: 'from-teal-500 to-blue-500',
      link: '/services/cybersecurity'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      summary: 'User-centered design that drives engagement and conversions',
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ui-ux-design'
    },
    {
      icon: Bot,
      title: 'AI Agent Solutions',
      description: 'Intelligent automation for customer support and workflows.',
      summary: '24/7 AI-powered support and workflow automation',
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-agent-solutions'
    },
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Full-stack AI enablement for business workflows.',
      summary: 'Comprehensive AI strategy and implementation services',
      color: 'from-violet-500 to-purple-500',
      link: '/services/ai-implementation'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven digital growth for modern brands.',
      summary: 'SEO, paid ads, and content strategy that drives results',
      color: 'from-pink-500 to-rose-500',
      link: '/services/digital-marketing'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="text-blue-600">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-gray-700 font-medium mb-6">
                {service.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link to={service.link} className={`block w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Schedule a free consultation to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;