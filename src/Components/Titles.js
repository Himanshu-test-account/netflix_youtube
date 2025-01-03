import React from 'react';

const Titles = ({ title, Icons }) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center">
      <div className="sm:w-1/2 w-full h-1 bg-dry"></div>
      <h2 className="sm:w-1/2 w-full font-bold text-xl whitespace-nowrap">
        {title}
        {Icons && <Icons className="text-subMain ml-2 inline-block" />}
      </h2>
    </div>
  );
};

export default Titles;