import React from 'react';
import SkillBar from './SkillBar';
import GlassCard from './GlassCard';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Communication Skill', level: 90 },
    { name: 'Leadership Skill', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Student Assessment', level: 75 },
    { name: 'Lesson Planning', level: 78 },
    { name: 'Data Assessment', level: 82 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;