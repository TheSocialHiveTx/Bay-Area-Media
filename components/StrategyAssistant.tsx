
import React, { useState } from 'react';
import { getMediaStrategyAdvice } from '../services/geminiService';

const StrategyAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');
    const advice = await getMediaStrategyAdvice(input);
    setResponse(advice || 'No response generated.');
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-indigo-900 px-6 py-4 flex items-center justify-between">
        <h3 className="text-white font-bold flex items-center">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></span>
          AI Strategy Assistant
        </h3>
        <span className="text-indigo-300 text-xs font-mono uppercase">Powered by Gemini</span>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 text-sm mb-4">
          Need a quick tip on your next campaign? Ask our AI media strategist about print, video, or branding trends.
        </p>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., How can print ads help my medical practice?"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm pr-12"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1.5 p-1.5 bg-indigo-900 text-white rounded-md hover:bg-indigo-800 disabled:opacity-50 transition"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </div>
        </form>

        {response && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 animate-fade-in">
            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyAssistant;
