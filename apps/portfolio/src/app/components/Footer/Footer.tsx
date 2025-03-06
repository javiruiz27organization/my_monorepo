import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 My Portfolio. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="a" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="a" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a href="a" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
