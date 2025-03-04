import React from 'react';
import { useScrollToId } from '../../hooks';
import backgroundImage from '../../../assets/main-background.jpg';
import { ContactForm } from '../ContactForm';
import { Card, CardContent } from '@mui/material';

export const Contact: React.FC = () => {
  const { contactId } = useScrollToId();
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}
      id={contactId}
    >
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-5xl font-bold">CONTACT</h1>
        <hr className="border-2 border-blue-500 w-1/4 my-4 rounded" />
      </div>
      <div className="description">
        <p className="text-center text-lg my-4">
          Contact me when you feel like it! I will try to answer you as soon as
          possible
        </p>
      </div>
      <Card className="flex justify-center items-center w-1/2 h-1/2 border">
        <CardContent className="w-full h-full">
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};
