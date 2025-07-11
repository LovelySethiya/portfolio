import React from 'react';
import { Award, Cloud, Brain, ShoppingCart } from 'lucide-react';
import GlassCard from './GlassCard';

const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: <ShoppingCart size={32} className="text-cyan-400" />,
      title: 'Master Class on E-commerce App',
      provider: 'WS Cube Tech',
      description: 'Comprehensive training on e-commerce application development'
    },
    {
      icon: <Brain size={32} className="text-green-400" />,
      title: 'Artificial Intelligence Essentials',
      provider: 'EXIN BCS',
      description: 'Foundation knowledge in AI concepts and applications'
    },
    {
      icon: <Cloud size={32} className="text-cyan-400" />,
      title: 'Cloud Foundations',
      provider: 'AWS Academy Graduate',
      description: 'AWS cloud computing fundamentals and best practices'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <GlassCard key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                  {cert.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{cert.provider}</p>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;