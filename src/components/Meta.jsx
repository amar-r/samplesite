import React from 'react';

const Meta = ({ title, description, keywords }) => {
  const siteTitle = "Latched On Mama";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Compassionate & Professional Lactation Support'} />
      <meta name="keywords" content={keywords || 'lactation consultant, breastfeeding, support, prenatal, in-home, virtual'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Compassionate & Professional Lactation Support'} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default Meta; 