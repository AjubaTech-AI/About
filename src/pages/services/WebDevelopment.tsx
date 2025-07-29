import React from 'react';
import { Code } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const WebDevelopment: React.FC = () => {
  const features = [
    {
      title: 'React & Next.js',
      description: 'Modern frontend frameworks for fast, interactive user experiences'
    },
    {
      title: 'Node.js Backend',
      description: 'Scalable server-side solutions with robust API development'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display on all devices'
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices for maximum search visibility'
    },
    {
      title: 'Performance Focused',
      description: 'Lightning-fast loading times and optimal user experience'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures and data protection'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business goals and technical requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating wireframes, mockups, and user experience flows'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building with modern frameworks and best practices'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deployment, testing, and ongoing support'
    }
  ];

  const faqs = [
    {
      question: 'What technologies do you use for web development?',
      answer: 'We primarily use React, Next.js, Node.js, and TypeScript for modern web applications. We also work with Vue.js, Angular, and other frameworks based on project requirements.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline varies based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the discovery phase.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support.'
    },
    {
      question: 'Can you help with existing website improvements?',
      answer: 'Absolutely! We can audit your current website, identify improvement opportunities, and implement updates to enhance performance, security, and user experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Web Development"
        tagline="Custom web applications built with modern frameworks"
        description="Transform your digital presence with cutting-edge web solutions that drive engagement, conversions, and business growth through innovative technology and exceptional user experiences."
        icon={Code}
        gradient="from-blue-600 to-purple-600"
      />
      
      <ServiceFeatures
        title="Key Features & Capabilities"
        features={features}
        gradient="from-blue-500 to-purple-500"
      />
      
      <ServiceProcess
        title="Our Development Process"
        steps={processSteps}
        gradient="from-blue-500 to-purple-500"
      />
      
      <ServiceFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Build Your Dream Website?"
        description="Let's discuss your project and create a web solution that exceeds your expectations."
        gradient="from-blue-600 to-purple-600"
      />
    </div>
  );
};

export default WebDevelopment;