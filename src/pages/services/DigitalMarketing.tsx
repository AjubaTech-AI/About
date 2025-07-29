import React from 'react';
import { TrendingUp } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const DigitalMarketing: React.FC = () => {
  const features = [
    {
      title: 'SEO Campaigns',
      description: 'Comprehensive SEO strategy and site audits for organic growth'
    },
    {
      title: 'Paid Advertising',
      description: 'Google Ads, Meta, and Instagram advertising campaigns'
    },
    {
      title: 'Content Strategy',
      description: 'Engaging content creation and strategic content planning'
    },
    {
      title: 'Social Media Marketing',
      description: 'Multi-platform social media management and growth'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and ROI analysis'
    },
    {
      title: 'A/B Testing',
      description: 'Continuous optimization through data-driven testing'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Audit',
      description: 'Comprehensive analysis of current marketing performance'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop data-driven marketing strategy and roadmap'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Launch campaigns across multiple channels'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and performance improvement'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'SEO results typically take 3-6 months, while paid advertising can show results within days. Social media growth usually takes 2-3 months for significant traction.'
    },
    {
      question: 'What\'s included in your SEO services?',
      answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, and monthly performance reporting.'
    },
    {
      question: 'Do you manage social media accounts?',
      answer: 'Yes, we provide full social media management including content creation, posting schedules, community management, and paid social advertising.'
    },
    {
      question: 'How do you measure marketing success?',
      answer: 'We track KPIs like website traffic, conversion rates, cost per acquisition, return on ad spend (ROAS), and overall ROI with detailed monthly reports.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Digital Marketing"
        tagline="Data-driven digital growth for modern brands"
        description="Accelerate your business growth with comprehensive digital marketing strategies that drive traffic, generate leads, and maximize ROI across all digital channels."
        icon={TrendingUp}
        gradient="from-pink-600 to-rose-600"
      />
      
      <ServiceFeatures
        title="Digital Marketing Capabilities"
        features={features}
        gradient="from-pink-500 to-rose-500"
      />
      
      <ServiceProcess
        title="Our Marketing Process"
        steps={processSteps}
        gradient="from-pink-500 to-rose-500"
      />
      
      <ServiceFAQ
        title="Digital Marketing FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Accelerate Your Growth?"
        description="Let's create a digital marketing strategy that drives real business results."
        gradient="from-pink-600 to-rose-600"
      />
    </div>
  );
};

export default DigitalMarketing;