
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-indigo-950">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Agency Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-8 backdrop-blur-sm border border-indigo-500/30 animate-reveal">
              17 YEARS OF EXCELLENCE
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] animate-reveal delay-100">
              Elevating Brands in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">The Bay.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl font-light animate-reveal delay-200">
              Bay Area's premier high-gloss lifestyle publications and cinematic storytellers since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 animate-reveal delay-300">
              <Link to="/our-magazines" className="px-10 py-5 bg-white text-indigo-900 rounded-full font-black text-lg hover:bg-indigo-50 transition-all hover:-translate-y-1 shadow-2xl active:scale-95 text-center">
                Explore Our Magazines
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-indigo-600/30 text-white border border-white/20 backdrop-blur-md rounded-full font-black text-lg hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95 text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Logo Section */}
      <section className="bg-white py-20 relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="animate-reveal">
              <div className="text-5xl font-black text-indigo-900 mb-2">17+</div>
              <div className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Years Experience</div>
            </div>
            <div className="animate-reveal delay-100">
              <div className="text-5xl font-black text-indigo-900 mb-2">3</div>
              <div className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Major Titles</div>
            </div>
            <div className="animate-reveal delay-200">
              <div className="text-5xl font-black text-indigo-900 mb-2">10k+</div>
              <div className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Weekly Readers</div>
            </div>
            <div className="animate-reveal delay-300">
              <div className="text-5xl font-black text-indigo-900 mb-2">500+</div>
              <div className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-8 leading-tight tracking-tight">Personalized Marketing,<br/><span className="text-indigo-600">Premium Results.</span></h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Our local familiarity isn't just a detail—it's our edge. We don't just broadcast; we connect your brand with the community we've served for nearly two decades.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                {['Video Production', 'Media Kits', 'Graphic Design', 'Print Ads'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="inline-flex items-center space-x-2 text-indigo-600 font-black hover:text-indigo-800 group px-6 py-3 rounded-full bg-indigo-50 transition-all">
                <span>View all our expertise</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-900/5 rounded-[3rem] rotate-3 -z-10 animate-pulse"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-700 -rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Creative Team" 
                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
