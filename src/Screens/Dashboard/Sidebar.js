import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaHeart, FaListAlt, FaUsers } from 'react-icons/fa';
import { RiLockPasswordFill, RiMovie2Fill } from 'react-icons/ri';
import { HiViewGridAdd } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import Layout from '../../Layout/Layout';
import { NavLink } from 'react-router-dom';

function Sidebar({ children }) {
  const SideLinks = [
    { name: "Dashboard", link: "/dashboard", icon: BsFillGridFill },
    { name: "Movies List", link: "/movielist", icon: FaListAlt },
    { name: "Add Movie", link: "/addmovie", icon: RiMovie2Fill },
    { name: "Categories", link: "/categories", icon: HiViewGridAdd },
    { name: "Users", link: "/users", icon: FaUsers },
    { name: "Update Profile", link: "/profile", icon: FiSettings },
    { name: "Favourites Movies", link: "/favourite", icon: FaHeart },
    { name: "Change Password", link: "/password", icon: RiLockPasswordFill },
  ];

  const activeClass = "bg-dryGray text-subMain";
  const hoverClass = "hover:text-white hover:bg-main";
  const inactiveClass = "rounded font-medium text-sm transition flex gap-3 items-center p-4";

  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
          {/* Sidebar Navigation */}
          <div className='col-span-2 sticky top-24 bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
            <div className='flex flex-col gap-4'>
              {SideLinks.map((link, index) => (
                <NavLink
                  to={link.link}
                  key={index}
                  className={({ isActive }) =>
                    isActive 
                      ? `${activeClass} ${inactiveClass}` 
                      : `${inactiveClass} ${hoverClass}`
                  }
                >
                  <link.icon className="text-lg" /> 
                  <p>{link.name}</p>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sidebar;