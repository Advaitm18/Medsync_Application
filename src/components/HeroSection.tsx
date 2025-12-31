import { ArrowRight } from "lucide-react";
import homeImg from "../assets/home.jpg";

export function HeroSection() {
  return (
    <section className="bg-[#003D5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl leading-tight">
              Your Health, Connected
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed">
              MedSync is India&apos;s digital health platform connecting
              patients, healthcare providers, and health organizations to
              improve healthcare delivery across the nation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-[#003D5C] rounded hover:bg-gray-100 transition flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition">
                <a href="https://abha.abdm.gov.in/abha/v3/register">ABHA Number</a>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={homeImg} 
                alt="Healthcare Professional"
                className="relative z-10 w-full h-[400px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
