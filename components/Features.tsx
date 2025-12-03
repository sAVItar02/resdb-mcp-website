import React from 'react';
import { 
  Terminal, 
  FileCode, 
  Database, 
  Share2, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { Feature } from '../types';

const featureList: Feature[] = [
  {
    title: 'Native GraphQL',
    description: 'Perform complex queries and mutations using the standard ResDB GraphQL interface directly from the MCP context.',
    icon: Share2,
  },
  {
    title: 'Smart Contracts',
    description: 'Deploy, execute, and query smart contracts. Enable your AI to participate in complex on-chain logic.',
    icon: FileCode,
  },
  {
    title: 'KV Store Operations',
    description: 'Rapid get and push requests to the underlying Key-Value store with integrity verification.',
    icon: Database,
  },
  {
    title: 'Model Context Protocol',
    description: 'Built on the open standard for connecting AI assistants to systems. Compatible with Claude and other MCP clients.',
    icon: Terminal,
  },
  {
    title: 'BFT Consensus',
    description: 'Leverage ResilientDB’s robust Byzantine Fault Tolerance for secure and immutable data logging.',
    icon: ShieldCheck,
  },
  {
    title: 'High Performance',
    description: 'Optimized for low-latency interactions, ensuring your AI agents aren’t waiting on the blockchain.',
    icon: Cpu,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Unlock the power of <br />
            ResilientDB for AI.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            A comprehensive toolset allowing autonomous agents to interact with distributed ledger technology seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featureList.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-peach-50 text-gray-900 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};