// Header.js

import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Menu items for laptop/desktop */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Login button for laptop/desktop */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>

        {/* Mobile navigation button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
