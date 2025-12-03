import React, { useState } from 'react';
import { Menu, X, Database, Github } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  scrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Metrics', href: '#stats' },
  { label: 'Capabilities', href: '#features' },
  { label: 'Docs', href: '#footer' },
  { label: 'Team', href: '#collaborators' },
];

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-50/90 backdrop-blur-md border-b border-warm-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="shrink-0">
            <a href="#" className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                <Database className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline-block">ResDB <span className="text-peach-400">MCP</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://github.com/sAVItar02/resdb-mcp-website" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-warm-50 border-b border-warm-200 p-6 md:hidden shadow-lg animate-fade-in-down">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="my-2 border-warm-200" />
            <a 
              href="https://github.com/sAVItar02/resdb-mcp-website"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};