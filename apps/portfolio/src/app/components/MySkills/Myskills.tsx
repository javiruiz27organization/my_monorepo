import React from 'react';

export const Myskills = () => {
  const mySkills: string[] = [
    'React',
    'Typescript',
    'HTML',
    'CSS',
    'Javascript',
    'Jest',
    'React Testing Library',
    'Vitest',
    'React Hooks',
    'Material UI',
    'Tailwind CSS',
    'NodeJS',
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">My Skills</h3>
      <ul className="flex flex-row gap-2 h-auto flex-wrap">
        {mySkills.map((skill, index) => (
          <li key={index} className="bg-gray-300 p-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
