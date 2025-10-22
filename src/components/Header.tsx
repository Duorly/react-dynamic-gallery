import React from 'react';
import {DEFAULT_CONFIG} from "../utils/constants.ts";

export const Header: React.FC = () => {
    return (
        <header className="text-center py-12">
            <div className="flex flex-col justify-center items-center">
                <img
                    src="/assets/images/Logo/logo_auto_pulse.png"
                    alt="AutoPulse Logo"
                    className="w-24 object-contain drop-shadow-lg mb-0"
                />
                <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow -mt-1">
                    {DEFAULT_CONFIG.AppName}
                </h1>
            </div>
            <p className="text-gray-400 mt-3 text-lg">
                Where motion meets emotion — explore the art of automotive design.
            </p>
        </header>
    );
};

export default Header;
