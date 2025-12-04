import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Motivation: React.FC = () => {
  return (
    <section id="motivation" className="py-24 bg-white border-b border-warm-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Motivation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ResilientDB provides powerful blockchain infrastructure, but its current interfaces <b>ResContract CLI</b> for smart contracts and <b>GraphQL/HTTP</b> for key–value operations are complex and fragmented. This creates a steep learning curve for new developers and makes it difficult for AI agents to interact with the system naturally. With the rise of agent-driven development, there is a clear need for a unified, intuitive, and AI-friendly way to access ResilientDB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Why This Project */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-peach-400 rounded-full"></span>
              Why This Project?
            </h3>
            <ul className="space-y-6">
              <li className="block">
                <span className="block font-semibold text-gray-900 mb-1">Reduce Complexity</span>
                <span className="text-gray-500 leading-relaxed">Current tooling requires deep familiarity with multiple interfaces (CLI, GraphQL, HTTP).</span>
              </li>
              <li className="block">
                <span className="block font-semibold text-gray-900 mb-1">Unify Access</span>
                <span className="text-gray-500 leading-relaxed">No single, simple entry point exists for interacting with both smart contracts and key–value operations.</span>
              </li>
              <li className="block">
                <span className="block font-semibold text-gray-900 mb-1">Enable AI Interaction</span>
                <span className="text-gray-500 leading-relaxed">ResilientDB is not yet ready for AI agents like Claude to issue natural-language instructions.</span>
              </li>
              {/* <li className="block">
                <span className="block font-semibold text-gray-900 mb-1">Lower the Barrier</span>
                <span className="text-gray-500 leading-relaxed">MCP provides a clean, structured way for beginners to interact without mastering the underlying layers.</span>
              </li> */}
              <li className="block">
                <span className="block font-semibold text-gray-900 mb-1">Future-Proofing</span>
                <span className="text-gray-500 leading-relaxed">As agentic workflows grow, having an MCP layer makes ResilientDB more accessible, automated, and widely usable.</span>
              </li>
            </ul>
          </div>

          {/* What MCP Enables */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gray-900 rounded-full"></span>
              What MCP Enables
            </h3>
            <div className="bg-warm-50 rounded-2xl p-8 border border-warm-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-peach-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Natural-language → structured tool calls.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-peach-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Automatic routing to GraphQL or smart contract operations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-peach-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Easier experimentation, faster prototyping, and broader adoption.</span>
                </li>
              </ul>
              
              {/* <div className="mt-8 pt-8 border-t border-warm-200">
                <p className="text-gray-500 italic text-sm">
                  "This project brings ResilientDB one step closer to being an AI-ready, user-friendly, and versatile blockchain platform."
                </p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};