import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#003D5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="#003D5C" className="w-5 h-5">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
            </svg>
          </div>
          <div>
            <span className="text-xl font-bold">MedSync</span>
            <p className="text-xs text-blue-200 mt-0.5 opacity-80">Digital Health India</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-2.5 group">
            <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm font-medium text-white/90 hover:text-white transition-colors">support@medsync.in</span>
          </div>
          <div className="flex items-center space-x-2.5 group">
            <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm font-medium text-white/90 hover:text-white transition-colors">1800-474-1800 (Toll Free)</span>
          </div>
          <div className="flex items-center space-x-2.5 group">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm font-medium text-white/90 hover:text-white transition-colors">National Health Authority, New Delhi</span>
          </div>
        </div>

        <div className="flex gap-2 pt-8 border-t border-white/20">
          <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-200 border border-white/10">
            <Facebook className="w-4.5 h-4.5 text-white/90" />
          </a>
          <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-200 border border-white/10">
            <Twitter className="w-4.5 h-4.5 text-white/90" />
          </a>
          <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-200 border border-white/10">
            <Linkedin className="w-4.5 h-4.5 text-white/90" />
          </a>
          <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/15 hover:scale-105 transition-all duration-200 border border-white/10">
            <Youtube className="w-4.5 h-4.5 text-white/90" />
          </a>
        </div>
      </div>
    </footer>
  );
}

