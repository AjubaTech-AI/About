import React from 'react';
import { Shield } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const Cybersecurity: React.FC = () => {
  const features = [
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability analysis'
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking to identify and fix security weaknesses'
    },
    {
      title: 'Compliance',
      description: 'Ensure adherence to industry standards and regulations'
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous threat detection and incident response'
    },
    {
      title: 'Employee Training',
      description: 'Security awareness programs to prevent human errors'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security breaches'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current security posture and vulnerabilities'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive security framework'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy security measures and monitoring systems'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and threat response'
    }
  ];

  const faqs = [
    {
      question: 'How often should we conduct security audits?',
      answer: 'We recommend quarterly security audits for most businesses, with annual comprehensive assessments. High-risk industries may require monthly reviews.'
    },
    {
      question: 'What compliance standards do you support?',
      answer: 'We help with SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, and other industry-specific compliance requirements based on your business needs.'
    },
    {
      question: 'How quickly can you respond to security incidents?',
      answer: 'Our incident response team is available 24/7 with initial response within 15 minutes for critical incidents and full investigation within 2 hours.'
    },
    {
      question: 'Do you provide cybersecurity training for employees?',
      answer: 'Yes, we offer comprehensive security awareness training programs including phishing simulations, security best practices, and ongoing education.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Cybersecurity"
        tagline="Comprehensive security solutions to protect your digital assets"
        description="Safeguard your business with enterprise-grade cybersecurity solutions that protect against evolving threats, ensure compliance, and maintain business continuity."
        icon={Shield}
        gradient="from-teal-600 to-blue-600"
      />
      
      <ServiceFeatures
        title="Security Capabilities"
        features={features}
        gradient="from-teal-500 to-blue-500"
      />
      
      <ServiceProcess
        title="Our Security Process"
        steps={processSteps}
        gradient="from-teal-500 to-blue-500"
      />
      
      <ServiceFAQ
        title="Cybersecurity FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Secure Your Business?"
        description="Protect your digital assets with our comprehensive cybersecurity solutions."
        gradient="from-teal-600 to-blue-600"
      />
    </div>
  );
};

export default Cybersecurity;