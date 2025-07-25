import React from 'react';
import { Download, Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Lovely Sethiya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold">
              Tech Student & Developer
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I seek challenging opportunities where I can fully use my skills for the success of the organization.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2">
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="tel:9509512187" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Phone size={18} />
              9509512187
            </a>
            <a href="mailto:lovelysethia753@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail size={18} />
              lovelysethia753@gmail.com
            </a>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/lovely-sethiya-28b52a288" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <Linkedin size={24} className="text-cyan-400" />
            </a>
            <a href="http://github.com/LovelySethiya" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <Github size={24} className="text-cyan-400" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-green-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-green-400/20 flex items-center justify-center">
                  <img 
                  src={profileImg}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 40%' }}
                  />
                  </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
