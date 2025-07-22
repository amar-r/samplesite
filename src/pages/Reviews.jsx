import React from 'react';
import reviews from '../data/reviews.json';
import Meta from '../components/Meta';

const Reviews = () => (
  <>
    <Meta title="Reviews" description="Read testimonials from parents who have benefited from our lactation support services." />
    <div>
      <h1 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-8 text-center">From Our Hearts</h1>
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-rose-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-rose-300 dark:border-rose-500">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg">"{review.text}"</p>
            <p className="text-right text-rose-600 dark:text-rose-400 font-semibold mt-4">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Reviews;
