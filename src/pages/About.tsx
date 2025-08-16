import {
  Globe,
  Building2,
  Users,
  Award,
  Target,
  Heart,
  Zap,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "ISO-compliant processes for quality and safety across all operations.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Cross-Border Expertise",
      description: "Multinational teams with deep local market knowledge.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Building2,
      title: "Strategic Partnerships",
      description:
        "Alliances with global leaders for technology and innovation.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Sustainability Practices",
      description:
        "Eco-friendly policies across construction, manufacturing, and agriculture.",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Corporate headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {" "}
                LIVEN GROUP
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              A multinational business conglomerate with a diverse portfolio
              across international trade, engineering, real estate development,
              security and intelligence, healthcare, agriculture, and global
              commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence Across Borders
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Headquartered in Bangladesh with strong operational bases in
                Cambodia and Ukraine, LIVEN GROUP thrives on its ability to
                connect markets, deliver excellence, and foster sustainable
                growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a commitment to quality, ethics, and innovation, we
                continue to strengthen our position as a trusted global partner
                across diverse industries and markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    13+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Sister Companies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    3
                  </div>
                  <div className="text-gray-600 font-medium">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600 font-medium">Team Members</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Global business operations"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Global Excellence</h3>
                <p className="text-blue-100 text-sm">
                  Operating across three countries with unwavering commitment to
                  quality and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Mission Cards */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-600">
                      To be a world-class business group recognized for
                      innovation, trust, and sustainable growth, creating value
                      for communities and stakeholders across the globe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Our Values
                    </h3>
                    <p className="text-gray-600">
                      Built on integrity, excellence, and innovation - we
                      believe in creating lasting partnerships and positive
                      impact worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Our Approach
                    </h3>
                    <p className="text-gray-600">
                      Think globally, act locally. We combine international
                      expertise with deep local market knowledge for optimal
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover min-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-200 leading-relaxed">
                  Every project we undertake reflects our dedication to
                  excellence, sustainability, and positive impact on communities
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Business System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Business System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LIVEN GROUP operates under a globally integrated business
              framework that ensures excellence across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering excellence while building
              sustainable partnerships worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Quality Excellence
                  </h3>
                  <p className="text-gray-600">
                    Deliver top-quality products and services through innovation
                    and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Global Expansion
                  </h3>
                  <p className="text-gray-600">
                    Expand global presence while upholding ethical business
                    practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Lasting Relationships
                  </h3>
                  <p className="text-gray-600">
                    Build long-term relationships with clients, partners, and
                    communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Social Impact
                  </h3>
                  <p className="text-gray-600">
                    Contribute positively to economic development and social
                    well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8">
            "LIVEN GROUP is more than a business — it is a vision for a
            connected, prosperous, and sustainable future."
          </blockquote>
          <div className="text-blue-100 text-lg">
            With strong leadership, diversified ventures, and a global reach, we
            are committed to building long-lasting partnerships and delivering
            excellence worldwide.
          </div>
          <div className="mt-8 text-xl text-yellow-400 font-semibold">
            "Together, we build a better tomorrow."
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
