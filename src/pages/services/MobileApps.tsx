import React from 'react';
import { Smartphone } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';

const MobileApps: React.FC = () => {
  const features = [
    {
      title: 'React Native',
      description: 'Cross-platform development for iOS and Android with native performance'
    },
    {
      title: 'Flutter',
      description: 'Google\'s UI toolkit for beautiful, natively compiled applications'
    },
    {
      title: 'Native iOS/Android',
      description: 'Platform-specific development for maximum performance and features'
    },
    {
      title: 'App Store Deployment',
      description: 'Complete submission and approval process for both app stores'
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with targeted, personalized messaging'
    },
    {
      title: 'Offline Functionality',
      description: 'Apps that work seamlessly even without internet connection'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy',
      description: 'Market research, user personas, and feature planning'
    },
    {
      step: '02',
      title: 'Design',
      description: 'UI/UX design following platform-specific guidelines'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular testing and feedback'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'App store submission, marketing, and user acquisition'
    }
  ];

  const faqs = [
    {
      question: 'Should I build for iOS, Android, or both?',
      answer: 'We recommend starting with your primary user base. Cross-platform solutions like React Native allow you to target both platforms efficiently while maintaining native performance.'
    },
    {
      question: 'How much does mobile app development cost?',
      answer: 'Costs vary based on complexity, features, and platforms. Simple apps start around $15,000, while complex enterprise apps can range from $50,000-$200,000+.'
    },
    {
      question: 'How long does it take to get approved on app stores?',
      answer: 'Apple App Store typically takes 1-7 days, while Google Play Store usually approves within 2-3 hours. We handle the entire submission process for you.'
    },
    {
      question: 'Do you provide app maintenance after launch?',
      answer: 'Yes, we offer ongoing maintenance including bug fixes, OS updates, feature enhancements, and performance monitoring to keep your app running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Mobile App Development"
        tagline="Native and cross-platform mobile applications"
        description="Create engaging mobile experiences that users love with our expert development team. From concept to app store success, we build apps that drive user engagement and business growth."
        icon={Smartphone}
        gradient="from-green-600 to-blue-600"
      />
      
      <ServiceFeatures
        title="Mobile Development Capabilities"
        features={features}
        gradient="from-green-500 to-blue-500"
      />
      
      <ServiceProcess
        title="Our Mobile Development Process"
        steps={processSteps}
        gradient="from-green-500 to-blue-500"
      />
      
      <ServiceFAQ
        title="Mobile App Development FAQ"
        faqs={faqs}
      />
      
      <ServiceCTA
        title="Ready to Launch Your Mobile App?"
        description="Transform your idea into a successful mobile application that users will love."
        gradient="from-green-600 to-blue-600"
      />
    </div>
  );
};

export default MobileApps;