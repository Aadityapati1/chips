import React from 'react';
import { useNavigate } from 'react-router-dom';
import packPeri from '../periperi-removebg-preview.png';
import packCream from '../cream_onion-removebg-preview.png';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full bg-[#FFFDF5]">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFFDF5] px-6 py-20 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-100/40 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="text-center max-w-7xl mx-auto z-10">
          <h1 className="font-brand text-8xl md:text-[14rem] font-extrabold text-stone-900 tracking-tighter leading-[0.8] mb-6 drop-shadow-sm select-none animate-reveal-up">
            Safary
          </h1>
          <p className="font-serif italic text-2xl md:text-5xl text-stone-500 mb-12 animate-reveal-up delay-300 reveal-hidden">
            "Khate hi safar shuru"
          </p>
        </div>

        {/* Visual Decoration with Real Pack Images */}
        <div className="mt-8 flex items-center justify-center gap-6 md:gap-20 px-4 z-10">
           <div className="animate-reveal-up delay-500 reveal-hidden">
             <div className="w-44 md:w-72 transition-all hover:scale-110 duration-500 cursor-pointer animate-float drop-shadow-2xl">
                <img 
                  src={packCream} 
                  alt="Cream & Onion Pack" 
                  className="w-full h-auto"
                />
             </div>
           </div>
           <div className="animate-reveal-up delay-700 reveal-hidden">
             <div className="w-44 md:w-72 transition-all hover:scale-110 duration-500 cursor-pointer animate-float drop-shadow-2xl" style={{ animationDelay: '1s' }}>
                <img 
                  src={packPeri} 
                  alt="Peri-Peri Pack" 
                  className="w-full h-auto"
                />
             </div>
           </div>
        </div>
      </section>

      {/* About Our Business */}
      <section className="py-24 px-6 md:py-40 bg-white border-t border-stone-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="animate-reveal-right reveal-hidden">
              <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Legacy of Burhanpur</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-10 leading-[1.05]">
                Taste the Harvest of MP.
              </h2>
              <p className="text-stone-600 text-xl leading-relaxed mb-10 font-medium">
                Sourced from the heart of the Cavendish banana capital. Safary brings the fertile soil of Burhanpur to your fingertips with a crunch that sounds like tradition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 p-4 bg-[#FFFDF5] rounded-2xl border border-yellow-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center text-2xl">🍌</div>
                  <p className="text-sm font-bold text-stone-800 leading-tight">100% Premium Cavendish</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#FFFDF5] rounded-2xl border border-yellow-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center text-2xl">🌶️</div>
                  <p className="text-sm font-bold text-stone-800 leading-tight">Small-Batch Crafted</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-reveal-up delay-500 reveal-hidden">
              <div className="bg-[#FFFDF5] rounded-[3rem] p-12 md:p-16 border border-yellow-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                 <h3 className="text-3xl font-serif font-black text-stone-900 mb-8">Our Promise</h3>
                 <p className="text-stone-500 mb-10 italic text-xl leading-relaxed">
                  "Snacking should be transparent. Every bag of Safary is a journey back to the farmers of Burhanpur who grew your bananas with care."
                 </p>
                 <div className="h-px w-full bg-stone-200 mb-10 group-hover:bg-yellow-400 transition-colors duration-500"></div>
                 <div className="flex justify-between items-center text-center">
                    <div className="hover:scale-110 transition-transform cursor-default">
                      <p className="text-3xl font-black text-yellow-600">₹20</p>
                      <p className="text-[10px] uppercase font-bold text-stone-400 mt-2 tracking-widest">MRP</p>
                    </div>
                    <div className="hover:scale-110 transition-transform cursor-default">
                      <p className="text-3xl font-black text-stone-900">40g</p>
                      <p className="text-[10px] uppercase font-bold text-stone-400 mt-2 tracking-widest">Net Qty</p>
                    </div>
                    <div className="hover:scale-110 transition-transform cursor-default">
                      <p className="text-3xl font-black text-stone-900">100%</p>
                      <p className="text-[10px] uppercase font-bold text-stone-400 mt-2 tracking-widest">Vegetarian</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;