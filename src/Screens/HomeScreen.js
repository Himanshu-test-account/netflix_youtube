import React from 'react';
import Layout from '../Layout/Layout';
import Banner from "../Components/Home/Banner";
import PopularMovies from '../Components/Home/PopularMovies';
import Promos from '../Components/Home/Promos';
import TopRated from '../Components/Home/TopRated';

function HomeScreen() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto min-h-screen px-4 mb-12 ">
          {/* Banner Section */}
          <Banner />

          {/* Popular Movies Section */}
          <PopularMovies />

          {/* Promos Section */}
          <Promos />

          {/* Top Rated Section */}
          <TopRated />
        </div>
      </Layout>
    </div>
  );
}

export default HomeScreen;
