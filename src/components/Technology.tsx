import React from 'react';
import { Cpu, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Technology: React.FC = () => {
  const techStacks = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Angular'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cpu,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'],
      color: 'from-teal-500 to-blue-500',
      bgColor: 'from-teal-50 to-blue-50'
    },
    {
      category: 'AI & ML',
      icon: Zap,
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  const achievements = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '< 100ms', label: 'Average Response Time' },
    { number: '50+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and industry best practices to deliver 
            robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${stack.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stack.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stack.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {stack.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-colors duration-300 text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Performance Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and user experience' },
              { step: '03', title: 'Development', description: 'Building with best practices and testing' },
              { step: '04', title: 'Deployment', description: 'Launch and ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;