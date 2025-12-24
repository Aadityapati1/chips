import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFFDF5]/80 backdrop-blur-xl border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24 md:h-32">
          <Link to="/" className="flex items-center group">
            <span className="font-brand text-4xl md:text-5xl font-extrabold tracking-tighter text-stone-900 group-hover:text-yellow-500 transition-all">
              SAFARY
            </span>
          </Link>
          <div className="flex items-center space-x-6 md:space-x-12">
            <Link to="/" className="text-[10px] md:text-xs font-black text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-[0.2em] hidden xs:block">Home</Link>
            <Link 
              to="/know-your-farmer" 
              className="px-8 py-3.5 md:px-10 md:py-4 bg-stone-900 text-white text-[10px] md:text-xs font-black rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-500 transition-all active:scale-95 uppercase tracking-[0.2em]"
            >
              Know Your Farmer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;