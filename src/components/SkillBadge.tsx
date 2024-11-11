import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  return (
    <div className="group glass-effect rounded-lg p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-blue-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out group-hover:scale-x-110 origin-left"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;