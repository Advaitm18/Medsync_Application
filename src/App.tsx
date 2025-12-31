import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HealthcareServices } from './components/HealthcareServices';
import { ForYouSection } from './components/ForYouSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <HealthcareServices />
        <ForYouSection />
        <FeaturesSection />

        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-3">
              About MedSync
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              just impressive well built para with high level english
MedSync stands as India's vanguard in digital health innovation, seamlessly orchestrating the Ayushman Bharat Digital Mission's transformative vision. Through its pioneering ABHA ecosystem, we empower 1.4 billion citizens with a singular, lifelong digital health identity unifying prescriptions, diagnostics, and clinical narratives across a vast continuum of providers in an impregnable fortress of consent-driven interoperability. With unwavering ABDM compliance and HIPAA-grade encryption, MedSync transcends mere connectivity, architecting a resilient health backbone that catalyzes universal access, telemedicine revolutions, and data sovereignty for patients, practitioners, and institutions alike—heralding an era where healthcare transcends geography, bureaucracy, and legacy silos.</p>
          </div>
        </section>

        <section id="news" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl text-gray-900 mb-3">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed about the latest developments in digital health
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}