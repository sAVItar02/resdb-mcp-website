import React from 'react';
import { Database, Network, Key } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="overview" className="py-24 bg-warm-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-warm-200 to-peach-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warm-200 bg-white p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <div className="font-mono text-xs text-gray-400 mb-4"># Server Config</div>
              <div className="space-y-4 font-mono text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-peach-400 font-bold">>>></span>
                  <span>Initiating ResDB Connection...</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>GraphQL Endpoint: Connected</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Smart Contract Runtime: Active</span>
                </div>
                <div className="p-4 bg-warm-50 rounded border border-warm-200 mt-4">
                  <span className="text-gray-400">// Model Context Request</span><br/>
                  <span className="text-blue-600">query</span> {'{'} <br/>
                  &nbsp;&nbsp;getBlock(height: <span className="text-orange-500">1024</span>) {'{'} <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;hash <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;transactions <br/>
                  &nbsp;&nbsp;{'}'} <br/>
                  {'}'}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              The bridge between AI<br />
              and ResilientDB.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Apache ResilientDB is a robust, high-throughput permissioned blockchain fabric. Our MCP Server acts as a universal adapter, enabling AI agents to read and write directly to the ledger.
              </p>
              <p>
                Whether you need to fetch transaction history, update a key-value store, or interact with complex smart contracts, the MCP protocol standardizes the interface for seamless LLM integration.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="p-1.5 bg-peach-100 rounded-full text-peach-400">
                    <Database size={16} />
                  </div>
                  <span>Direct GraphQL Integration</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="p-1.5 bg-peach-100 rounded-full text-peach-400">
                    <Network size={16} />
                  </div>
                  <span>Distributed Ledger Access</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="p-1.5 bg-peach-100 rounded-full text-peach-400">
                    <Key size={16} />
                  </div>
                  <span>Smart Contract Invocation</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};