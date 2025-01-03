import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Movies from "../Data/MovieData";
import Layout from "../Layout/Layout";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieRates from '../Components/Single/MovieRates';
import MovieCast from '../Components/Single/MovieCast';
import Titles from '../Components/Titles';
import { BsCollectionFill } from 'react-icons/bs';
import ShareMovieModal from '../Components/Modals/ShareModal';
import Movie from '../Components/Movie'; // Import the regular Movie component for related movies

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);

  // Get related movies (excluding current movie)
  const relatedMovies = Movies
    .filter(m => m.category === movie?.category && m.name !== movie?.name)
    .slice(0, 4);

  if (!movie) {
    return (
      <Layout>
        <div className="container mx-auto px-2 my-24 flex-colo">
          <div className="w-full flex-colo gap-6">
            <h1 className="text-2xl font-bold">Movie Not Found</h1>
            <p className="text-border text-sm">
              The movie you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Share Modal */}
      <ShareMovieModal 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        movie={movie}
      />

      {/* Movie Details */}
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      
      <div className="container mx-auto min-h-screen px-2 my-6">
        {/* Cast Section */}
        <MovieCast movie={movie} />
        
        {/* Ratings Section */}
        <MovieRates movie={movie} />
        
        {/* Related Movies Section */}
        <div className='my-16'>
          <Titles 
            title="Related Movies" 
            Icon={BsCollectionFill}
          />
          {relatedMovies.length > 0 ? (
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {relatedMovies.map((movie, index) => (
                <Movie 
                  key={index} 
                  movie={movie}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-border text-sm mt-6">
              No related movies found
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SingleMovie;