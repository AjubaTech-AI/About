import React from 'react';
import { Cloud } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const CloudSolutions: React.FC = () => {
  const features = [
    {
      title: 'AWS/Azure/GCP',
      description: 'Multi-cloud expertise across all major cloud platforms'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code'
    },
    {
      title: 'Auto-scaling',
      description: 'Dynamic resource allocation based on demand'
    },
    {
      title: 'Load Balancing',
      description: 'Distribute traffic efficiently across multiple servers'
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Real-time performance monitoring and alerting systems'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance certifications'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current infrastructure and cloud readiness'
    },
    {
      step: '02',
      title: 'Architecture',
      description: 'Design scalable, secure cloud architecture'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Seamless migration with minimal downtime'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Ongoing monitoring and cost optimization'
    }
  ];

  const faqs = [
    {
      question: 'Which cloud platform is best for my business?',
      answer: 'The choice depends on your specific needs, existing infrastructure, and budget. We help you evaluate AWS, Azure, and Google Cloud to find the best fit for your requirements.'
    },
    {
      question: 'How much can I save by moving to the cloud?',
      answer: 'Most businesses see 20-50% cost savings through cloud migration, plus benefits like improved scalability, security, and disaster recovery capabilities.'
    },
    {
      question: 'How long does cloud migration take?',
      answer: 'Timeline varies based on complexity. Simple migrations take 2-4 weeks, while enterprise migrations can take 3-6 months. We provide detailed migration plans with minimal downtime.'
    },
    {
      question: 'Do you provide ongoing cloud management?',
      answer: 'Yes, we offer comprehensive managed cloud services including monitoring, optimization, security updates, and 24/7 support to ensure peak performance.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Cloud Solutions"
        tagline="Scalable cloud infrastructure and deployment solutions"
        description="Accelerate your digital transformation with robust cloud solutions that provide scalability, security, and cost-efficiency. From migration to management, we've got you covered."
        icon={Cloud}
        gradient="from-purple-600 to-pink-600"
      />
      
      <ServiceFeatures
        title="Cloud Infrastructure Capabilities"
        features={features}
        gradient="from-purple-500 to-pink-500"
      />
      
      <ServiceProcess
        title="Our Cloud Migration Process"
        steps={processSteps}
        gradient="from-purple-500 to-pink-500"
      />
      
      <ServiceFAQ
        title="Cloud Solutions FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Move to the Cloud?"
        description="Let's discuss your cloud strategy and build a solution that scales with your business."
        gradient="from-purple-600 to-pink-600"
      />
    </div>
  );
};

export default CloudSolutions;