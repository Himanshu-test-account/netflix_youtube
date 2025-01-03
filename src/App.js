import React, { useEffect } from 'react';
import Aos from 'aos';
import { Routes, Route } from 'react-router-dom';
import ScrollOnTop from './ScrollOnTop';
import DrawerContext from './Context/DrawerContext';

// Public Routes
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import NotFound from './Screens/NotFound';

// Auth Routes
import Login from './Screens/Login';
import Register from './Screens/Register';

// User Dashboard Routes
import Profile from './Screens/Dashboard/Profile';
import Password from './Screens/Dashboard/Password';
import FavouriteMovie from './Screens/Dashboard/FavouriteMovie';

// Admin Dashboard Routes
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import MovieList from './Screens/Dashboard/Admin/MovieList';
import Categories from './Screens/Dashboard/Admin/Categories';
import Users from './Screens/Dashboard/Admin/Users';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';

function App() {
  // Initialize AOS once when component mounts
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* User Dashboard Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favourite" element={<FavouriteMovie />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addmovie" element={<AddMovie />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;