import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 text-stone-600 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-200 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-brand text-stone-900 text-3xl font-extrabold tracking-tighter mb-6">SAFARY</h3>
            <p className="max-w-xs text-sm leading-relaxed mb-6 text-stone-500">
              Made from the finest bananas, sourced directly from the heart of India's farms in Burhanpur.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-stone-200 px-3 py-1 rounded text-[10px] font-bold text-stone-700">FSSAI: 21422570000458</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-stone-900 font-bold mb-6 text-xs uppercase tracking-[0.2em]">Contact Us</h4>
            <div className="space-y-4 text-sm font-medium">
              <p className="flex items-center gap-2">
                <span className="text-yellow-600">📧</span> support@safarychips.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.281.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </span> @safary.banana
              </p>
              <p className="flex items-center gap-2 text-xs leading-relaxed text-stone-500">
                <span className="text-yellow-600">📍</span> Burhanpur (East Nimar)<br/>Madhya Pradesh - 450445
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-stone-900 font-bold mb-6 text-xs uppercase tracking-[0.2em]">Our Partners</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400 mb-1">Manufactured By</p>
                <p className="text-stone-900 font-bold">Vedant Kela Chips</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-stone-400 mb-1">Marketed By</p>
                <p className="text-stone-900 font-bold">Redwyne Foods LLP</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-[10px] md:text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400">
          <p className="uppercase tracking-widest">© 2025 Safary Banana Chips. Burhanpur's Pride.</p>
          <p className="font-serif italic text-yellow-600 text-lg">"Khate hi safar shuru"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;