import React from 'react';
import { useScrollToId } from '../../hooks';

export const Projects: React.FC = () => {
  const { projectsId } = useScrollToId();
  return (
    <div
      id={projectsId}
      className="p-6 bg-gray-100 rounded-lg shadow-md h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <ul className="space-y-4 w-1/2">
        <li className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-700">Description of project 1.</p>
        </li>
        <li className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-700">Description of project 2.</p>
        </li>
        <li className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Project 3</h3>
          <p className="text-gray-700">Description of project 3.</p>
        </li>
      </ul>
    </div>
  );
};
