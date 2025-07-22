import React from 'react';
import Meta from '../components/Meta';

const About = () => (
  <>
    <Meta title="About Me" description="Learn more about Kaitlyn, an IBCLC and Registered Nurse dedicated to supporting families." />
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h1 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-6 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img 
            src="/images/kaitlyn-bio.jpg"
            alt="Kaitlyn" 
            className="rounded-full shadow-lg mx-auto w-48 h-48 object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-semibold font-heading text-rose-600 dark:text-rose-400 mb-2">Kaitlyn K.</h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">IBCLC, Registered Nurse</p>
          <p className="mb-4">
            I am a passionate and dedicated International Board Certified Lactation Consultant (IBCLC) and Registered Nurse with a mission to support families in their breastfeeding journey. My goal is to provide evidence-based, compassionate, and personalized care to help you meet your feeding goals.
          </p>
          <p>
            With a background in nursing, I bring a wealth of medical knowledge and a holistic approach to lactation consulting. I believe every family deserves to feel empowered and confident, and I am here to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default About;
