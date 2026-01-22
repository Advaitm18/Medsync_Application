import { MapPin, Search, FileText, X } from 'lucide-react';
import { useState } from 'react';

export function HealthcareServices() {
  const [showMap, setShowMap] = useState(false);
  const [showSchemes, setShowSchemes] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(0);

  // Government health schemes
  const schemes = [
    {
      name: 'Ayushman Bharat - PM-JAY',
      shortDesc: 'National Health Protection Scheme',
      coverage: '₹5 Lakh per family per year',
      beneficiaries: '50 Crore+',
      eligibility: 'Economically vulnerable families',
      description: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world\'s largest health insurance scheme providing coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization. It covers over 50 crore beneficiaries from vulnerable families.',
      benefits: [
        'Cashless treatment at empanelled hospitals',
        'Coverage for 1,393 procedures',
        'No cap on family size and age',
        'Pre and post hospitalization expenses covered'
      ]
    },
    {
      name: 'Central Government Health Scheme (CGHS)',
      shortDesc: 'Health Insurance for Central Govt Employees',
      coverage: 'Comprehensive medical facilities',
      beneficiaries: '40 Lakh+',
      eligibility: 'Central Government employees and pensioners',
      description: 'CGHS provides comprehensive medical care facilities to Central Government employees, pensioners and their dependants residing in CGHS covered cities. The scheme provides allopathic as well as AYUSH treatment.',
      benefits: [
        'Outpatient and inpatient treatment',
        'AYUSH treatment facilities',
        'Diagnostic services',
        'Emergency medical care'
      ]
    },
    {
      name: 'Employees\' State Insurance (ESI)',
      shortDesc: 'Social Security for Workers',
      coverage: 'Medical and cash benefits',
      beneficiaries: '3.6 Crore+',
      eligibility: 'Employees earning up to ₹21,000/month',
      description: 'ESI provides socio-economic protection to worker population and their dependants covered under the scheme. It includes full medical care for employees and their families, cash benefits during sickness, maternity, and temporary or permanent disablement.',
      benefits: [
        'Full medical care for self and family',
        'Sickness benefit at 70% of wages',
        'Maternity benefit',
        'Disablement benefit'
      ]
    },
    {
      name: 'Rashtriya Swasthya Bima Yojana (RSBY)',
      shortDesc: 'Health Insurance for BPL Families',
      coverage: '₹30,000 per family per year',
      beneficiaries: '10 Crore+',
      eligibility: 'Below Poverty Line families',
      description: 'RSBY provides health insurance coverage to Below Poverty Line families for hospitalization. The scheme aims to protect BPL households from financial liabilities arising out of health shocks that involve hospitalization.',
      benefits: [
        'Cashless hospitalization',
        'Coverage for pre-existing conditions',
        'Transport allowance',
        'Smart card for identification'
      ]
    },
    {
      name: 'Janani Suraksha Yojana (JSY)',
      shortDesc: 'Safe Motherhood Intervention',
      coverage: 'Cash assistance for institutional delivery',
      beneficiaries: '1 Crore+ annually',
      eligibility: 'Pregnant women from poor families',
      description: 'JSY is a safe motherhood intervention under the National Health Mission. It promotes institutional delivery among poor pregnant women. The scheme integrates cash assistance with delivery and post-delivery care.',
      benefits: [
        'Cash assistance for delivery',
        'Free delivery in government facilities',
        'Post-natal care',
        'Nutrition support'
      ]
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: 'Find Hospital',
      description: 'Locate healthcare facilities near you',
      color: 'bg-blue-50 text-blue-600',
      onClick: () => setShowMap(true)
    },
    {
      icon: Search,
      title: 'Health Schemes',
      description: 'Explore Ayushman Bharat and other schemes',
      color: 'bg-blue-50 text-blue-600',
      onClick: () => setShowSchemes(true)
    },
    {
      icon: FileText,
      title: 'Health Records',
      description: 'Access your medical history anytime',
      color: 'bg-blue-50 text-blue-600',
      onClick: () => {}
    }
  ];

  return (
    <section id="healthcare-services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
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
                onClick={service.onClick}
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

      {/* Map Modal - Empty */}
      {showMap && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[700px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl text-gray-900">Find Hospital</h3>
                <p className="text-sm text-gray-600">Locate healthcare facilities near you</p>
              </div>
              <button
                onClick={() => setShowMap(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Empty Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Empty content area */}
            </div>
          </div>
        </div>
      )}

      {/* Schemes Modal */}
      {showSchemes && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[700px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl text-gray-900">Health Schemes</h3>
                <p className="text-sm text-gray-600">Explore Ayushman Bharat and other schemes</p>
              </div>
              <button
                onClick={() => setShowSchemes(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Scheme List */}
              <div className="w-80 border-r overflow-y-auto">
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Government Health Schemes</h4>
                  <div className="space-y-2">
                    {schemes.map((scheme, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedScheme(index)}
                        className={`p-3 rounded-lg cursor-pointer transition ${
                          selectedScheme === index
                            ? 'bg-blue-50 border-2 border-blue-600'
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <Search className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            selectedScheme === index ? 'text-blue-600' : 'text-gray-600'
                          }`} />
                          <div>
                            <h5 className="font-semibold text-gray-900 text-sm">{scheme.name}</h5>
                            <p className="text-xs text-gray-600 mt-1">{scheme.shortDesc}</p>
                            <p className="text-xs text-gray-500 mt-1">{scheme.coverage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scheme Details */}
              <div className="flex-1 relative overflow-y-auto">
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900">{schemes[selectedScheme].name}</h4>
                  <p className="text-base text-gray-600 mt-2">{schemes[selectedScheme].shortDesc}</p>
                  
                  {/* Coverage Info Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-xs text-gray-600 font-medium">Coverage Amount</p>
                      <p className="text-lg font-bold text-blue-600 mt-1">{schemes[selectedScheme].coverage}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-xs text-gray-600 font-medium">Beneficiaries</p>
                      <p className="text-lg font-bold text-green-600 mt-1">{schemes[selectedScheme].beneficiaries}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <p className="text-xs text-gray-600 font-medium">Eligibility</p>
                      <p className="text-sm font-semibold text-purple-600 mt-1">{schemes[selectedScheme].eligibility}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-gray-900">About the Scheme</h5>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">{schemes[selectedScheme].description}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h5>
                    <div className="space-y-2">
                      {schemes[selectedScheme].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Fixed at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                      Apply Now
                    </button>
                    <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}