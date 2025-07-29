import React from 'react';
import { Database } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const DataAnalytics: React.FC = () => {
  const features = [
    {
      title: 'Big Data Processing',
      description: 'Handle massive datasets with advanced processing frameworks'
    },
    {
      title: 'Machine Learning',
      description: 'Predictive analytics and AI-powered insights'
    },
    {
      title: 'Real-time Analytics',
      description: 'Live data streaming and instant decision-making capabilities'
    },
    {
      title: 'Custom Dashboards',
      description: 'Interactive visualizations tailored to your business needs'
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly connect multiple data sources and systems'
    },
    {
      title: 'Automated Reporting',
      description: 'Scheduled reports and alerts for key business metrics'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Data Audit',
      description: 'Assess current data sources and quality'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Define KPIs and analytics objectives'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build data pipelines and analytics infrastructure'
    },
    {
      step: '04',
      title: 'Insights',
      description: 'Deliver actionable insights and recommendations'
    }
  ];

  const faqs = [
    {
      question: 'What types of data can you analyze?',
      answer: 'We work with all types of data including customer data, sales data, web analytics, IoT sensor data, social media data, and more. Our solutions handle structured and unstructured data from any source.'
    },
    {
      question: 'How quickly can I see results from data analytics?',
      answer: 'Initial insights can be delivered within 2-4 weeks. Complex machine learning models and predictive analytics typically take 6-12 weeks to develop and validate.'
    },
    {
      question: 'Do you ensure data privacy and compliance?',
      answer: 'Absolutely. We follow strict data governance practices and ensure compliance with GDPR, CCPA, HIPAA, and other relevant regulations based on your industry and location.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in integrating with existing databases, CRMs, ERPs, and other business systems to create a unified analytics platform.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Data Analytics"
        tagline="Transform your data into actionable business insights"
        description="Unlock the power of your data with advanced analytics solutions that drive informed decision-making, optimize operations, and accelerate business growth through intelligent insights."
        icon={Database}
        gradient="from-orange-600 to-red-600"
      />
      
      <ServiceFeatures
        title="Analytics Capabilities"
        features={features}
        gradient="from-orange-500 to-red-500"
      />
      
      <ServiceProcess
        title="Our Analytics Process"
        steps={processSteps}
        gradient="from-orange-500 to-red-500"
      />
      
      <ServiceFAQ
        title="Data Analytics FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Unlock Your Data's Potential?"
        description="Let's transform your data into competitive advantages and actionable insights."
        gradient="from-orange-600 to-red-600"
      />
    </div>
  );
};

export default DataAnalytics;