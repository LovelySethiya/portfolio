import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import GlassCard from './GlassCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">lovelysethia753@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                    <Phone size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">9509512187</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full">
                    <MapPin size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-white font-semibold">Nature Home's Maple Jagatpura, Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/lovely-sethiya-28b52a288" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} className="text-cyan-400" />
                </a>
                <a href="http://github.com/LovelySethiya" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-full hover:scale-110 transition-transform duration-300">
                  <Github size={24} className="text-cyan-400" />
                </a>
              </div>
            </GlassCard>
          </div>
          
          <div>
            <GlassCard>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-green-400 text-black py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;