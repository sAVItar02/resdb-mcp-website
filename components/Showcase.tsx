import React from 'react';

const showcaseItems = [
  {
    title: "Direct GraphQL Integration",
    description: "Bypass complex middleware. The MCP server translates natural language requests from your LLM directly into valid GraphQL queries against the ResilientDB endpoint, handling schema validation and error recovery automatically.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Smart Contract Management",
    description: "Deploy and execute contracts with ease. Whether it's a simple KV store operation or complex business logic, the server manages the transaction lifecycle, signature verification, and consensus acknowledgment.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Intelligent Workflows
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See how the ResilientDB MCP Server bridges the gap between cognitive agents and deterministic ledgers.
          </p>
        </div>

        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warm-200 aspect-video group">
                  <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="h-1 w-20 bg-peach-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};