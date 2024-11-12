import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ( { children } ) => {
    return (
        <div className="flex">
            <Navbar/>
            <Sidebar/>
            <main className="ml-64 mt-16 p-6 w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;
