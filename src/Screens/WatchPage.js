import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Movies from "../Data/MovieData";
import Layout from '../Layout/Layout';
import { BiArrowBack } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaPlay, FaHeart } from 'react-icons/fa';

function WatchPage() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const [play, setPlay] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!movie) {
    return (
      <Layout>
        <div className="container mx-auto text-center py-12">
          <h2 className="text-xl font-bold">Movie Not Found</h2>
          <p className="text-sm text-gray-500">We couldn't find the movie you're looking for.</p>
        </div>
      </Layout>
    );
  }

  const toggleFavorite = () => {
    setIsFavorited((prevState) => !prevState);
    // Optionally, save this change to local storage or a global state
  };

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/images/${movie?.name}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
            <BiArrowBack /> {movie?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button
              onClick={toggleFavorite}
              className={`bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-2 text-sm ${isFavorited ? 'text-red-500' : ''}`}>
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-white transitions text-white rounded px-8 font-medium py-2 text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>

        {/* Watch video */}
        {play ? (
          <video controls className="w-full h-full rounded">
            <source src={movie?.videoUrl || 'images/video-devices-in.m4v'} type="video/mp4" title={movie?.name} />
          </video>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex-colo">
              <button
                onClick={() => setPlay(true)}
                className="bg-submain text-subMain flex-colo border border-subMain rounded-full w-20 h-20 px-8 font-medium py-8 text-xl">
                <FaPlay />
              </button>
            </div>
            <img
              src={movie?.image ? `/images/movies/${movie.image}` : 'images/movies/img_2.png'}
              alt={movie?.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default WatchPage;
