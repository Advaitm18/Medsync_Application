import { ArrowRight } from "lucide-react";
import homeImg from "../assets/home.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY4OTgzMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        }}
      />

      {/* Blue overlay to get that merged look */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003D5C]/95 via-[#00476C]/90 to-[#005580]/95" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>National Digital Health Mission</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Your Health Records,
                <br />
                <span className="text-cyan-200">Digitally Connected</span>
              </h1>

              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                MedSync is India&apos;s digital health platform connecting patients,
                healthcare providers, and health organizations to improve healthcare
                delivery across the nation.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-[#003D5C] rounded-md hover:bg-gray-100 transition flex items-center gap-2 text-sm font-semibold shadow-sm">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://abha.abdm.gov.in/abha/v3/register"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-white/70 text-white rounded-md hover:bg-white/10 transition text-sm font-semibold"
                >
                  ABHA Number
                </a>
              </div>
            </div>

            {/* Right column can stay empty or hold another element */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
