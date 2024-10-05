import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  return (
    <nav className="w-full px-20 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'}>
          <img src="/webLogo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg font-semibold border rounded-[50px] px-28 py-5 gap-5">
          <li>
            <a
              onClick={() => handleScroll('about')}
              className="hover:text-lime-400 cursor-pointer"
            >
              About Us
            </a>
          </li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
            }
          >
            <li>
              <a href="#posts" className="hover:text-lime-400">
                Posts
              </a>
            </li>
          </NavLink>
          <NavLink
            to="/carousels"
            className={({ isActive }) =>
              `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
            }
          >
            <li>
              <a href="#carousels" className="hover:text-lime-400">
                Carousels
              </a>
            </li>
          </NavLink>
          <NavLink
            to="/reels"
            className={({ isActive }) =>
              `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
            }
          >
            <li>
              <a href="#reels" className="hover:text-lime-400">
                Reels
              </a>
            </li>
          </NavLink>
          <li>
            <a
              onClick={() => handleScroll('contact')}
              className="hover:text-lime-400 cursor-pointer"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
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
        <div className="z-[100] md:hidden fixed inset-0 backdrop-blur-sm bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-4 text-white text-lg font-semibold">
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

          {/* Mobile Links */}
          <ul>
            <li>
              <a
                onClick={() => {
                  handleScroll('about');
                  closeMenu();
                }}
                className="hover:text-lime-400 cursor-pointer"
              >
                About Us
              </a>
            </li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              <li>
                <a href="#posts" className="hover:text-lime-400">
                  Posts
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/carousels"
              className={({ isActive }) =>
                `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              <li>
                <a href="#carousels" className="hover:text-lime-400">
                  Carousels
                </a>
              </li>
            </NavLink>
            <NavLink
              to="/reels"
              className={({ isActive }) =>
                `${isActive ? 'text-[#a7ff00]' : 'text-white'}`
              }
              onClick={closeMenu}
            >
              <li>
                <a href="#reels" className="hover:text-lime-400">
                  Reels
                </a>
              </li>
            </NavLink>
            <li>
              <a
                onClick={() => {
                  handleScroll('contact');
                  closeMenu();
                }}
                className="hover:text-lime-400 cursor-pointer"
              >
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
