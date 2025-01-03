import React, { createContext, useMemo, useState } from 'react';

// Create SidebarContext
export const SidebarContext = createContext();

function DrawerContext({ children }) {
    // State to manage the mobile drawer visibility
    const [mobileDrawer, setMobileDrawer] = useState(false);

    // Toggle function for the drawer state, now accepts a parameter to set the drawer open or closed
    const toggleDrawer = (isOpen) => setMobileDrawer(isOpen);

    // Use useMemo to prevent unnecessary re-renders
    const value = useMemo(() => ({ mobileDrawer, toggleDrawer }), [mobileDrawer]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export default DrawerContext;
