import { Facebook } from 'lucide-react';
import ObfuscatedEmail from './ObfuscatedEmail';

const Footer = () => {
  return (
    <footer className="bg-rose-50 dark:bg-gray-800 mt-12 border-t dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Latched On Mama. All Rights Reserved.
          </p>
          <div className="flex items-center">
            <ObfuscatedEmail 
              email="kaitlyn@latchedonmama.net" 
              className="text-gray-500 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 mx-2"
            />
            <a href="https://www.facebook.com/latchedonmama" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 mx-2">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
          Disclaimer: The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 