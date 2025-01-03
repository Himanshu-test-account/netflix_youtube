import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaBirthdayCake, FaFilm, FaUser } from 'react-icons/fa';
import { castData } from '../../Data/CategoriesData'; // Import the Avengers cast data

const CastDetail = () => {
  const { castId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Find the cast member by ID
    const selectedCast = castData.find(castMember => castMember.id === parseInt(castId));
    setCast(selectedCast);
    setIsLoading(false);
  }, [castId]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!cast) {
    return <div className="text-center">Cast information not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-6">
        <img
          src={cast.profilePath || '/images/fallback-avatar.png'}
          alt={cast.name}
          className="w-32 h-32 object-cover rounded-full"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">{cast.name}</h1>
          <div className="flex items-center text-gray-500">
            <FaBirthdayCake className="mr-2" />
            <span>Born: {cast.birthday}</span>
          </div>
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Biography</h2>
        <p className="text-gray-700">{cast.biography}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Filmography</h2>
        <ul className="list-disc ml-6">
          {cast.filmography.map((movie, index) => (
            <li key={index} className="text-gray-600">
              <FaFilm className="inline mr-2" />
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">More Details</h2>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            <FaUser className="inline mr-2" />
            Follow
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md">
            Add to Favorites
          </button>
        </div>
      </section>
    </div>
  );
};

export default CastDetail;
