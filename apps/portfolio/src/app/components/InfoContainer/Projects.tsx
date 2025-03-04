import React from 'react';
import { useScrollToId } from '../../hooks';

export const Projects: React.FC = () => {
  const { projectsId } = useScrollToId();
  return <div id={projectsId}>Projects</div>;
};
