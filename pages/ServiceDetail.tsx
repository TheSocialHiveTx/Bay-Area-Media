
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Service Hero */}
      <section className="bg-indigo-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={service.imageUrl} 
            alt="" 
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex mb-8 text-indigo-300 text-sm font-medium uppercase tracking-widest">
              <Link to="/services" className="hover:text-white transition">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.name}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">{service.name}</h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Extensive Copy */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-indigo-950 mb-8">Service Overview</h2>
              <div className="prose prose-lg prose-indigo max-w-none text-slate-600 leading-relaxed mb-12">
                <p className="text-lg mb-6">
                  {service.longDescription}
                </p>
                <p>
                  At Bay Group Media, we pride ourselves on a tradition of excellence. Since 2008, we have worked with businesses across the Houston Bay Area and Galveston County to deliver results that exceed expectations. Our approach is collaborative; we don't just work for you, we work with you to understand the unique challenges and opportunities of your specific market niche.
                </p>
              </div>

              <div className="bg-indigo-50 p-8 md:p-12 rounded-3xl border border-indigo-100">
                <h3 className="text-2xl font-bold text-indigo-950 mb-8">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual & CTA */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-indigo-900/5 rounded-[2.5rem] -z-0"></div>
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-auto rounded-3xl shadow-2xl relative z-10 aspect-[4/3] object-cover"
                  />
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                  <h4 className="text-xl font-bold text-indigo-950 mb-4">Start Your Campaign</h4>
                  <p className="text-slate-600 mb-8 text-sm">
                    Ready to elevate your presence in the Bay Area? Speak with one of our specialists today about custom solutions.
                  </p>
                  <Link 
                    to="/contact" 
                    className="block w-full text-center py-4 bg-indigo-900 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-800 transition active:scale-[0.98]"
                  >
                    Request a Quote
                  </Link>
                </div>

                <div className="text-center">
                  <Link to="/services" className="text-indigo-600 font-bold hover:text-indigo-800 inline-flex items-center group">
                    <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                    Back to All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Section or Media Kit Callout */}
      {service.id !== 'media-kit' && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-indigo-950 mb-6">Data-Driven Strategy</h2>
            <p className="text-lg text-slate-600 mb-10">
              Our {service.name} strategies are backed by the extensive demographic research found in our latest Media Kit. Download the full overview to see how we reach your ideal customers.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/services/media-kit"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-900 text-indigo-900 rounded-full font-bold hover:bg-indigo-900 hover:text-white transition"
              >
                View Media Kit
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceDetail;
