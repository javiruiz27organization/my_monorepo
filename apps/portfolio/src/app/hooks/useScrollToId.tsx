export const useScrollToId = () => {
  const aboutId = 'about';
  const projectsId = 'projects';
  const contactId = 'contact';

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    aboutId,
    projectsId,
    contactId,
  };
};
