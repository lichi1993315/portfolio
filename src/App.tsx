import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Briefcase, Code, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Section from './components/Section';

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900 -z-10" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="space-y-8 animate-fade-in relative">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl text-blue-400 font-medium">Hello, I'm</h2>
            <h1 className="text-5xl sm:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                Jesse Chi Li
              </span>
            </h1>
            <h2 className="text-2xl sm:text-4xl text-gray-300 font-light">
              Gaming RL & LLM Agent Researcher
            </h2>
            <h3 className="text-xl text-blue-400">CEO@AgentLive</h3>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Pioneering the future of gaming through LLM Agent technology. Currently focused on developing
            innovative AI-driven gaming experiences that push the boundaries of player interaction and engagement.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" className="glass-effect p-3 rounded-full hover:scale-110 hover:text-blue-400 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="glass-effect p-3 rounded-full hover:scale-110 hover:text-blue-400 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="glass-effect p-3 rounded-full hover:scale-110 hover:text-blue-400 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce glass-effect p-3 rounded-full">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Projects Section */}
      <Section id="projects" icon={Briefcase} title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="LLM Agent Gaming Platform"
            description="Revolutionary gaming platform leveraging LLM agents for dynamic, intelligent NPC interactions"
            image="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800"
            tags={['LLM', 'Reinforcement Learning', 'Game AI']}
            link="https://github.com"
          />
          <ProjectCard 
            title="AgentLive Framework"
            description="Advanced framework for integrating LLM agents into gaming environments with real-time learning capabilities"
            image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
            tags={['AI', 'Gaming', 'Machine Learning']}
            link="https://github.com"
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" icon={Code} title="Skills & Technologies" className="glass-effect">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillBadge name="Reinforcement Learning" level={95} />
          <SkillBadge name="LLM Integration" level={90} />
          <SkillBadge name="Game Development" level={85} />
          <SkillBadge name="Python" level={90} />
          <SkillBadge name="Machine Learning" level={88} />
          <SkillBadge name="Unity/Unreal" level={82} />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" icon={Phone} title="Get in Touch">
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Interested in collaborating on cutting-edge gaming AI projects or discussing the future of LLM agents in gaming? Let's connect!
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all px-6 py-3 rounded-lg font-semibold group"
          >
            Contact Me
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2024 Jesse Chi Li. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;