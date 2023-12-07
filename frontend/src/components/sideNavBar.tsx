import React from 'react';

const SideNavBar: React.FC = () => {
    return (
        <div className="flex flex-col w-64 bg-gray-800 h-screen">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <span className="text-white text-lg font-semibold">SideNavBar</span>
            </div>
            <div className="flex flex-col flex-grow p-4">
                {/* Add your navigation links here */}
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">
                    Link 1
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">
                    Link 2
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded">
                    Link 3
                </a>
            </div>
        </div>
    );
};

export default SideNavBar;
