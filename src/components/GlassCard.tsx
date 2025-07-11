import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-500/50 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;