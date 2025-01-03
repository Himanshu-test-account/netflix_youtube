// MovieRates.js
import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import Titles from '../Titles';
import Rating from '../Stars';
import { Message } from '../UsedInputs';

function MovieRates({ movie }) {
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userRating || !review.trim()) {
      alert('Please provide both a rating and a review');
      return;
    }
    // Submit review logic (e.g., make API call)
  };

  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsStarFill} />
      <div className="mt-8 xl:grid grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* Rating Summary */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center bg-main shadow-lg rounded-lg p-8">
            <h3 className="text-4xl font-bold text-subMain mb-4">
              {movie?.rating || 0}
              <span className="text-2xl">/10</span>
            </h3>
            <Rating value={movie?.rating} />
            <div className="mt-6 text-center">
              <p className="text-sm">{movie?.numberOfReviews || 0} Total Reviews</p>
              <div className="mt-2">
                {movie?.ratings?.map((rate, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Rating value={rate.stars} />
                    <div className="bg-gray-800 rounded-full h-2 w-40">
                      <div
                        className="bg-subMain rounded-full h-2"
                        style={{ width: `${rate.percentage}%` }}
                      />
                    </div>
                    <span>{rate.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleReviewSubmit} className="xl:col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-white font-semibold">Leave a Review</h3>
          <div className="text-sm w-full">
            <div className="flex gap-2 items-center">
              <Rating value={userRating} onChange={setUserRating} />
              <span className="text-subMain font-medium">({userRating}/10)</span>
            </div>
            <Message
              label="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-4 rounded bg-subMain text-white hover:bg-main transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieRates;
