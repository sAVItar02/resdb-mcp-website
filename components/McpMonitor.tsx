import React, { useState, useEffect } from 'react';

interface PromptLog {
    id: string;
    tool: string;
    args: any;
    result: string;
    timestamp: string;
    duration: number;
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
        <section id="mcp-monitor" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        ResLens MCP Monitor
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Real-time monitoring of Model Context Protocol interactions
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Prompts</h3>
                        <div className="flex items-center space-x-2">
                            <span className={`inline-block w-3 h-3 rounded-full ${error ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {error ? 'Disconnected' : 'Live'}
                            </span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-gray-700/50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Time</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Tool</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Arguments</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Duration</th>
                                    <th className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Result</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {prompts.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                                            {loading ? 'Loading...' : 'No prompts recorded yet'}
                                        </td>
                                    </tr>
                                ) : (
                                    prompts.map((prompt) => (
                                        <tr key={prompt.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                                                {new Date(prompt.timestamp).toLocaleTimeString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                    {prompt.tool}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-mono text-xs">
                                                {JSON.stringify(prompt.args).substring(0, 50)}
                                                {JSON.stringify(prompt.args).length > 50 ? '...' : ''}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                                {(prompt.duration * 1000).toFixed(2)}ms
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
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
