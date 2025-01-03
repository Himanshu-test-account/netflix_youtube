import React from "react";
import {FiUser} from "react-icons/fi"

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movies Watch Offline <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            With our app, you can now enjoy a seamless movie-watching experience wherever you go. Whether you're traveling, commuting, or relaxing at home, you can download your favorite movies and TV shows directly to your device and watch them offline—no internet required. No more buffering or interruptions; just pure entertainment at your fingertips.
          </p>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8 mt-4">
            Start by browsing through our vast collection, select the movies or shows you want, and hit download. Your downloads are stored in your library, ready to be enjoyed anytime, anywhere, whether you're connected to Wi-Fi or using mobile data. Stay entertained even when you're offline!
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser /> 2K
            </div> 
          </div>
        </div>
        <div>
          <img src="/images/mobile.jpg" alt="Mobile app" className="w-full object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default Promos;
