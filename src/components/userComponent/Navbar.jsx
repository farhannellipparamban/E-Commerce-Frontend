import React from 'react';
import { FaSearch, FaShoppingBag, FaBell, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className='text-3xl font-bold text-red-600'>Kiddy</h1>
          <p className='text-xs text-gray-500 ml-2'>DRESSES</p>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaSearch className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaShoppingBag className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaBell className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaHeart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;