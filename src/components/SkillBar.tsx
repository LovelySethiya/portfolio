import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView, level]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-cyan-400 font-bold">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-green-400 rounded-full transition-all duration-1000 ease-out shadow-lg"
          style={{ 
            width: `${animatedLevel}%`,
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;