import React from 'react';
import { Header } from './components/Header/Header';
import { InfoContainer } from './components/InfoContainer/InfoContainer';

export const MainPortfolioPage = () => {
  return (
    <div data-testid="main-portfolio-page" className="overflow-hidden">
      <Header />
      <InfoContainer />
    </div>
  );
};
