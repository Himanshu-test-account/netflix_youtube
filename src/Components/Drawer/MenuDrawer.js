import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainDrawer from './MainDrawer';
import { IoClose } from 'react-icons/io5';
import { BsCollectionPlay } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaFacebook, FaMedium, FaTelegram, FaYoutube } from 'react-icons/fa';

function MenuDrawer({ drawerOpen, toggleDrawer }) {
    const links = [
        {
            name: "Movies",
            link: "/movies",
            icon: BsCollectionPlay
        },
        {
            name: "About Us",
            link: "/about-us",
            icon: HiOutlineUserGroup
        },
        {
            name: "Contact Us",
            link: "/contact-us",
            icon: BiPhoneCall
        }
    ];

    const socialLinks = [
        {
            icon: FaFacebook,
            link: "https://www.facebook.com/zpunet",
            name: "Facebook"
        },
        {
            icon: FaMedium,
            link: "https://www.medium.com/@irenemmassyy",
            name: "Medium"
        },
        {
            icon: FaTelegram,
            link: "https://t.me/zpunet",
            name: "Telegram"
        },
        {
            icon: FaYoutube,
            link: "https://www.youtube.com/",
            name: "YouTube"
        }
    ];

    const navLinkClasses = ({ isActive }) => 
        `rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 ${
            isActive ? 'bg-dryGray text-subMain' : 'hover:bg-dry'
        }`;

    return (
        <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
            <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
                <div className="w-full flex-btn h-16 px-6 py-4 bg-dry">
                    <Link onClick={toggleDrawer} to="/">
                        <img
                            src="/images/logo.png"
                            alt="Site Logo"
                            className="w-28 h-28 object-contain"
                        />
                    </Link>
                    
                    <button
                        onClick={toggleDrawer}
                        type="button"
                        aria-label="Close menu"
                        className="transition w-10 h-10 flex-colo text-base text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
                    >
                        <IoClose />
                    </button>
                </div>

                <nav className="w-full overflow-y-auto flex-grow">
                    <div className="w-full flex flex-col gap-2 p-4">
                        {links.map((link) => (
                            <NavLink 
                                to={link.link} 
                                key={link.name}
                                onClick={toggleDrawer}
                                className={navLinkClasses}
                            >
                                <link.icon className="text-lg" /> 
                                <span>{link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </nav>

                <div className="flex gap-6 w-full justify-center p-6 border-t border-gray-800">
                    {socialLinks.map((link) => (
                        <a
                            href={link.link}
                            key={link.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit our ${link.name} page`}
                            className="text-xl hover:text-subMain transition"
                        >
                            <link.icon />
                        </a>
                    ))}
                </div>
            </div>
        </MainDrawer>
    );
}

export default MenuDrawer;