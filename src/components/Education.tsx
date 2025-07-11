import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                <GraduationCap size={48} className="text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Bachelor of Technology</h3>
            <p className="text-xl text-cyan-400 mb-4">Vivekanand Global University</p>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={20} />
                <span>Graduated: 2023</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award size={20} />
                <span>CGPA: 8.63</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-2 text-gray-300">
              <MapPin size={20} />
              <span>Nature Home's Maple Jagatpura, Jaipur, Rajasthan</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Education;