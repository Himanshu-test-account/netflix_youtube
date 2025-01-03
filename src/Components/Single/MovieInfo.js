import React from 'react';
import { FaDownload, FaPlay, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FlexMovieItems from '../FlexMovieItems';
import Rating from '../Stars';

function MovieInfo({ movie, setModalOpen }) {
 return (
   <div className="w-full xl:h-screen relative text-white">
     <img 
       src={movie?.image} 
       alt={movie?.name}
       className="w-full hidden xl:inline-block h-full object-cover"
     />
     <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
       <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
         <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
           <img 
             src={movie?.titleImage} 
             alt={movie?.name}
             className="w-full h-full object-cover"
           />
         </div>
         <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
           <div className="col-span-3 flex flex-col gap-10">
             <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
               {movie?.name}
             </h1>
             <div className="flex items-center gap-4 font-medium text-dryGray">
               <FlexMovieItems movie={movie} />
             </div>
             <div className="flex gap-2 items-center">
               <Rating value={movie?.rating} />
             </div>
             <p className="text-text text-sm leading-7">{movie?.description}</p>
             <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
               <div className="col-span-1 flex flex-col items-center">
                 <button 
                   onClick={() => setModalOpen(true)}
                   className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20"
                 >
                   <FaShareAlt />
                 </button>
               </div>
               <div className="col-span-2 flex justify-center">
                 <Link 
                   to={`/watch/${movie?.name}`}
                   className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                 >
                   <FaPlay /> Watch
                 </Link>
               </div>
               <div className="col-span-2 flex justify-center">
                 <Link 
                   to={movie?.downloadLink || "#"}
                   className="bg-main transitions hover:bg-subMain flex-rows gap-4 text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                 >
                   <FaDownload /> Download
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default MovieInfo;