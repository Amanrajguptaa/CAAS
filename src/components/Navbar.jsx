
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-20 py-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/webLogo.png" alt="Logo" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white text-lg font-semibold border rounded-[50px] px-28 py-5 gap-5">
          <li>
            <a href="#about" className="hover:text-lime-400">
              About Us
            </a>
          </li>
          <Link to={'/posts'}>
          <li>
            <a href="#posts" className="hover:text-lime-400">
              Posts
            </a>
          </li>
          </Link>
          <Link to={'/carousels'}>
          <li>
            <a href="#carousels" className="hover:text-lime-400">
              Carousels
            </a>
          </li>
          </Link>
          <Link to={'/reels'}>
          <li>
            <a href="#reels" className="hover:text-lime-400">
              Reels
            </a>
          </li>
          </Link>
          <li>
            <a href="#contact" className="hover:text-lime-400">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : null}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="z-[100] md:hidden fixed inset-0 backdrop-blur-sm bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-4 text-white text-lg font-semibold ">
          {/* Close Button inside Menu */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-white z-30"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul>
            <li>
              <a href="#about" onClick={closeMenu} className="hover:text-lime-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#posts" onClick={closeMenu} className="hover:text-lime-400">
                Posts
              </a>
            </li>
            <li>
              <a href="#carousels" onClick={closeMenu} className="hover:text-lime-400">
                Carousels
              </a>
            </li>
            <li>
              <a href="#reels" onClick={closeMenu} className="hover:text-lime-400">
                Reels
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="hover:text-lime-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
