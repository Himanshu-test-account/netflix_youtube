import React from 'react';
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { GoEye } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

function Table({ data, admin }) {
  const renderRows = (movie, index) => {
    const { title, image, description, releaseYear, genre } = movie;

    return (
      <tr key={index} className="hover:bg-gray-100">
        {/* Image Column */}
        <td className={Text}>
          <div className="w-12 p-1 bg-gray-200 border border-gray-300 h-12 rounded overflow-hidden">
            <img
              className="h-full w-full rounded-full object-cover"
              src={image || '/images/default.jpg'}
              alt={title || 'movie'}
            />
          </div>
        </td>
        {/* Movie Title */}
        <td className={Text}>{title}</td>
        {/* Movie Genre */}
        <td className={Text}>{genre?.join(', ') || 'N/A'}</td>
        {/* Release Year */}
        <td className={Text}>{releaseYear || 'N/A'}</td>
        {/* Description */}
        <td className={`${Text} max-w-xs text-ellipsis overflow-hidden`} title={description}>
          {description?.slice(0, 100)}{description?.length > 100 && '...'}
        </td>
        {/* Action Buttons */}
        <td className={`${Text} flex gap-2 justify-end`}>
          {admin ? (
            <>
              <button 
                className="border border-gray-400 bg-gray-100 flex items-center gap-2 text-gray-700 rounded py-1 px-2 hover:bg-gray-200"
                title="Edit Movie"
              >
                Edit <FaEdit className="text-green-500" />
              </button>
              <button 
                className="bg-red-600 text-white rounded flex items-center justify-center w-8 h-8 hover:bg-red-700"
                title="Delete Movie"
              >
                <MdDelete />
              </button>
            </>
          ) : (
            <>
              <button 
                className="border border-gray-400 bg-gray-100 flex items-center gap-2 text-gray-700 rounded py-1 px-2 hover:bg-gray-200"
                title="Download Movie"
              >
                Download <FaCloudDownloadAlt className="text-green-500" />
              </button>
              <Link 
                to={`/movie/${title}`} 
                className="bg-blue-600 text-white rounded flex items-center justify-center w-8 h-8 hover:bg-blue-700"
                title="View Movie"
              >
                <GoEye />
              </Link>
            </>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto relative w-full">
      <table className="w-full table-auto border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className={Head}>Image</th>
            <th scope="col" className={Head}>Title</th>
            <th scope="col" className={Head}>Genre</th>
            <th scope="col" className={Head}>Release Year</th>
            <th scope="col" className={Head}>Description</th>
            <th scope="col" className={Head}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((movie, index) => renderRows(movie, index))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
