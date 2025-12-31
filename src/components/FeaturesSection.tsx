import { Database, Lock, Globe, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: 'Unified Health Records',
      description: 'All your health information in one secure place'
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description: 'Bank-level encryption to protect your data'
    },
    {
      icon: Globe,
      title: 'Nationwide Access',
      description: 'Connect with healthcare providers across India'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant access to prescriptions and reports'
    }
  ];

  return (
    <section id="healthcare-providers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">
            Platform Features
          </h2>
          <p className="text-lg text-gray-600">
            Built on cutting-edge technology for secure and efficient healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#003D5C] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}