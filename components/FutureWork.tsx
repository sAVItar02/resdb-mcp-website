const FutureWork = () => {
  return (
    <section id="future-work" className="py-24 bg-white border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Future Work
          </h2>
        </div>
        <ul className="space-y-4 list-disc! list-inside! text-gray-700">
            <li className="block">⭐ <b>Better Context Management:</b> Add session tracking and summarization to reduce hallucinations in long agent conversations.</li>
            <li className="block">⭐ <b>Stronger Error Handling:</b> Improve validation, structured error messages, and consensus-wait logic for contract and transaction workflows.</li>
            <li className="block">⭐ <b>Security & Enterprise Features:</b> Add authentication, permissions, and deployment-ready packaging (Docker/K8s).</li>
            <li className="block">⭐ <b>Developer & Agent Tooling:</b> Provide an SDK, example workflows, and templates for common blockchain use cases.</li>
        </ul>
      </div>
    </section>
  )
}

export default FutureWork