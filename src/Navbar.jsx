import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* লোগো সেকশন */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              CS — <span className="text-gray-600">Ticket System</span>
            </h1>
          </div>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">Blog</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">Download</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 text-sm font-medium transition">Contact</a>
            
            <button className="bg-purple-600 text-white px-5 py-2 rounded-md text-sm font-bold flex items-center hover:bg-purple-700 transition shadow-sm">
              <span className="mr-1">+</span> New Ticket
            </button>
          </div>

          {/* মোবাইল মেনু বাটন (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">Home</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">FAQ</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50">Contact</a>
          <div className="pt-4">
            <button className="w-full bg-purple-600 text-white px-5 py-3 rounded-md font-bold hover:bg-purple-700">
              + New Ticket
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;