import { MapPin, Search, FileText } from 'lucide-react';

export function HealthcareServices() {
  const services = [
    {
      icon: MapPin,
      title: 'Find Hospital',
      description: 'Locate healthcare facilities near you',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Search,
      title: 'Health Schemes',
      description: 'Explore Ayushman Bharat and other schemes',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: FileText,
      title: 'Health Records',
      description: 'Access your medical history anytime',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">
            Healthcare Services
          </h2>
          <p className="text-lg text-gray-600">
            Find nearby hospitals and explore government health schemes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer"
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
