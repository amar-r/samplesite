import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const linkStyles = "text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkStyles = "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-gray-800";

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
            <NavLink to="/" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`} end>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Services</NavLink>
            <NavLink to="/resources" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Resources</NavLink>
            <NavLink to="/reviews" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Reviews</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}>Contact</NavLink>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 