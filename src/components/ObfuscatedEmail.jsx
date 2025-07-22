import React, { useState, useEffect } from 'react';

const ObfuscatedEmail = ({ email, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render on the server or initial client load
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
};

export default ObfuscatedEmail; 