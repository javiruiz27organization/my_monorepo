import React from 'react';

import backgroundImage from '../../../assets/main-background.jpg';
import me from '../../../assets/me.jpeg';
import { MouseScrollAnim } from '../MouseScrollAnim/MouseScrollAnim';

export const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-full py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}
    >
      <div className="flex flex-row justify-center items-center w-full h-full gap-4">
        <div className="flex flex-col justify-center items-center h-full gap-4 w-1/2">
          <h1 className="text-5xl">Hello! I´m Javier Ruiz</h1>
          <p className="text-2xl w-1/2 text-center">
            I´m a frontend engenieer with a passion for learning and creating
            things.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={me}
            alt="me"
            className="w-[640px] h-[640px] rounded-full object-cover"
          />
        </div>
      </div>
      <MouseScrollAnim />
    </div>
  );
};
