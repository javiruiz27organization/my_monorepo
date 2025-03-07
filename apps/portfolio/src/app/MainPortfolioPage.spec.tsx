import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainPortfolioPage } from './MainPortfolioPage';

describe('MainPortfolioPage', () => {
  it('should render the main portfolio page', () => {
    render(<MainPortfolioPage />);
    const mainPage = screen.getByTestId('main-portfolio-page');
    expect(mainPage).toBeDefined();
  });
});
