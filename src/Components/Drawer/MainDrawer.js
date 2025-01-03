// MainDrawer.js
import React from 'react';
import Drawer from 'rc-drawer';

function MainDrawer({ children, drawerOpen, closeDrawer }) {
    return (
        <Drawer
            open={drawerOpen}
            onClose={closeDrawer}
            level={null}
            handler={false}
            placement="right"
            width="280px"
            className="drawer-component"
            maskClassName="drawer-mask"
            role="dialog"
            aria-modal="true"
        >
            <div className="h-full">{children}</div>
        </Drawer>
    );
}

export default MainDrawer;