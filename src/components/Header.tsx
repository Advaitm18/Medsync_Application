import { Search, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ta,te,kn,ml,mr,gu,bn,pa,or,ur,as,ksm,gom,mni-mtei,sa,sd,bodo,snthl,mai,doi,mizo", 
          layout:
            window.google.translate.TranslateElement
              .InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); 

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-[#003D5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-xs">
              <a
                href="https://mohfw.gov.in/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministry of Health &amp; Family Welfare
              </a>
              <a
                href="https://nha.gov.in/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Health Authority
              </a>
            </div>
            <div
              id="google_translate_element"
              className="text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#003D5C] rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-[#003D5C]">MedSync</span>
                <span className="text-xs text-gray-600">
                  Digital Health India
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("for-you")}
                className="text-gray-700 hover:text-[#003D5C] transition text-sm"
              >
                For You
              </button>
              <button
                onClick={() => scrollToSection("healthcare")}
                className="text-gray-700 hover:text-[#003D5C] transition text-sm"
              >
                Healthcare Providers
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-gray-700 hover:text-[#003D5C] transition text-sm"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#003D5C] transition text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-gray-700 hover:text-[#003D5C] transition text-sm"
              >
                News
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded transition"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003D5C]"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
