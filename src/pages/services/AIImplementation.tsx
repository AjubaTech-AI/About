import React from 'react';
import { Brain } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const AIImplementation: React.FC = () => {
  const features = [
    {
      title: 'AI Strategy Development',
      description: 'Comprehensive AI roadmap aligned with business objectives'
    },
    {
      title: 'LLM Integration',
      description: 'Large language model implementation for various use cases'
    },
    {
      title: 'Document Automation',
      description: 'AI-powered document processing and data extraction'
    },
    {
      title: 'Custom Model Training',
      description: 'Tailored AI models trained on your specific data'
    },
    {
      title: 'Workflow Automation',
      description: 'End-to-end process automation with AI intelligence'
    },
    {
      title: 'Performance Analytics',
      description: 'Continuous monitoring and optimization of AI systems'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Identify AI opportunities and use case prioritization'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive AI implementation roadmap'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy AI solutions with proper integration'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Monitor performance and continuously improve AI systems'
    }
  ];

  const faqs = [
    {
      question: 'How do you identify the best AI use cases for our business?',
      answer: 'We conduct thorough business process analysis, identify repetitive tasks, data-rich processes, and areas where AI can provide significant ROI and efficiency gains.'
    },
    {
      question: 'What types of AI models do you work with?',
      answer: 'We work with various AI models including GPT, Claude, custom neural networks, computer vision models, natural language processing, and machine learning algorithms.'
    },
    {
      question: 'How long does AI implementation take?',
      answer: 'Timeline varies by complexity. Simple AI integrations take 4-8 weeks, while comprehensive AI transformations can take 3-6 months with phased rollouts.'
    },
    {
      question: 'Do you provide AI training for our team?',
      answer: 'Yes, we offer comprehensive AI training programs covering AI fundamentals, tool usage, best practices, and ongoing support to ensure successful adoption.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="AI Implementation"
        tagline="Full-stack AI enablement for business workflows"
        description="Transform your business operations with comprehensive AI implementation services. From strategy to deployment, we help you harness the power of artificial intelligence for competitive advantage."
        icon={Brain}
        gradient="from-violet-600 to-purple-600"
      />
      
      <ServiceFeatures
        title="AI Implementation Capabilities"
        features={features}
        gradient="from-violet-500 to-purple-500"
      />
      
      <ServiceProcess
        title="Our AI Implementation Process"
        steps={processSteps}
        gradient="from-violet-500 to-purple-500"
      />
      
      <ServiceFAQ
        title="AI Implementation FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Implement AI in Your Business?"
        description="Let's discuss how AI can transform your operations and drive innovation."
        gradient="from-violet-600 to-purple-600"
      />
    </div>
  );
};

export default AIImplementation;