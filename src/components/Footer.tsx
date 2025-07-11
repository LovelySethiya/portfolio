import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-cyan-500/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-red-500" /> and <Code size={16} className="text-cyan-400" /> by Lovely Sethiya © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;