import React from 'react';
import { Github, Twitter, Linkedin, Database } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-warm-100 pt-20 pb-10 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                <Database className="w-4 h-4" />
              </div>
              <span className="font-bold text-gray-900">ResDB MCP</span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Open source Model Context Protocol server for Apache ResilientDB.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/rahulkanagaraj786/incubator-resilientdb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-warm-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ResilientDB. Apache License 2.0.</p>
          <div className="flex gap-6">
            <a href="https://github.com/rahulkanagaraj786/incubator-resilientdb" className="hover:text-gray-900 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};