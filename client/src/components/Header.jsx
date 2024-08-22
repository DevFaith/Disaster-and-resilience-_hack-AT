import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Community Resilience</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/community" className="hover:underline">Community</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
