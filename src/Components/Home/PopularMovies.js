import React from 'react';
import Titles from "../Titles";
import Movie from "../Movie";
import Movies from "../../Data/MovieData";
import { BsCollectionFill } from 'react-icons/bs';

function PopularMovies() {
  return (
    <div className="my-16">
      {/* Center-align the title and icon */}
      <Titles title="Popular Movies" Icon={BsCollectionFill} className="text-center" />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {
          Movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default PopularMovies;
