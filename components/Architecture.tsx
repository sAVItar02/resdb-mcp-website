import React from 'react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-white border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-start mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            System Architecture
          </h2>
        </div>

        {/* Diagram Container */}
        <div className="relative bg-warm-50 rounded-3xl p-6 md:p-12 border border-warm-200 overflow-hidden flex justify-center">
          
          <svg viewBox="0 0 900 380" className="w-full max-w-4xl h-auto drop-shadow-sm font-sans">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
              </marker>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.05"/>
              </filter>
            </defs>

            {/* --- User Node --- */}
            <g transform="translate(20, 140)">
              <rect width="100" height="80" rx="12" fill="#FFFFFF" stroke="#EBE7DE" strokeWidth="2" filter="url(#shadow)" />
              <text x="50" y="45" textAnchor="middle" className="text-sm font-bold fill-gray-900" style={{fontSize: '14px', fontWeight: 700}}>User</text>
            </g>

            {/* Arrows: User <-> Agent */}
            <g transform="translate(130, 180)">
              <line x1="0" y1="-10" x2="30" y2="-10" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="30" y1="10" x2="0" y2="10" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </g>

            {/* --- AI Agent Node --- */}
            <g transform="translate(170, 120)">
              <rect width="140" height="120" rx="12" fill="#FFFFFF" stroke="#FB923C" strokeWidth="2" filter="url(#shadow)" />
              <text x="70" y="55" textAnchor="middle" className="text-sm font-bold fill-gray-900" style={{fontSize: '14px', fontWeight: 700}}>AI Agent /</text>
              <text x="70" y="75" textAnchor="middle" className="text-sm font-bold fill-gray-900" style={{fontSize: '14px', fontWeight: 700}}>MCP Host</text>
              <text x="70" y="95" textAnchor="middle" className="text-xs fill-gray-400" style={{fontSize: '11px'}}>Claude / VSCode</text>
            </g>

            {/* Arrows: Agent <-> MCP */}
            <g transform="translate(320, 180)">
              <line x1="0" y1="-20" x2="40" y2="-20" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="20" y="-30" textAnchor="middle" className="text-xs fill-gray-400" style={{fontSize: '10px'}}>Request</text>
              <line x1="40" y1="20" x2="0" y2="20" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </g>

            {/* --- MCP Server Group --- */}
            <g transform="translate(370, 40)">
              {/* Outer Container */}
              <rect width="220" height="300" rx="16" fill="#F7F4EB" stroke="#DBD6C9" strokeWidth="2" strokeDasharray="6,6" />
              <text x="110" y="30" textAnchor="middle" className="text-xs font-bold fill-gray-500 uppercase tracking-widest" style={{fontSize: '12px', fontWeight: 700}}>MCP Server</text>

              {/* Inner Logic: Tool Dispatcher */}
              <g transform="translate(20, 50)">
                <rect width="180" height="230" rx="12" fill="#FFFFFF" stroke="#EBE7DE" strokeWidth="1" filter="url(#shadow)" />
                <text x="90" y="30" textAnchor="middle" className="text-xs font-semibold fill-gray-900" style={{fontSize: '12px', fontWeight: 600}}>Tool Dispatcher</text>

                {/* Sub-components */}
                <rect x="15" y="60" width="150" height="60" rx="8" fill="#FDFBF7" stroke="#EBE7DE" strokeWidth="1" />
                <text x="90" y="95" textAnchor="middle" className="text-xs font-medium fill-gray-700" style={{fontSize: '11px'}}>Smart Contract API</text>

                <rect x="15" y="140" width="150" height="60" rx="8" fill="#FDFBF7" stroke="#EBE7DE" strokeWidth="1" />
                <text x="90" y="175" textAnchor="middle" className="text-xs font-medium fill-gray-700" style={{fontSize: '11px'}}>GraphQL Query API</text>
              </g>
            </g>

            {/* Arrows: MCP <-> Backend */}
            <g transform="translate(590, 0)">
              {/* Top Pair */}
              <line x1="10" y1="140" x2="60" y2="140" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="60" y1="160" x2="10" y2="160" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Bottom Pair */}
              <line x1="10" y1="220" x2="60" y2="220" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="60" y1="240" x2="10" y2="240" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </g>

            {/* --- ResilientDB Backend --- */}
            <g transform="translate(670, 40)">
              <rect width="210" height="300" rx="16" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
              <text x="105" y="30" textAnchor="middle" className="text-xs font-bold fill-gray-500 uppercase tracking-widest" style={{fontSize: '12px', fontWeight: 700}}>ResilientDB</text>

              <g transform="translate(20, 100)">
                 {/* CLI Box */}
                 <rect x="0" y="0" width="170" height="70" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" filter="url(#shadow)" />
                 <text x="85" y="40" textAnchor="middle" className="text-xs font-bold fill-gray-900" style={{fontSize: '12px', fontWeight: 700}}>ResContract CLI</text>
              </g>

              <g transform="translate(20, 190)">
                 {/* GraphQL Server Box */}
                 <rect x="0" y="0" width="170" height="70" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" filter="url(#shadow)" />
                 <text x="85" y="40" textAnchor="middle" className="text-xs font-bold fill-gray-900" style={{fontSize: '12px', fontWeight: 700}}>GraphQL Server</text>
              </g>
            </g>

          </svg>
        </div>

        {/* Explanation Text */}
        <div className="mt-12 bg-warm-50 rounded-2xl p-8 border-l-4 border-peach-400">
          <h3 className="text-xl font-bold text-gray-900 mb-2">How it works</h3>
          <p className="text-gray-600 leading-relaxed">
            The architecture facilitates a seamless two-way communication channel. When a user issues a command like 
            <span className="italic text-gray-700 font-semibold"> "check the balance of account X"</span>, the AI agent interprets this intent and selects the appropriate tool exposed by the 
            <span className="font-semibold text-gray-900"> MCP Server</span>. The server's internal router then dispatches this request to the specific ResilientDB interface invoking the CLI for contract operations or the GraphQL endpoint for data retrieval and returns the structured result back to the AI for natural language synthesis.
          </p>
        </div>

      </div>
    </section>
  );
};
