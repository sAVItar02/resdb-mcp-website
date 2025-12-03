import React from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    alt: "Network Infrastructure"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    alt: "Hardware Nodes"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    alt: "Data Analytics"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-warm-50 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-4">
            System Visualization
          </h2>
          <div className="h-1 w-12 bg-gray-900 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-warm-200 group cursor-pointer">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};