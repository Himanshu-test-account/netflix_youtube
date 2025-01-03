import React, { useState } from "react";
import Layout from "./../Layout/Layout";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
import Movies from "../Data/MovieData";
import { CgSpinner } from "react-icons/cg";

function MoviesPage() {
  const maxPage = 3;
  const [page, setPage] = useState(maxPage);

  // Handle the "Load More" action
  const HandleLoadingMore = () => {
    setPage(prevPage => prevPage + maxPage);
  };

  // Check if there are more movies to load
  const hasMoreMovies = Movies.length > page;

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies?.length}</span> items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0, page)?.map((movie) => (
            <Movie key={movie.id} movie={movie} /> 
          ))}
        </div>

        {/* Conditional rendering of the 'Load More' button */}
        {hasMoreMovies && (
          <div className="w-full flex-colo md:my-20 my-10">
            <button
              onClick={HandleLoadingMore}
              className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-subMain"
            >
              Loading More <CgSpinner className="animate-spin" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MoviesPage;
