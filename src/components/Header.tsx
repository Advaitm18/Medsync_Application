import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#003D5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-xs">
              <a href="#" className="hover:underline">Ministry of Health & Family Welfare</a>
              <a href="#" className="hover:underline">National Health Authority</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#003D5C] rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-[#003D5C]">MedSync</div>
                <div className="text-[10px] text-gray-600 leading-tight">Digital Health India</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('for-you')}
                className="text-sm text-gray-700 hover:text-[#003D5C] flex items-center gap-1"
              >
                For You
                <ChevronDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('healthcare-services')}
                className="text-sm text-gray-700 hover:text-[#003D5C] flex items-center gap-1"
              >
                Healthcare Providers
                <ChevronDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-sm text-gray-700 hover:text-[#003D5C] flex items-center gap-1"
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-700 hover:text-[#003D5C]"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-sm text-gray-700 hover:text-[#003D5C]"
              >
                News
              </button>
            </nav>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-[#003D5C]"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {searchOpen && (
            <div className="pb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003D5C]"
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
