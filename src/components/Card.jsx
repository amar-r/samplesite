import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default Card; 