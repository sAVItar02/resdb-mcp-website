import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GraphQLDemo from './GraphQLDemo';
import SmartContractDemo from './SmartContractDemo';
import BechmarksDemo from './BechmarksDemo';

export const Showcase: React.FC = () => {
  const [tab, setTab] = useState<'GraphQL' | 'SmartContract' | 'Bechmarks'>('GraphQL');

  const handleTabChange = (tab: 'GraphQL' | 'SmartContract' | 'Bechmarks') => {
    setTab(tab);
  };

  return (
    <section id="demo" className="py-24 bg-white border-y border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Demo
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See how the ResilientDB MCP Server bridges the gap between cognitive agents and deterministic ledgers.
          </p>
          <div
            className={`relative flex justify-center p-1 rounded-full bg-warm-50 border border-warm-200 w-fit mx-auto overflow-hidden before:content-[''] before:absolute before:top-1 before:left-1 before:bottom-1 before:w-[150px] before:rounded-full before:bg-black before:transition-transform before:duration-300 before:ease-in-out ${tab === 'SmartContract' ? 'before:translate-x-[150px]' : tab === 'Bechmarks' ? 'before:translate-x-[300px]' : 'before:translate-x-0'}`}
          >
            <button
              className={`w-[150px] py-2 rounded-full relative cursor-pointer z-10 ${tab === 'GraphQL' ? 'text-white' : 'text-gray-900'}`}
              onClick={() => handleTabChange('GraphQL')}
            >
              GraphQL
            </button>
            <button
              className={`w-[150px] py-2 rounded-full relative cursor-pointer z-10 ${tab === 'SmartContract' ? 'text-white' : 'text-gray-900'}`}
              onClick={() => handleTabChange('SmartContract')}
            >
              Smart Contract
            </button>
            <button
              className={`w-[150px] py-2 rounded-full relative cursor-pointer z-10 ${tab === 'Bechmarks' ? 'text-white' : 'text-gray-900'}`}
              onClick={() => handleTabChange('Bechmarks')}
            >
              Other tools
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {tab === 'GraphQL' ? <GraphQLDemo /> : tab === 'SmartContract' ? <SmartContractDemo /> : <BechmarksDemo />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};