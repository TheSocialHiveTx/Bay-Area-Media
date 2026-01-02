
import React from 'react';
import { MAGAZINES } from '../constants';

const Magazines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-indigo-950 mb-6 tracking-tight">Our Magazines</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bay Group Media is the proud home of three premier publications that define the voice of the Houston Bay Area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MAGAZINES.map((mag) => (
            <div key={mag.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={mag.imageUrl} 
                  alt={mag.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-indigo-950 mb-4">{mag.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {mag.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={mag.siteUrl} 
                    className="inline-flex items-center px-6 py-2 bg-indigo-950 text-white rounded-full font-semibold text-sm hover:bg-indigo-800 transition"
                  >
                    View Publication
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-indigo-950 rounded-3xl text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Interested in Advertising?</h2>
              <p className="text-indigo-200 text-lg">
                Our magazines reach the most affluent and engaged audiences in the Bay Area. Connect with our team to discuss placement options.
              </p>
            </div>
            <button className="whitespace-nowrap px-10 py-4 bg-white text-indigo-950 rounded-full font-bold text-lg hover:bg-indigo-50 transition shadow-lg shadow-black/20">
              Download Media Kit
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
