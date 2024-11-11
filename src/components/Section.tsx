import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, icon: Icon, children, className = '' }: SectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`} id={id}>
      <div className="flex items-center gap-4 mb-12 animate-fade-in">
        <div className="glass-effect p-3 rounded-full">
          <Icon size={24} className="text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="animate-slide-up">
        {children}
      </div>
    </section>
  );
};

export default Section;