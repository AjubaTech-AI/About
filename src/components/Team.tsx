import React from 'react';
import { Github, Linkedin, Twitter, Award, Users, Coffee } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in tech industry',
      specialties: ['Strategic Planning', 'Business Development', 'Innovation'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect passionate about scalable solutions',
      specialties: ['System Architecture', 'Cloud Computing', 'DevOps'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user-centered experiences',
      specialties: ['UI/UX Design', 'Design Systems', 'User Research'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'David Park',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Backend specialist with expertise in microservices',
      specialties: ['Node.js', 'Python', 'Database Design'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Lisa Thompson',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product strategist driving innovation and growth',
      specialties: ['Product Strategy', 'Market Analysis', 'Agile'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'James Wilson',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mobile app expert creating seamless user experiences',
      specialties: ['React Native', 'Flutter', 'iOS/Android'],
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  const stats = [
    { icon: Users, number: '25+', label: 'Team Members' },
    { icon: Award, number: '100+', label: 'Certifications' },
    { icon: Coffee, number: '∞', label: 'Coffee Consumed' }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of passionate professionals brings together expertise from various 
            fields to deliver exceptional results.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span 
                      key={specIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a 
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-400 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Team</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation 
            and excellence. Come be part of something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 transform hover:scale-105">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;