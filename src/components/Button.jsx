const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
  >
    {children}
  </button>
);

export default Button; 