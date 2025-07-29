import React from 'react';
import { Bot } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const AIAgentSolutions: React.FC = () => {
  const features = [
    {
      title: 'Custom AI Chatbots',
      description: 'GPT, Claude, and custom model integration for intelligent conversations'
    },
    {
      title: 'Voice & Text Assistants',
      description: 'Multi-modal AI agents supporting both voice and text interactions'
    },
    {
      title: '24/7 Support Automation',
      description: 'Round-the-clock customer support with intelligent escalation'
    },
    {
      title: 'Lead Generation',
      description: 'AI-powered lead qualification and nurturing systems'
    },
    {
      title: 'Multi-Platform Integration',
      description: 'Deploy across web, mobile, WhatsApp, Slack, and more'
    },
    {
      title: 'Analytics & Insights',
      description: 'Detailed conversation analytics and performance metrics'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Use Case Analysis',
      description: 'Identify optimal AI agent applications for your business'
    },
    {
      step: '02',
      title: 'Agent Design',
      description: 'Create conversation flows and personality design'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build and train AI agents with your specific data'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Launch and monitor AI agents across platforms'
    }
  ];

  const faqs = [
    {
      question: 'What types of AI agents can you build?',
      answer: 'We build customer support chatbots, sales assistants, appointment schedulers, FAQ bots, lead qualification agents, and custom workflow automation agents.'
    },
    {
      question: 'How intelligent are these AI agents?',
      answer: 'Our agents use advanced language models like GPT-4 and Claude, providing human-like conversations with context awareness and learning capabilities.'
    },
    {
      question: 'Can AI agents integrate with our existing systems?',
      answer: 'Yes, we integrate with CRMs, help desk systems, databases, APIs, and other business tools to provide seamless workflow automation.'
    },
    {
      question: 'How do you ensure AI agent accuracy?',
      answer: 'We use extensive training data, implement fallback mechanisms, continuous learning, and human oversight to maintain high accuracy and appropriate responses.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="AI Agent Solutions"
        tagline="Intelligent automation for customer support and workflows"
        description="Transform your business operations with intelligent AI agents that provide 24/7 support, automate workflows, and enhance customer experiences through advanced conversational AI."
        icon={Bot}
        gradient="from-cyan-600 to-blue-600"
      />
      
      <ServiceFeatures
        title="AI Agent Capabilities"
        features={features}
        gradient="from-cyan-500 to-blue-500"
      />
      
      <ServiceProcess
        title="Our AI Development Process"
        steps={processSteps}
        gradient="from-cyan-500 to-blue-500"
      />
      
      <ServiceFAQ
        title="AI Agent Solutions FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Deploy AI Agents?"
        description="Automate your workflows and enhance customer experience with intelligent AI solutions."
        gradient="from-cyan-600 to-blue-600"
      />
    </div>
  );
};

export default AIAgentSolutions;