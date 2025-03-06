import React from 'react';
import { useScrollToId } from '../../hooks';

export const HeaderRoutes = () => {
  const { scrollToId, aboutId, contactId, projectsId } = useScrollToId();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoToAbout = () => scrollToId(aboutId);

  const handleGoToProjects = () => scrollToId(projectsId);

  const handleGoToContact = () => scrollToId(contactId);

  return (
    <ul className="flex gap-12">
      <li onClick={handleRefresh} className="cursor-pointer">
        Home
      </li>
      <li onClick={handleGoToAbout} className="cursor-pointer">
        About
      </li>
      <li onClick={handleGoToProjects} className="cursor-pointer">
        Projects
      </li>
      <li onClick={handleGoToContact} className="cursor-pointer">
        Contact
      </li>
    </ul>
  );
};
