import React from 'react';
import resources from '../data/resources.json';
import Meta from '../components/Meta';

const Resources = () => (
  <>
    <Meta title="Resources" description="Find a list of helpful links and resources for breastfeeding and parenting." />
    <div>
      <h1 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-8 text-center">Helpful Resources</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource.id} className="border-b dark:border-gray-700 pb-4 last:border-b-0">
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-semibold text-rose-600 dark:text-rose-400 hover:underline"
              >
                {resource.title}
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default Resources;
