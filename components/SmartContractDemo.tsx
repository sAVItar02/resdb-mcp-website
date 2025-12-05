import DemoVideo from '../assets/SmartContractVideo.mp4';
import { useEffect, useState } from 'react';
import CheckHealthSC from '../assets/CheckHealthSC.png';
import CheckHealthSCFail from '../assets/CheckHealthSCFail.png';
import CreateNewAccountSC from '../assets/CreateNewAccountSC.png';
import CompileSoliditySC from '../assets/CompileSoliditySC.png';
import DeployCreatedContractSC from '../assets/DeployCreatedContractSC.png';
import ExecuteFunctionsFromContractSC from '../assets/ExecuteFunctionsFromContractSC.png';
import ExecuteFunctionsFromContract2SC from '../assets/ExecuteFunctionsFromContract2SC.png';

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images.length, currentIndex]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-warm-200 group shrink-0">
      <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
      <img
        src={images[currentIndex]}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {hasMultipleImages && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={goPrev}
            className="w-[30px] h-[30px] flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow focus:outline-none"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={goNext}
            className="w-[30px] h-[30px] flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow focus:outline-none"
          >
            ›
          </button>
          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SmartContractDemoItems = [
    {
        title: 'Chech System Health',
        description: 'Check the system health of the ResilientDB cluster.',
        image: [CheckHealthSC, CheckHealthSCFail],
    },
    {
        title: 'Create a New Account',
        description: 'Create a new account on the ResilientDB cluster.',
        image: [CreateNewAccountSC],
    },
    {
        title: 'Compile the Solidity Contract',
        description: 'Compile the Solidity contract using the MCP client.',
        image: [CompileSoliditySC],
    },
    {
        title: 'Deploy the Created Contract',
        description: 'Deploy the created contract on the ResilientDB cluster using the MCP client.',
        image: [DeployCreatedContractSC],
    },
    {
        title: 'Execute Functions from the Contract',
        description: 'Execute functions from the contract using the MCP client.',
        image: [ExecuteFunctionsFromContractSC, ExecuteFunctionsFromContract2SC],
    },
]

const SmartContractDemo = () => {
  return (
    <div className='space-y-24'>
        {SmartContractDemoItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 shrink-0`}>
                <div className="flex-1 w-full shrink-0">
                <ImageCarousel images={item.image} alt={item.title} />
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
                <video src={DemoVideo} controls className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out' />
            </div>
        </div>
    </div>
  )
}

export default SmartContractDemo