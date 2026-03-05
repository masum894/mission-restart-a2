import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact & Social</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-lg">public</span>
              <a href="#" className="hover:text-white transition">Twitter / X</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-lg">link</span>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-lg">mail</span>
              <a href="mailto:support@cst.com" className="hover:text-white transition">support@supoport.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs">
        <p>© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;