import { Button } from '@mui/material';
import { useScrollToId } from '../../hooks';

export const GetToKnowMe = () => {
  const { scrollToId, contactId } = useScrollToId();

  const handleGoToContact = () => scrollToId(contactId);

  return (
    <div className="flex flex-col gap-4 pr-24">
      <h3 className="text-2xl font-bold">Get to know me!</h3>
      <p>
        Hello! I am Javier, software engineer and frontend developer specialized
        in the use of React with TypeScript. I am currently part of the
        MASORANGE Spain group development team. I have always considered myself
        a very curious person, wanting to learn and face new challenges. I
        studied Computer Software Engineering in Seville, and since the last
        year of my degree I have been working within large companies in the IT
        sector. If you need anything ... contact me !!
      </p>
      <div className="flex justify-center mt-8 mb-8">
        <Button variant="contained" color="primary" onClick={handleGoToContact}>
          Contact!
        </Button>
      </div>
    </div>
  );
};
