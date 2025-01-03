import React from "react";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import FlexMovieItems from "../FlexMovieItems";

function MovieInfo({ movie, setModelOpen, isLoading }) {
    if (isLoading) {
        return (
            <div className="w-full xl:h-screen animate-pulse bg-dry">
                <div className="container px-3 mx-auto 2xl:px-32 py-10 lg:py-20">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div className="h-96 bg-gray-800 rounded-lg"></div>
                        <div className="col-span-2 space-y-8">
                            <div className="h-8 bg-gray-800 w-3/4 rounded"></div>
                            <div className="h-4 bg-gray-800 w-1/2 rounded"></div>
                            <div className="h-32 bg-gray-800 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="w-full xl:h-screen flex items-center justify-center text-white" role="alert">
                Movie information not available
            </div>
        );
    }

    return (
        <section className="w-full xl:h-screen relative text-white" aria-label={movie.name}>
            <img
                src={movie.image}
                alt=""
                className="w-full hidden xl:inline-block h-full object-cover"
                role="presentation"
            />
            <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
                    <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={movie.titleImage}
                            alt={movie.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                        <div className="col-span-3 flex flex-col gap-10">
                            <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                                {movie.name}
                            </h1>
                            <div className="flex items-center gap-4 font-medium text-dryGray">
                                <div className="flex-colo bg-subMain text-xs px-2 py-1" role="status">
                                    HD 4K
                                </div>
                                <FlexMovieItems movie={movie} />
                            </div>
                            <p className="text-text text-sm leading-7">{movie.desc}</p>
                            <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                                <div className="col-span-1 flex-colo border-r border-border">
                                    <button 
                                        onClick={() => setModelOpen(true)} 
                                        className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20 transition hover:bg-opacity-30"
                                        aria-label="Share movie"
                                    >
                                        <FaShareAlt />
                                    </button>
                                </div>
                                <div className="col-span-2 flex-colo font-medium text-sm">
                                    <p>
                                        Language: <span className="ml-2 truncate">{movie.language}</span>
                                    </p>
                                </div>
                                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                                    <Link
                                        to={movie.name}
                                        className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex items-center justify-center gap-4 w-full sm:py-3"
                                    >
                                        <FaPlay className="w-3 h-3" /> 
                                        <span>Watch</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                        <button 
                            className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border border-subMain transition duration-300 md:h-64 h-20 rounded font-medium"
                            aria-label="Download movie"
                        >
                            <div className="flex items-center gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                                Download <FiLogIn className="transform md:rotate-90" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieInfo;