import { useState } from "react";
import { Building2, Globe, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";

const SisterConcerns = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const companies = [
    // {
    //   id: 2,
    //   name: "Liven International Ltd.",
    //   description:
    //     "Engaged in large-scale international business operations, focusing on global procurement, logistics, and supply chain management.",
    //   country: "bangladesh",
    //   icon: Building2,
    //   gradient: "from-green-500 to-green-600",
    //   category: "Logistics",
    // },
    {
      id: 3,
      name: "Liven International Merchant Ltd.",
      description:
        "A leading merchant company offering diverse product lines, from industrial goods to consumer products, across international markets.",
      country: "bangladesh",
      icon: "https://i.postimg.cc/QdbmWYP1/livenbd.jpg",
      gradient: "from-purple-500 to-purple-600",
      category: "Merchant",
    },
    {
      id: 4,
      name: "Liven Engineering & Developers Ltd.",
      description:
        "A trusted name in infrastructure development, civil engineering, and modern construction projects for both public and private sectors.",
      country: "bangladesh",
      icon: "https://i.postimg.cc/SxX2G0z3/led.jpg",
      gradient: "from-orange-500 to-orange-600",
      category: "Real State",
      website: "https://www.led.livengroupbd.com",
    },
    {
      id: 5,
      name: "Max Merchant Ltd.",
      description:
        "A dynamic trading company providing reliable commercial and merchant services with a focus on sustainable business practices.",
      country: "bangladesh",
      icon: "https://i.postimg.cc/9f9nwYdh/ax.jpg",
      gradient: "from-teal-500 to-teal-600",
      category: "Trading",
      website: "https://www.max.livengroupbd.com",
    },
    {
      id: 6,
      name: "Xavier Corporation",
      description:
        "Engaged in technology, consultancy, and commercial services to support global business operations.",
      country: "bangladesh",
      icon: "https://i.postimg.cc/430QfbRH/xavier-corr.jpg",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Real State",
    },
    {
      id: 7,
      name: "Global Secure Intelligence (GIS)",
      description:
        "Security & Research Firm providing advanced security solutions, intelligence gathering, and risk assessment services for corporate, government, and international clients.",
      country: "bangladesh",
      icon: "https://i.postimg.cc/Jzw3D5tM/lobal-s.jpg",
      gradient: "from-red-500 to-red-600",
      category: "Security",
    },
    {
      id: 8,
      name: "Phnom Penh Global Merchant Co. Ltd.",
      description:
        "A Cambodia-based trading hub for regional and international commerce in Southeast Asia.",
      country: "cambodia",
      icon: "https://i.postimg.cc/L6PLpgD7/phn.jpg",
      gradient: "from-blue-500 to-blue-600",
      category: "Trade",
    },
    {
      id: 9,
      name: "MAX Merchant (Cambodia) Co. Ltd.",
      description:
        "Engaged in wholesale and retail merchant trading in Cambodia, focusing on high-quality goods and services.",
      country: "cambodia",
      icon: "https://i.postimg.cc/FRn39j2t/max-mar.jpg",
      gradient: "from-green-500 to-green-600",
      category: "Merchant",
    },
    {
      id: 10,
      name: "Royal Bengal Engineering & Construction Co. Ltd.",
      description:
        "Specializes in civil engineering, infrastructure development, and large-scale construction projects across Cambodia.",
      country: "cambodia",
      icon: "https://i.postimg.cc/fLgc2Wkn/royal-bengal.jpg",
      gradient: "from-purple-500 to-purple-600",
      category: "Real State",
    },
    {
      id: 1,
      name: "Liven Overseas Ltd.",
      description:
        "Specializes in overseas tourist, air ticket,visa processing, man-power solutions agency",
      country: "bangladesh",
      icon: "https://i.postimg.cc/N0X5X1rH/oveseas.jpg",
      gradient: "from-blue-500 to-blue-600",
      category: "Tourism",
    },
    {
      id: 11,
      name: "MAX Agro Firm & Industry",
      description:
        "Focused on agricultural production, agro-processing, and sustainable farming to support food security and export markets.",
      country: "cambodia",
      icon: "https://i.postimg.cc/tJY1YhX8/max-agro.jpg",
      gradient: "from-yellow-500 to-yellow-600",
      category: "Agriculture",
      website: "https://maxagrofarm.com/",
    },
    {
      id: 12,
      name: "IBN SINA Medical",
      description:
        "A healthcare provider offering quality medical services, hospital management, and advanced treatment facilities in Cambodia.",
      country: "cambodia",
      icon: "https://i.postimg.cc/kMzpnZ35/ibn.jpg",
      gradient: "from-pink-500 to-pink-600",
      category: "Healthcare",
    },
    {
      id: 13,
      name: "KYIV Developer",
      description:
        "A real estate and property development company engaged in modern residential, commercial, and infrastructure projects in Ukraine.",
      country: "ukraine",
      icon: "https://i.postimg.cc/FK4rkwbj/cropped-logo.jpg",
      gradient: "from-cyan-500 to-cyan-600",
      category: "Real Estate",
      website: "https://kyivdeveloper.com",
    },
  ];

  const filteredCompanies =
    selectedCountry === "all"
      ? companies
      : companies.filter((company) => company.country === selectedCountry);

  const countries = [
    { id: "all", name: "All Countries", flag: "🌍" },
    { id: "bangladesh", name: "Bangladesh", flag: "🇧🇩" },
    { id: "cambodia", name: "Cambodia", flag: "🇰🇭" },
    { id: "ukraine", name: "Ukraine", flag: "🇺🇦" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Global business network"
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
                Sister Concerns
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              A diverse portfolio of 13+ companies operating across Bangladesh,
              Cambodia, and Ukraine, delivering excellence in multiple
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCountry === country.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2 text-lg">{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company) => {
              // const Icon = company.icon;
              return (
                <div key={company.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div
                      className={`h-2 bg-gradient-to-r ${company.gradient}`}
                    ></div>
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <img
                          src={company?.icon as string}
                          alt={company.name}
                          className="w-50 h-40 object-contain mx-auto"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {company.name}
                      </h3>

                      <div className="mb-4 flex justify-between">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${company.gradient} text-white`}
                        >
                          {company.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="capitalize">{company.country}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {company.description}
                      </p>
                      {company.website && (
                        <Link
                          to={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          <span className="mt-5">Visit Website</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Our companies span across multiple countries and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600 font-medium">
                Companies in Bangladesh
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600 font-medium">
                Companies in Cambodia
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600 font-medium">
                Company in Ukraine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Partnering with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore opportunities to work with our sister companies across
            different industries and markets.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default SisterConcerns;
