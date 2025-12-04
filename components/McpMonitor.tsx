import React, { useState, useEffect } from 'react';

interface PromptLog {
    id: string;
    tool: string;
    args: any;
    result: string;
    timestamp: string;
    duration: number;
    metrics?: {
        cpu: string;
        memory: string;
    };
}

export const McpMonitor: React.FC = () => {
    const [prompts, setPrompts] = useState<PromptLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPrompts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/mcp/prompts');
            if (!response.ok) {
                throw new Error('Failed to fetch prompts');
            }
            const data = await response.json();
            setPrompts(data);
            setError(null);
        } catch (err) {
            setError('Failed to connect to ResLens Middleware');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrompts();
        const interval = setInterval(fetchPrompts, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="mcp-monitor" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        ResLens MCP Monitor
                    </h2>
                    <p className="text-xl text-gray-500">
                        Real-time monitoring of Model Context Protocol interactions
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Prompts</h3>
                        <div className="flex items-center space-x-2">
                            <span className={`inline-block w-3 h-3 rounded-full ${error ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></span>
                            <span className="text-sm text-gray-500">
                                {error ? 'Disconnected' : 'Live'}
                            </span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Time</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Tool</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Arguments</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Duration</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Metrics (CPU/Mem)</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500">Result</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {prompts.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                            {loading ? 'Loading...' : 'No prompts recorded yet'}
                                        </td>
                                    </tr>
                                ) : (
                                    prompts.map((prompt) => (
                                        <tr key={prompt.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                                {new Date(prompt.timestamp).toLocaleTimeString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {prompt.tool}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-mono text-xs">
                                                {JSON.stringify(prompt.args).substring(0, 50)}
                                                {JSON.stringify(prompt.args).length > 50 ? '...' : ''}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {(prompt.duration * 1000).toFixed(2)}ms
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {prompt.metrics ? (
                                                    <div className="flex space-x-2">
                                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                                            CPU: {prompt.metrics.cpu}%
                                                        </span>
                                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                                            Mem: {prompt.metrics.memory}%
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-gray-400">N/A</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                <div className="max-w-xs truncate" title={prompt.result}>
                                                    {prompt.result}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};
