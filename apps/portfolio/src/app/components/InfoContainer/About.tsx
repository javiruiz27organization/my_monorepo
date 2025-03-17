import React from 'react';
import { useScrollToId } from '../../hooks';
import { Myskills } from '../MySkills/Myskills';
import { GetToKnowMe } from '../GetToKnowMe';
import { LaboralExperioence } from '../LaboralExperience/LaboralExperioence';

export const About: React.FC = () => {
  const { aboutId } = useScrollToId();
  return (
    <div
      id={aboutId}
      className="flex flex-col items-center justify-center bg-gray-200 h-screen gap-8 p-24"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">ABOUT ME</h1>
        <hr className="border-2 border-blue-500 w-1/4 my-4 rounded" />
      </div>
      <div className="w-1/2">
        <p className="text-center text-lg">
          I am a frontend engineer specialized in development with React and
          TypeScript. Here you can find a brief summary of the technologies I
          know.
        </p>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-1/2">
          <GetToKnowMe />
        </div>
        <div className="w-1/2">
          <Myskills />
        </div>
      </div>
      <div className="h-1/2 text-start w-full">
        <LaboralExperioence />
      </div>
    </div>
  );
};
