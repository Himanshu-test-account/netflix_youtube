// MobileFooter.js
import React, { useContext, useEffect } from 'react';
import { BsCollectionPlay } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FiUserCheck } from 'react-icons/fi';
import { CgMenuBoxed } from 'react-icons/cg';
import MenuDrawer from '../../Components/Drawer/MenuDrawer';
import { SidebarContext } from '../../Context/DrawerContext';

const NavButton = ({ to, icon: Icon, badge, label }) => {
    const baseClasses = "transitions text-2xl flex-colo rounded-full px-4 py-3";
    const activeClass = "bg-white text-main";
    const inactiveClass = `${baseClasses} hover:bg-white hover:text-main text-white`;

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? `${baseClasses} ${activeClass}` : inactiveClass}
            aria-label={label}
        >
            <div className="relative">
                {badge && (
                    <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                        {badge}
                    </div>
                )}
                <Icon />
            </div>
        </NavLink>
    );
};

function MobileFooter() {
    const { mobileDrawer, toggleDrawer } = useContext(SidebarContext);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('mobile-footer');
            if (footer) {
                footer.style.transform = window.scrollY > 100 ? 'translateY(100%)' : 'translateY(0)';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <MenuDrawer drawerOpen={mobileDrawer} toggleDrawer={toggleDrawer} />
            <footer 
                id="mobile-footer"
                className="lg:hidden fixed z-50 bottom-0 w-full px-1 transition-transform duration-300"
            >
                <nav className="bg-dry rounded-md flex-btn w-full p-1">
                    <NavButton 
                        to="/movies" 
                        icon={BsCollectionPlay}
                        label="Browse Movies"
                    />
                    <NavButton 
                        to="/favourite" 
                        icon={FaHeart}
                        badge={3}
                        label="Favorite Movies"
                    />
                    <NavButton 
                        to="/login" 
                        icon={FiUserCheck}
                        label="User Account"
                    />
                    <button
                        onClick={() => toggleDrawer(true)} // Open the drawer
                        className="transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-full px-4 py-3"
                        aria-label="Open Menu"
                    >
                        <CgMenuBoxed />
                    </button>
                </nav>
            </footer>
        </>
    );
}

export default MobileFooter;
