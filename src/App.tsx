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
 MedSync is part of the National Digital Health Mission, aimed at creating a digital health ecosystem in India
            </p>
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

/*
import React from "react";
import HospitalMap from "./components/HospitalMap";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1>Nearby Hospitals</h1>
      <HospitalMap />
    </div>
  );
};

export default App;
*/