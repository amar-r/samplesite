import React from 'react';
import { InlineWidget } from 'react-calendly';
import Meta from '../components/Meta';

const Booking = () => {
  return (
    <>
      <Meta 
        title="Book a Consultation" 
        description="Schedule a consultation at your convenience. Choose a time that works best for you and let's connect." 
      />
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-4 text-center">
          Book Your Consultation
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Choose a time that works best for you from the calendar below. I look forward to connecting with you!
        </p>
        <div className="calendly-container min-h-[700px]">
          <InlineWidget url="https://calendly.com/calendy-mail-box/30min" />
        </div>
      </div>
    </>
  );
};

export default Booking; 