import DemoVideo from './../assets/SmartContractVideo.mov';

const SmartContractDemo = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 mb-4'>Demo Video</h2>
            <div className='w-full max-w-2xl h-full rounded-2xl overflow-hidden shadow-2xl border border-warm-200'>
                <video src={DemoVideo} controls className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out' />
            </div>
        </div>
    </div>
  )
}

export default SmartContractDemo