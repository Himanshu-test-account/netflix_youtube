import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
// import { BitTime } from 'react-icons/bi'

function FlexMovieItems({ movie }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div>
        <FaRegCalendarAlt className="text-sm" />
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
      <div>
        <FaRegCalendarAlt className="text-sm" />
        {/* <BitTime className="text-subMain w-2 h-3" /> */}
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
    </>
  );
}

export default FlexMovieItems;
