import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  return (
    <div className="group glass-effect rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 glass-effect rounded-full text-sm text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
        >
          View Project <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;