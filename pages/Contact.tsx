
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-950 mb-4">Let's Connect</h1>
          <p className="text-xl text-slate-600">We're here to help you navigate the Bay Area media landscape.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-indigo-950 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office Mailing</h4>
                    <p className="text-slate-600">P.O. Box 1032<br />Seabrook, TX 77586</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone & Fax</h4>
                    <p className="text-slate-600">P: 281 474 5875</p>
                    <p className="text-slate-600">F: 281 474 1443</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-indigo-600 font-medium">info@baygroupmedia.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-indigo-200 mb-6">Stay updated with our latest publications and projects.</p>
              <div className="flex space-x-4">
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </button>
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 8.2 0 12.3 0 12.3s0 4.1.5 6.1c.3 1.1 1.1 1.9 2.2 2.2 2 1 9.3 1 9.3 1s7.3 0 9.3-1c1.1-.3 1.9-1.1 2.2-2.2.5-2 1-6.1.5-6.1s0-4.1-.5-6.1zM9.5 15.6V9l6.5 3.3-6.5 3.3z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-indigo-950 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                    <option>Advertising Inquiry</option>
                    <option>Video Production Project</option>
                    <option>Graphic Design Request</option>
                    <option>Public Relations Service</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-indigo-900 text-white rounded-lg font-bold text-lg hover:bg-indigo-800 transition shadow-lg shadow-indigo-900/10">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
