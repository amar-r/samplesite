import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyles = "text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkStyles = "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-gray-800";

  const navLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)} end>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>About</NavLink>
      <NavLink to="/services" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Services</NavLink>
      <NavLink to="/resources" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Resources</NavLink>
      <NavLink to="/reviews" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} onClick={() => setIsOpen(false)}>Reviews</NavLink>
      <NavLink to="/book" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full shadow-md text-sm transition-all ml-2" onClick={() => setIsOpen(false)}>Book a Consultation</NavLink>
    </>
  );

  return (
    <header className="bg-rose-50/50 dark:bg-gray-900/50 shadow-sm backdrop-blur-md sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-heading text-rose-700 dark:text-rose-400">
            <NavLink to="/" className="hover:text-rose-800 dark:hover:text-rose-300">
              Latched On Mama
            </NavLink>
          </div>
          <div className="hidden md:flex items-center">
            {navLinks}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-gray-600 dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              {navLinks}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 