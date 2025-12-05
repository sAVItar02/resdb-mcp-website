
import SetKeyGraphQL from '../assets/SetKeyGraphQL.png';
import GetKeyGraphQL from '../assets/GetKeyGraphQL.png';
import GetTransactionGraphQL from '../assets/GETTransactionGraphQL.png';
import PostTransactionGraphQL from '../assets/POSTTransactionGraphQL.png';
import PostTransactionGraphQLAutomatic from '../assets/POSTTransactionGraphQLAutomatic.png';
import TransactionAnalysis from '../assets/Analysis.png';
import DemoVideo from '../assets/GraphQLVideo.mp4';

const analysisSnippet = <div>
    <div className="flex flex-col items-start justify-start gap-2">
        <span className='text-gray-900 font-semibold'>Example</span>
        <pre className='max-w-full whitespace-pre-wrap bg-warm-50 rounded-lg p-4 border border-warm-200 wrap-break-words'>
            <code className='text-gray-900 font-mono text-sm max-w-full wrap-break-words'>
                7c4ad839bd7943d45b1667ce2f9100d62e71d1cc6e8072c862f3bc22093b7878, invalid-id-123, 55bc8cd94c2dc8553ead0931297d2df09b41d9b614ccf50ce3efd14dd7552f81
            </code>
        </pre>
    </div>
</div>

const graphQLDemoItems = [
    {
      title: "GraphQL: Set Key",
      description: "Set a key-value pair in the ResilientDB database.",
      image: SetKeyGraphQL
    },
    {
      title: "GraphQL: Get Key",
      description: "Get a key-value pair from the ResilientDB database.",
      image: GetKeyGraphQL
    },
    {
      title: "GraphQL: POST Transaction (Manual)",
      description: "Post a transaction to the ResilientDB database with manual key generation.",
      image: PostTransactionGraphQL
    },
    {
      title: "GraphQL: POST Transaction (Automatic)",
      description: "Post a transaction to the ResilientDB database with automatic key generation.",
      image: PostTransactionGraphQLAutomatic
    },
    {
      title: "GraphQL: Get Transaction",
      description: "Get a key-value pair from the ResilientDB database.",
      image: GetTransactionGraphQL
    },
    {
      title: "GraphQL: Transaction Analysis",
      description: `Get a breakdown of the transactions that have been processed by the ResilientDB database.`,
      snippet: analysisSnippet,
      image: TransactionAnalysis
    }
];

const GraphQLDemo = () => {
    return (
        <div className="space-y-24">
            {graphQLDemoItems.map((item, index) => (
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
                    {item.snippet && <div className="mt-4">{item.snippet}</div>}
                </p>
                <div className="h-1 w-20 bg-peach-400 rounded-full shrink-0 "></div>
                </div>
            </div>
            ))}

            <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 mb-4'>Demo Video</h2>
                <div className='w-full max-w-2xl h-full rounded-2xl overflow-hidden shadow-2xl border border-warm-200'>
                    <video src={DemoVideo} controls className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out' />
                </div>
            </div>
      </div>
    )
}

export default GraphQLDemo