
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-950 pt-32 pb-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.3),transparent)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-center">Expertise.</h1>
          <p className="text-xl md:text-2xl text-indigo-200 max-w-2xl mx-auto leading-relaxed text-center font-light">
            Crafting messages that resonate with the Houston Bay Area across every medium.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <Link 
                key={service.id} 
                to={service.path}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-50 flex flex-col hover:-translate-y-3 animate-reveal delay-${(i % 3) * 100}`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-900">
                    Premium Service
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-black text-indigo-950 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">{service.name}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center text-indigo-600 font-black text-sm uppercase tracking-widest group/link">
                    Explore Details
                    <div className="ml-3 w-8 h-[2px] bg-indigo-600 group-hover/link:w-12 transition-all"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-32 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-8 tracking-tight">Ready to start?</h2>
          <p className="text-lg text-slate-500 mb-12 font-medium">Contact our team for a personalized media consultation tailored to your specific goals.</p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 bg-indigo-900 text-white rounded-2xl font-black text-xl hover:bg-indigo-800 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all active:scale-95"
          >
            Launch Your Campaign
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
