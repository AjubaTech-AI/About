import React from 'react';
import { Palette } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const UIUXDesign: React.FC = () => {
  const features = [
    {
      title: 'User Research',
      description: 'Deep understanding of user needs and behavior patterns'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes for testing and validation'
    },
    {
      title: 'Design Systems',
      description: 'Scalable design frameworks for consistent experiences'
    },
    {
      title: 'Usability Testing',
      description: 'Data-driven optimization for maximum user satisfaction'
    },
    {
      title: 'Responsive Design',
      description: 'Seamless experiences across all devices and platforms'
    },
    {
      title: 'Accessibility',
      description: 'Inclusive design following WCAG guidelines'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Research',
      description: 'User interviews, surveys, and competitive analysis'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Wireframes, mockups, and interactive prototypes'
    },
    {
      step: '03',
      title: 'Testing',
      description: 'User testing and iterative improvements'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Design handoff and implementation support'
    }
  ];

  const faqs = [
    {
      question: 'What\'s the difference between UI and UX design?',
      answer: 'UX design focuses on the overall user experience and journey, while UI design focuses on the visual interface elements. Both are essential for creating successful digital products.'
    },
    {
      question: 'How long does the design process take?',
      answer: 'Timeline varies by project complexity. Simple designs take 2-4 weeks, while complex applications can take 8-12 weeks including research, testing, and iterations.'
    },
    {
      question: 'Do you redesign existing applications?',
      answer: 'Yes, we specialize in redesigning existing applications to improve user experience, modernize visual design, and increase conversion rates.'
    },
    {
      question: 'Can you work with our development team?',
      answer: 'Absolutely! We collaborate closely with development teams, providing detailed specifications, assets, and ongoing support throughout implementation.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="UI/UX Design"
        tagline="Beautiful, intuitive designs that enhance user experience"
        description="Create exceptional user experiences with our design expertise. From research to implementation, we craft interfaces that users love and businesses succeed with."
        icon={Palette}
        gradient="from-indigo-600 to-purple-600"
      />
      
      <ServiceFeatures
        title="Design Capabilities"
        features={features}
        gradient="from-indigo-500 to-purple-500"
      />
      
      <ServiceProcess
        title="Our Design Process"
        steps={processSteps}
        gradient="from-indigo-500 to-purple-500"
      />
      
      <ServiceFAQ
        title="UI/UX Design FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Transform Your User Experience?"
        description="Let's create designs that delight users and drive business results."
        gradient="from-indigo-600 to-purple-600"
      />
    </div>
  );
};

export default UIUXDesign;