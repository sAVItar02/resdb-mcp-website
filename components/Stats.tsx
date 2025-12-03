import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Transactions/Sec', value: '85k+' },
  { label: 'Nodes Scaled', value: '100+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Latency', value: '<10ms' },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 border-y border-warm-200 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300 ease-out">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};