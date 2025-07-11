import React from 'react';
import { Trophy, Shield, Code } from 'lucide-react';
import GlassCard from './GlassCard';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Code size={32} className="text-cyan-400" />,
      title: 'Hackathon Participation',
      description: 'Active participant in multiple hackathons, showcasing problem-solving skills and innovative thinking'
    },
    {
      icon: <Shield size={32} className="text-green-400" />,
      title: 'Self-Defense Training',
      description: 'Completed self-defense training to build confidence in handling potential threats and personal safety'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <GlassCard key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                  {achievement.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;