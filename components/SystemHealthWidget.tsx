import { ChevronDown, DatabaseZap, Server, VectorSquare } from "lucide-react";
import { useState, useEffect } from "react";

interface HealthData {
    overall_status: 'healthy' | 'degraded' | 'down';
    components: {
        replicas: {
            status: string;
            count: number;
        };
        graphql_api: {
            status: string;
        };
        http_api: {
            status: string;
        };
    };
}

const SystemHealthWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [healthData, setHealthData] = useState<HealthData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchHealth = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/health');
            if (response.ok) {
                const data = await response.json();
                setHealthData(data);
            }
        } catch (error) {
            console.error("Failed to fetch health data:", error);
            // On error, set a "down" state or keep previous
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHealth();
        const interval = setInterval(fetchHealth, 5000);
        return () => clearInterval(interval);
    }, []);

    // Helper to determine status color/text
    const getStatus = (status: string | undefined) => {
        if (!status) return { style: LoadingStyles, text: "Loading..." };
        if (status === 'healthy') return { style: HealthyStyles, text: "Running" };
        return { style: UnhealthyStyles, text: "Not Running" };
    };

    const LoadingStyles = {
        icon: "w-5 h-5 text-peach-400 animate-pulse",
        text: "text-sm text-gray-500",
    };

    const HealthyStyles = {
        icon: "w-5 h-5 text-green-500",
        text: "text-sm text-gray-500",
    };

    const UnhealthyStyles = {
        icon: "w-5 h-5 text-red-500",
        text: "text-sm text-gray-500",
    };

    // Calculate overall health count for the badge
    const getHealthCount = () => {
        if (!healthData) return 0;
        let count = 0;
        if (healthData.components.replicas.status === 'healthy') count++;
        if (healthData.components.http_api.status === 'healthy') count++;
        if (healthData.components.graphql_api.status === 'healthy') count++;
        return count;
    };

    const healthCount = getHealthCount();
    const overallStatus = healthData?.overall_status || 'down';

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-md bg-white border border-warm-200 rounded-lg ${isOpen ? 'shadow-lg' : ''} z-20`}>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 animate-fade-in hover:bg-warm-50 transition-all duration-300 cursor-pointer w-full">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${loading ? 'bg-gray-300 animate-pulse' : overallStatus === 'healthy' ? 'bg-green-300' : overallStatus === 'down' ? 'bg-red-300' : 'bg-yellow-300'}`}></span>
                    ResilientDB: System {loading ? 'Checking...' : overallStatus === 'healthy' ? 'Healthy' : overallStatus === 'down' ? 'Unhealthy' : 'Partially Healthy'}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`relative flex flex-col gap-4 items-start justify-start px-6 ${isOpen ? 'h-[220px] py-8' : 'h-0 py-0'} transition-all duration-300 overflow-hidden`}>
                <h3 className="text-md font-medium text-gray-700 mb-2">System Health</h3>

                <div className="flex flex-col items-start justify-start gap-5 w-full">
                    {/* Replicas */}
                    <div className="flex items-center gap-4 w-full">
                        <DatabaseZap className={getStatus(healthData?.components.replicas.status).style.icon} />
                        <span className={getStatus(healthData?.components.replicas.status).style.text}>
                            Replicas {getStatus(healthData?.components.replicas.status).text}
                            {healthData?.components.replicas.count !== undefined && ` (${healthData.components.replicas.count}/5)`}
                        </span>
                    </div>

                    {/* HTTP Server */}
                    <div className="flex items-center gap-4 w-full">
                        <Server className={getStatus(healthData?.components.http_api.status).style.icon} />
                        <span className={getStatus(healthData?.components.http_api.status).style.text}>
                            HTTP Server {getStatus(healthData?.components.http_api.status).text}
                        </span>
                    </div>

                    {/* GraphQL Server */}
                    <div className="flex items-center gap-4 w-full">
                        <VectorSquare className={getStatus(healthData?.components.graphql_api.status).style.icon} />
                        <span className={getStatus(healthData?.components.graphql_api.status).style.text}>
                            GraphQL Server {getStatus(healthData?.components.graphql_api.status).text}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemHealthWidget;