import { Database, Network, Key, Terminal} from 'lucide-react';
import { toast } from 'react-hot-toast';

export const About = () => {
  const handleCopy = () => {
    const serverConfig = `{
      "mcpServers": {
        "resilientdb": {
          "command": "python",
          "args": ["/absolute/path/to/ResilientDB-MCP/server.py"],
          "env": {
            "RESILIENTDB_GRAPHQL_URL": "http://localhost:8000/graphql",
            "RESILIENTDB_HTTP_URL": "http://localhost:18000"
          }
        }
      }
    }`;
    navigator.clipboard.writeText(serverConfig);
    toast.success('Server configuration copied to clipboard');
  };

  return (
    <section id="overview" className="py-24 bg-warm-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Concept Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-warm-200 to-peach-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warm-200 bg-white p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <div className="font-mono text-xs text-gray-400 mb-4"># Server Config</div>
              <div className="space-y-4 font-mono text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-peach-400 font-bold">&gt;&gt;&gt;</span>
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

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              The bridge between AI<br />
              and ResilientDB.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
              Apache ResilientDB (Incubating) offers a high-throughput yielding distributed ledger built upon scale-centric design principles to democratize and decentralize computation. Our MCP Server acts as a universal adapter, enabling AI agents to read and write directly to the ledger.
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

        {/* Setup Guide Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-warm-200 shadow-sm">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect to Claude Desktop</h3>
            <p className="text-gray-500">
              The MCP server is <span className="font-semibold text-gray-900">automatically started</span> by Claude Desktop once configured.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Steps 1 & 2 */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-sm">1</span>
                  <h4 className="font-semibold text-gray-900">Locate Config File</h4>
                </div>
                <div className="bg-warm-50 border border-warm-200 rounded-lg p-4 font-mono text-xs text-gray-600 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">macOS</span>
                    ~/Library/Application Support/Claude/claude_desktop_config.json
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">Windows</span>
                    %APPDATA%\Claude\claude_desktop_config.json
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">Linux</span>
                    ~/.config/Claude/claude_desktop_config.json
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-sm">2</span>
                  <h4 className="font-semibold text-gray-900">Get Absolute Path</h4>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-300 h-[174px] flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="text-green-400 mr-2">$</span>pwd
                    <div className="text-gray-500 mt-1">/Users/username/projects/ResilientDB-MCP</div>
                  </div>
                  <div>
                    <span className="text-green-400 mr-2">$</span>realpath server.py
                    <div className="text-gray-500 mt-1">/Users/username/projects/ResilientDB-MCP/server.py</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-sm">3</span>
                <h4 className="font-semibold text-gray-900">Add Server Configuration</h4>
              </div>
              <div className="relative group">
                <button onClick={() => handleCopy()} className="absolute top-4 right-4 p-2 rounded bg-gray-800 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs cursor-pointer hover:bg-gray-700 hover:text-white">
                  Copy JSON
                </button>
                <pre className="bg-gray-900 rounded-lg p-6 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto border border-gray-800">
{`{
  "mcpServers": {
    "resilientdb": {
      "command": "python",
      "args": ["/absolute/path/to/ResilientDB-MCP/server.py"],
      "env": {
        "RESILIENTDB_GRAPHQL_URL": "http://localhost:8000/graphql",
        "RESILIENTDB_HTTP_URL": "http://localhost:18000"
      }
    }
  }
}`}
                </pre>
              </div>
              <div className="flex flex-wrap items-start gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <span className="font-bold">Important:</span> 
                Replace <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 font-mono text-xs">/absolute/path/to/...</code> with the actual output from Step 2.
              </div>
            </div>

            {/* Steps 4 & 5 */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 border-t border-warm-200 pt-8">
              <div className="space-y-4">
                 <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-sm">4</span>
                  <h4 className="font-semibold text-gray-900">Restart Claude</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Quit Claude Desktop completely (Cmd+Q)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Restart the application
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Look for the plug icon in input bar
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-peach-100 text-peach-500 font-bold text-sm">5</span>
                  <h4 className="font-semibold text-gray-900">Test It Out</h4>
                </div>
                <div className="bg-white border border-warm-200 rounded-lg p-4 shadow-sm">
                   <div className="flex items-center gap-2 text-xs font-bold text-peach-400 uppercase tracking-wider mb-2">
                    <Terminal className="w-3 h-3" />
                    Prompt Claude
                   </div>
                   <p className="text-gray-800 italic text-sm">
                     "Store a key-value pair with key 'demo' and value 'Hello ResilientDB'"
                   </p>
                </div>
                <div className="bg-white border border-warm-200 rounded-lg p-4 shadow-sm">
                   <div className="flex items-center gap-2 text-xs font-bold text-peach-400 uppercase tracking-wider mb-2">
                    <Terminal className="w-3 h-3" />
                    Another Example
                   </div>
                   <p className="text-gray-800 italic text-sm">
                     "Get transaction details for transaction ID..."
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};