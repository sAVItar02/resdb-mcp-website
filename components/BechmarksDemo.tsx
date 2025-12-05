import IntrospectGraphQLSchema from '../assets/IntrospectGraphQLSchema.png';
import BenchmarkThroughput from '../assets/BenchmarkThroughput.png';
import GetLogsOfSpecificReplica from '../assets/GetLogsOfSpecificReplica.png';
import GetConsensusMetrics from '../assets/GetConsensusMetrics.png';
import GetClientLogs from '../assets/GetClientLogs.png';
import ArchiveLogs from '../assets/ArchiveLogs.png';
import Monitoring from '../assets/Monitoring.jpeg';
import MonitoringVideo from '../assets/MonitoringVideo.mov';

const BechmarksDemoItems = [
    {
        title: 'Introspect the GraphQL Schema',
        description: 'Introspecting the ResilientDB GraphQL schema to dynamically discover available API types and operations.',
        image: IntrospectGraphQLSchema,
    },
    {
        title: 'Benchmark Throughput',
        description: 'Perform a stress test by sending concurrent batches of transactions to the system to measure throughput (TPS), latency, and stability under load.',
        image: BenchmarkThroughput,
    },
    {
        title: 'Get Logs of Specific Replica',
        description: 'Retrieve detailed logs from a specific replica to diagnose issues or monitor system performance.',
        image: GetLogsOfSpecificReplica,
    },
    {
        title: 'Get Consensus Metrics',
        description: 'Monitor the consensus state of the ResDB cluster, including view changes, sequence numbers, and primary ID assignments.',
        image: GetConsensusMetrics,
    },
    {
        title: 'Get Client Logs',
        description: 'Retrieve logs from the client to track client proxy health and activity.',
        image: GetClientLogs,
    },
    {
        title: 'Archive Logs',
        description: 'Archive all system logs and configurations into a timestamped ZIP file for debugging and state preservation',
        image: ArchiveLogs,
    },
    {
        title: 'Monitoring',
        description: 'Monitor the system health and performance of the ResilientDB cluster.',
        image: Monitoring,
    }
]

const BechmarksDemo = () => {
    return (
        <div className="space-y-24">
            {BechmarksDemoItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 shrink-0`}>
                <div className="flex-1 w-full shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warm-200 group shrink-0">
                    <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
                </div>
                <div className="flex-1 space-y-6 shrink-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 shrink-0">
                    {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed shrink-0">
                    {item.description}
                </p>
                <div className="h-1 w-20 bg-peach-400 rounded-full shrink-0 "></div>
                </div>
            </div>
            ))}

            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 mb-4'>Demo Video</h2>
                <div className='w-full max-w-2xl h-full rounded-2xl overflow-hidden shadow-2xl border border-warm-200'>
                    <video src={MonitoringVideo} controls className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out' />
                </div>
            </div>
        </div>
    )
}

export default BechmarksDemo