// MovieCast.js
import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import Titles from '../Titles';

function MovieCast({ movie }) {
  return (
    <div className="my-12">
      <Titles title="Cast" Icon={FaUserFriends} />
      
      {/* Movie Description & Trailer Link */}
      <div className="mt-8">
        <div className="bg-dry p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">Description</h3>
          <p className="text-gray-400 mt-2">{movie?.description}</p>
          
          {movie?.trailerLink && (
            <div className="mt-4">
              <h4 className="text-lg text-white font-semibold">Trailer</h4>
              <a 
                href={movie?.trailerLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-subMain hover:text-main transition"
              >
                Watch Trailer
              </a>
            </div>
          )}

          {movie?.categories && movie.categories.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg text-white font-semibold">Categories</h4>
              <ul className="flex gap-4 mt-2">
                {movie.categories.map((category, index) => (
                  <li key={index} className="bg-gray-800 text-subMain px-4 py-2 rounded-full">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Cast Members */}
      <div className="mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {movie?.cast?.map((cast, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-4 bg-dry hover:scale-95 transition-transform duration-300"
            >
              <div className="relative h-60 overflow-hidden rounded-lg">
                <img
                  src={cast.profilePath || '/images/user.png'}
                  alt={cast.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/user.png'; // fallback image
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-white text-center text-lg">
                  {cast.name}
                </h3>
                {cast.role && (
                  <p className="text-sm text-gray-400 text-center mt-1">
                    {cast.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCast;
