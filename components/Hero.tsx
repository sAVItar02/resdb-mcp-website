import React from 'react';
import { ChevronDown } from 'lucide-react';
import SystemHealthWidget from './SystemHealthWidget';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-peach-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="relative px-2">
          <SystemHealthWidget />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-8 max-w-5xl mx-auto leading-[1.1] pt-10">
          Connecting AI to <br />
          <span className="text-gray-400">Resilient Data.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Model Context Protocol (MCP) server for <a href="https://resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-peach-400 transition-colors">ResilientDB</a>.
          Empower your LLM agents to perform GraphQL queries and interact with smart contracts securely.
        </p>

        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-warm-200">
            Connect Server
          </button>
          <a href="https://resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-warm-200 font-medium rounded-full hover:bg-warm-50 transition-all hover:border-warm-300 flex items-center justify-center">
            Documentation
          </a>
        </div> */}

        <a href="#motivation" className="mt-20 lg:mt-32 opacity-30">
          <ChevronDown className="w-6 h-6 mx-auto text-gray-900 animate-bounce" />
        </a>
      </div>
    </section>
  );
};