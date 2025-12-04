import { ChevronDown, X, DatabaseZap, Server, VectorSquare } from "lucide-react";
import { useState } from "react";

const SystemHealthWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [healthStatus, setHealthStatus] = useState({
        replicas: "healthy",
        http: "healthy",
        graphql: "healthy",
        healthCount: 3,
    });

    const LoadingStyles = {
        icon: "w-5 h-5 text-peach-400 animate-pulse", 
        text: "text-sm text-gray-500",
    }

    const HealthyStyles = {
        icon: "w-5 h-5 text-green-500", 
        text: "text-sm text-gray-500",
    }

    const UnhealthyStyles = {
        icon: "w-5 h-5 text-red-500", 
        text: "text-sm text-gray-500",
    }

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-md bg-white border border-warm-200 rounded-lg ${isOpen ? 'shadow-lg' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 animate-fade-in hover:bg-warm-50 transition-all duration-300 cursor-pointer w-full">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${healthStatus.healthCount === 3 ? 'bg-green-300' : healthStatus.healthCount === 0 ? 'bg-red-300' : 'bg-yellow-300'}`}></span>
                    ResilientDB: System {healthStatus.healthCount === 3 ? 'Healthy' : healthStatus.healthCount === 0 ? 'Unhealthy' : 'Partially Healthy'}
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`relative flex flex-col gap-4 items-start justify-start px-6 ${isOpen ? 'h-[220px] py-8' : 'h-0 py-0'} transition-all duration-300 overflow-hidden`}>
                <h3 className="text-md font-medium text-gray-700 mb-2">System Health</h3>

                <div className="flex flex-col items-start justify-start gap-5">
                    <div className="flex items-center gap-4">
                        <DatabaseZap className={`${healthStatus.replicas === "healthy" ? HealthyStyles.icon : healthStatus.replicas === "unhealthy" ? UnhealthyStyles.icon : LoadingStyles.icon}`} />
                        <span className={`${healthStatus.replicas === "healthy" ? HealthyStyles.text : healthStatus.replicas === "unhealthy" ? UnhealthyStyles.text : LoadingStyles.text}`}>Replicas {healthStatus.replicas === "healthy" ? 'Running' : healthStatus.replicas === "unhealthy" ? 'Not Running' : 'Loading...'}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Server className={`${healthStatus.http === "healthy" ? HealthyStyles.icon : healthStatus.http   === "unhealthy" ? UnhealthyStyles.icon : LoadingStyles.icon}`} />
                        <span className={`${healthStatus.http === "healthy" ? HealthyStyles.text : healthStatus.http === "unhealthy" ? UnhealthyStyles.text : LoadingStyles.text}`}>HTTP Server {healthStatus.http === "healthy" ? 'Running' : healthStatus.http === "unhealthy" ? 'Not Running' : 'Loading...'}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <VectorSquare className={`${healthStatus.graphql === "healthy" ? HealthyStyles.icon : healthStatus.graphql === "unhealthy" ? UnhealthyStyles.icon : LoadingStyles.icon}`} />
                        <span className={`${healthStatus.graphql === "healthy" ? HealthyStyles.text : healthStatus.graphql === "unhealthy" ? UnhealthyStyles.text : LoadingStyles.text}`}>GraphQL Server {healthStatus.graphql === "healthy" ? 'Running' : healthStatus.graphql === "unhealthy" ? 'Not Running' : 'Loading...'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemHealthWidget