import React, { useState, useEffect } from "react";
import Movies from "../../Data/MovieData";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulate Swiper-like auto-cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Movies.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden"> {/* Reduced the height to h-64 */}
      {Movies.map((movie, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={movie.image}
            alt={movie.name}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center" }}
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-white xl:pl-40 sm:pl-24 pl-4" 
          >
            <h1
              className="xl:text-3xl sm:text-xl text-lg font-bold mb-2" 
            >
              {movie.name}
            </h1>
            <div className="flex gap-3 items-center text-gray-300">
              <FlexMovieItems movie={movie} />
            </div>
            <p className="mt-2 text-xs sm:text-sm">{movie.description}</p> {/* Reduced text size */}
          </div>
          <div className="flex gap-3 items-center"> {/* Reduced gap */}
            <Link
              to={movie.name}
              className="bg-subMain hover:text-main transitions text-white px-6 py-2 rounded font-medium sm:text-xs text-xs"
            >
              Watch
            </Link>
            <button className="bg-white hover:text-subMain transitions text-white px-3 py-2 text-xs bg-opacity-30"> {/* Reduced padding and text size */}
              <FaHeart />
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        {Movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
