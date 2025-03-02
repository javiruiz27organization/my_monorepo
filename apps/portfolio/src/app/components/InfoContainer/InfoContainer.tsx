import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const InfoContainer: React.FC = () => {
  const components = [Home, About, Projects, Contact];
  return components.map((Component, index) => (
    <div className="h-screen" key={`info-container-item-${index}`}>
      <Component key={index} />
    </div>
  ));
};
