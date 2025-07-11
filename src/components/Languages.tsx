import React from 'react';
import { Globe } from 'lucide-react';
import GlassCard from './GlassCard';

const Languages: React.FC = () => {
  const languages = ['English', 'Hindi', 'Nepali'];

  return (
    <section id="languages" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Languages
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                <Globe size={48} className="text-cyan-400" />
              </div>
            </div>
            
            <div className="flex justify-center gap-8 flex-wrap">
              {languages.map((language, index) => (
                <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-green-400/20 px-6 py-3 rounded-full border border-cyan-500/30">
                  <span className="text-white font-semibold text-lg">{language}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Languages;