import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="text-center py-12">
            <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow">
                AutoPulse
            </h1>
            <p className="text-gray-400 mt-3 text-lg">Where motion meets emotion — explore the art of automotive design.</p>
        </header>
    );
};
export default Header;
