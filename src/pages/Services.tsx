import {
  Globe,
  Building2,
  Shield,
  Stethoscope,
  Wheat,
  Home,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "International Trade",
      description:
        "Global procurement, import-export services, logistics, and supply chain management connecting markets worldwide.",
      features: [
        "Global Procurement",
        "Import-Export Services",
        "Supply Chain Management",
        "Market Connection",
      ],
      gradient: "from-blue-500 to-blue-600",
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Building2,
      title: "Engineering & Construction",
      description:
        "Infrastructure development, civil engineering, and modern construction projects for public and private sectors.",
      features: [
        "Infrastructure Development",
        "Civil Engineering",
        "Construction Projects",
        "Project Management",
      ],
      gradient: "from-green-500 to-green-600",
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Shield,
      title: "Security & Intelligence",
      description:
        "Advanced security solutions, intelligence gathering, and risk assessment services for corporate and government clients.",
      features: [
        "Security Solutions",
        "Intelligence Gathering",
        "Risk Assessment",
        "Corporate Security",
      ],
      gradient: "from-red-500 to-red-600",
      image:
        "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Services",
      description:
        "Quality medical services, hospital management, and advanced treatment facilities with modern healthcare solutions.",
      features: [
        "Medical Services",
        "Hospital Management",
        "Advanced Treatment",
        "Healthcare Technology",
      ],
      gradient: "from-pink-500 to-pink-600",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Wheat,
      title: "Agriculture & Food",
      description:
        "Agricultural production, agro-processing, and sustainable farming solutions for food security and export markets.",
      features: [
        "Agricultural Production",
        "Agro-processing",
        "Sustainable Farming",
        "Export Solutions",
      ],
      gradient: "from-yellow-500 to-yellow-600",
      image:
        "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Home,
      title: "Real Estate Development",
      description:
        "Modern residential, commercial, and infrastructure property development projects across international markets.",
      features: [
        "Residential Development",
        "Commercial Projects",
        "Infrastructure Development",
        "Property Management",
      ],
      gradient: "from-purple-500 to-purple-600",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Global Standards",
      description: "ISO-compliant processes for quality and safety",
    },
    {
      icon: TrendingUp,
      title: "Cross-Border Expertise",
      description: "Multinational teams with local market knowledge",
    },
    {
      icon: Building2,
      title: "Strategic Partnerships",
      description: "Alliances with global leaders for innovation",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Adherence to international regulations",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {" "}
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Comprehensive solutions across diverse industries with global
              standards and local expertise, delivering excellence worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute top-6 left-6">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                              ></div>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LIVEN GROUP operates under a globally integrated business
              framework ensuring excellence across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional sectors to emerging markets, we deliver
              specialized solutions across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Trade & Commerce",
              "Engineering",
              "Construction",
              "Healthcare",
              "Agriculture",
              "Real Estate",
              "Security",
              "Technology",
              "Logistics",
              "Manufacturing",
              "Energy",
              "Infrastructure",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-sm font-medium text-gray-700">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our experts to discuss how LIVEN GROUP can deliver
            customized solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request Consultation
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
