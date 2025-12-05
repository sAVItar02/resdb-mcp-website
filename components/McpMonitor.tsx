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
    resdb_metrics?: {
        view: number | string;
        sequence: number | string;
        primary_id: number | string;
        active_replicas: number;
    };
}

interface HealthData {
    overall_status: 'healthy' | 'degraded' | 'down';
    timestamp: string;
    components: {
        replicas: {
            status: string;
            count: number;
            message: string;
        };
        graphql_api: {
            status: string;
            latency?: number;
            error?: string;
        };
        http_api: {
            status: string;
            latency?: number;
            error?: string;
        };
    };
}

export const McpMonitor: React.FC = () => {
    const [prompts, setPrompts] = useState<PromptLog[]>([]);
    const [health, setHealth] = useState<HealthData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPrompts = async () => {
        try {
            const [promptsRes, healthRes] = await Promise.all([
                fetch('http://localhost:3000/api/v1/mcp/prompts'),
                fetch('http://localhost:3000/api/v1/health')
            ]);

            if (promptsRes.ok) {
                const data = await promptsRes.json();
                setPrompts(data);
            }

            if (healthRes.ok) {
                const healthData = await healthRes.json();
                setHealth(healthData);
            }

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
                        <h3 className="text-lg font-semibold text-gray-900">System Health & Recent Prompts</h3>
                        <div className="flex items-center space-x-2">
                            <span className={`inline-block w-3 h-3 rounded-full ${error ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></span>
                            <span className="text-sm text-gray-500">
                                {error ? 'Disconnected' : 'Live'}
                            </span>
                        </div>
                    </div>

                    {/* Health Status */}
                    {health && (
                        <div className="bg-white px-6 py-4 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className={`p-4 rounded-lg border ${health.components.replicas.status === 'healthy' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-xs font-semibold uppercase text-gray-600">Replicas</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${health.components.replicas.status === 'healthy' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {health.components.replicas.status}
                                    </span>
                                </div>
                                <p className="text-lg font-bold text-gray-800">{health.components.replicas.count} / 5</p>
                                <p className="text-xs text-gray-500">{health.components.replicas.message}</p>
                            </div>

                            <div className={`p-4 rounded-lg border ${health.components.graphql_api.status === 'healthy' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-xs font-semibold uppercase text-gray-600">GraphQL API</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${health.components.graphql_api.status === 'healthy' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {health.components.graphql_api.status}
                                    </span>
                                </div>
                                <p className="text-lg font-bold text-gray-800">Port 8000</p>
                                <p className="text-xs text-gray-500">
                                    {health.components.graphql_api.latency ? `${health.components.graphql_api.latency}ms latency` : health.components.graphql_api.error}
                                </p>
                            </div>

                            <div className={`p-4 rounded-lg border ${health.components.http_api.status === 'healthy' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-xs font-semibold uppercase text-gray-600">HTTP API</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${health.components.http_api.status === 'healthy' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {health.components.http_api.status}
                                    </span>
                                </div>
                                <p className="text-lg font-bold text-gray-800">Port 18000</p>
                                <p className="text-xs text-gray-500">
                                    {health.components.http_api.latency ? `${health.components.http_api.latency}ms latency` : health.components.http_api.error}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Analytics Summary */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase font-semibold">Total Prompts</p>
                            <p className="text-2xl font-bold text-gray-800">{prompts.length}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase font-semibold">Avg Duration</p>
                            <p className="text-2xl font-bold text-blue-600">
                                {prompts.length > 0
                                    ? (prompts.reduce((acc, p) => acc + p.duration, 0) / prompts.length).toFixed(2)
                                    : '0.00'} s
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase font-semibold">Latest View</p>
                            <p className="text-2xl font-bold text-purple-600">
                                {prompts.length > 0 && prompts[0].resdb_metrics?.view
                                    ? prompts[0].resdb_metrics.view
                                    : '-'}
                            </p>
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
                                                {prompt.duration.toFixed(2)}s
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {prompt.metrics ? (
                                                    <div className="flex space-x-2">
                                                        <span className={`text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 ${Number(prompt.metrics.cpu) > 8 ? 'bg-red-100' : 'bg-green-100'}`}>
                                                            CPU: {Number(prompt.metrics.cpu).toFixed(2)}%
                                                        </span>
                                                        <span className={`text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 ${Number(prompt.metrics.memory) > 10 ? 'bg-red-100' : 'bg-green-100'}`}>
                                                            Mem: {Number(prompt.metrics.memory).toFixed(2)}%
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
