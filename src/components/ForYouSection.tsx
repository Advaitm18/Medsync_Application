import { Users, Stethoscope, Building2 } from 'lucide-react';

export function ForYouSection() {
  const audiences = [
    {
      icon: Users,
      title: 'For Patients & Consumers',
      description: 'Access your health records, book appointments, and manage your health journey digitally.',
      features: [
        'Create ABHA (Ayushman Bharat Health Account)',
        'Access health records anytime, anywhere',
        'Share records securely with healthcare providers',
        'Prescription management and medicine reminders',
      ],
      color: 'bg-blue-600',
    },
    {
      icon: Stethoscope,
      title: 'For Healthcare Providers',
      description: 'Streamline patient care with digital health records and integrated tools.',
      features: [
        'Access patient health records with consent',
        'Digital prescriptions and lab orders',
        'Telemedicine capabilities',
        'Secure messaging with patients',
      ],
      color: 'bg-green-600',
    },
    {
      icon: Building2,
      title: 'For Health Facilities',
      description: "Connect your facility to India's digital health ecosystem.",
      features: [
        'Register as a Health Facility',
        'Integrate with national health systems',
        'Manage facility and staff information',
        'Access to health analytics and reports',
      ],
      color: 'bg-purple-600',
    },
  ];

  return (
    <section id="for-you" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Who We Serve</h2>
          <p className="text-lg text-gray-600">
            MedSync brings together all stakeholders in India's healthcare ecosystem
          </p>
        </div> 
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`${audience.color} p-8 text-white rounded-b-xl`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{audience.title}</h3>
                  <p className="text-blue-100 leading-relaxed opacity-90 max-w-md">
                    {audience.description}
                  </p>
                </div>
                <div className="p-8 -mt-4">
                  <ul className="space-y-4">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <svg 
                          className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 leading-relaxed text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
