import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BATCH_DATA } from '../constants';
import { FarmerData } from '../types';

const KnowYourFarmer: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>();
  const [data, setData] = useState<FarmerData | null>(null);
  const [searchVal, setSearchVal] = useState(batchId || '');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (batchId && BATCH_DATA[batchId]) {
      setData(BATCH_DATA[batchId]);
      setError(false);
    } else if (batchId) {
      setData(null);
      setError(true);
    }
  }, [batchId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (BATCH_DATA[searchVal]) {
      setData(BATCH_DATA[searchVal]);
      setError(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setData(null);
      setError(true);
    }
  };

  if (!data) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center p-6 bg-[#FFFDF5]">
        <div className="max-w-lg w-full text-center">
          <div className="animate-reveal-up">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Traceability</span>
            <h2 className="text-5xl font-serif font-black text-stone-900 mb-8 tracking-tight leading-none">Know Your Farmer</h2>
            <p className="text-stone-500 mb-12 text-xl font-medium leading-relaxed">Enter the 5-digit batch ID from your Safary pack to meet the farmer behind your snack.</p>
          </div>
          
          <form onSubmit={handleSearch} className="space-y-6 animate-reveal-up delay-200 reveal-hidden">
            <input
              type="text"
              placeholder="Batch ID (try 12345)"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full px-6 md:px-10 py-5 md:py-7 rounded-[2rem] border-2 border-stone-200 bg-white focus:bg-white focus:border-yellow-400 outline-none transition-all text-2xl md:text-3xl font-black text-center text-stone-900 shadow-xl placeholder:text-lg md:placeholder:text-3xl placeholder:text-stone-300"
            />
            <button
              type="submit"
              className="w-full py-6 bg-yellow-400 text-stone-900 font-black rounded-full hover:bg-stone-900 hover:text-white transition-all shadow-xl active:scale-95 text-xs tracking-[0.4em] uppercase"
            >
              Trace Origin
            </button>
          </form>
          {error && <p className="mt-8 text-red-600 font-bold text-sm bg-red-50 py-3 px-6 rounded-full inline-block border border-red-100 animate-scale-in">Batch ID not found. Try '12345'</p>}
          <div className="mt-16 animate-fade-in delay-500 reveal-hidden">
            <Link to="/" className="text-stone-400 hover:text-stone-900 text-xs font-black tracking-[0.2em] uppercase transition-all">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFDF5]">
      {/* Search Header */}
      <div className="bg-white/90 backdrop-blur-md py-8 px-6 border-b border-stone-200 sticky top-0 z-40 animate-fade-in">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
           <div className="flex items-center gap-6">
             <Link to="/" className="font-brand text-stone-900 font-extrabold text-3xl tracking-tighter hover:text-yellow-500 transition-colors">SAFARY</Link>
             <div className="h-8 w-px bg-stone-200 hidden sm:block"></div>
             <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors">Home</Link>
           </div>
           <form onSubmit={handleSearch} className="flex-grow flex gap-3 w-full">
              <input 
                type="text" 
                placeholder="Another Batch ID?"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="flex-grow px-8 py-4 bg-stone-50 rounded-2xl border border-stone-200 font-bold text-sm text-stone-900 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all"
              />
              <button className="px-8 py-4 bg-yellow-400 text-stone-900 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">Trace</button>
           </form>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-28 px-6 bg-stone-100 overflow-hidden">
        {/* <div className="absolute inset-0 opacity-20 hover:opacity-40 transition-all duration-1000">
           <img 
            src="https://images.unsplash.com/photo-1594488311340-9856f7e8a93e?auto=format&fit=crop&q=80&w=1400" 
            className="w-full h-full object-cover animate-fade-in"
            alt="Burhanpur Farm"
           />
        </div> */}
        <div className="relative z-10 max-w-5xl mx-auto animate-reveal-up">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-stone-900 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl animate-scale-in delay-200 reveal-hidden">Batch #{data.batchId}</span>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-stone-900 mb-6 tracking-tight leading-none">
            {data.farmerName}
          </h1>
          <p className="text-stone-600 text-xl md:text-3xl font-medium tracking-tight">📍 {data.location} • {data.harvestDate}</p>
          {/* portrait removed from hero overlay; rendered below the hero section */}
        </div>
      </section>

      {/* Farmer portrait between hero and story */}
      {data.images && data.images[1] && (
        <div className="max-w-5xl mx-auto -mt-16 mb-12 flex justify-center z-10 relative">
          <div className="w-56 md:w-72 h-56 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img src={data.images[1]} alt={`${data.farmerName} portrait`} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Story Content */}
      <section className="py-24 px-6 bg-[#FFFDF5] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="bg-white p-8 md:p-12 rounded-[4rem] shadow-2xl border border-stone-100 relative animate-reveal-right reveal-hidden">
            <div className="absolute top-12 right-12 text-7xl opacity-5 text-stone-900">❝</div>
            
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-12 font-normal">
              {data.farmStory}
            </p>
            
          </div>

          <div className="py-8">
            <h2 className="text-4xl font-serif font-black text-stone-900 mb-16 tracking-tight animate-reveal-up reveal-hidden">Photos From The Farm</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.images && data.images.length ? (
                data.images.map((src, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-2xl animate-reveal-up reveal-hidden" style={{ animationDelay: `${(idx + 1) * 120}ms` }}>
                    <img src={src} alt={`${data.farmerName} photo ${idx + 1}`} className="w-full h-72 object-cover" />
                  </div>
                ))
              ) : (
                <p className="text-stone-500">No photos available for this batch.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-yellow-400 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-stone-900">
           <h2 className="text-4xl md:text-6xl font-serif italic font-bold mb-10 leading-snug animate-reveal-up reveal-hidden">
            "Directly from India's heartland to your home."
           </h2>
           <div className="w-24 h-1 bg-stone-900 mx-auto rounded-full mb-12 animate-scale-in delay-500 reveal-hidden"></div>
           <Link to="/" className="inline-block px-14 py-7 bg-stone-900 text-white text-xs font-black uppercase tracking-[0.5em] rounded-full hover:bg-white hover:text-stone-900 transition-all active:scale-95 shadow-2xl animate-reveal-up delay-700 reveal-hidden">Return to Home</Link>
        </div>
      </section>
    </div>
  );
};

export default KnowYourFarmer;