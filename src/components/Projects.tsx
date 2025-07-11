import React from 'react';
import { Code, Users, BookOpen } from 'lucide-react';
import GlassCard from './GlassCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Projects
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                  <Code size={48} className="text-cyan-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">IIT Bombay Group Research Project</h3>
              
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Users size={20} />
                  <span>Collaborative Research</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <BookOpen size={20} />
                  <span>R&D Project</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Participated in group R&D project involving professors and students. 
                Improved technical proficiency and collaborative research skills through 
                hands-on experience and academic collaboration.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;