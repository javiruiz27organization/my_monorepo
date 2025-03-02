import React from 'react';

import backgroundImage from '../../../assets/main-background.jpg';

export const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}
    >
      Home
    </div>
  );
};
