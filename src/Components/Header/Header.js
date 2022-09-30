import React from 'react';

const Header = () => {
    return (
        <header className='py-6'>
            <div className="container flex items-center">
                <img className='w-16' src="./logo.png" alt="Logo" />
                <h3 className='text-3xl ml-3 bg-emerald-400 text-white font-semibold px-3 py-2'>Fitness Club</h3> 
            </div>
        </header>
    );
};

export default Header;