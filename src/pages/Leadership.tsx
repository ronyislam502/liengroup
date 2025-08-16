import { Crown, Award, TrendingUp, Globe, Quote } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: "M. Mozammel Hoque",
      position: "Chairman",
      image: "https://i.postimg.cc/13gqnCy2/mz.jpg",
      message:
        "At LIVEN GROUP, our success is built on trust, dedication, and the relentless pursuit of excellence. We believe in creating a legacy that goes beyond business – a legacy of positive change, global connectivity, and sustainable growth.",
      icon: Crown,
      gradient: "from-blue-600 to-blue-800",
      achievements: [
        "Visionary leadership in international business",
        "15+ years in global trade and commerce",
        "Pioneer in sustainable business practices",
        "Champion of ethical business operations",
      ],
    },
    {
      id: 2,
      name: "Moniruzzaman Mithun",
      position: "Vice Chairman",
      image: "https://i.postimg.cc/mk5rT41D/mithun.jpg",
      message:
        "LIVEN GROUP stands as a bridge between markets, cultures, and opportunities. We are committed to empowering people and building partnerships that last.",
      icon: Award,
      gradient: "from-green-600 to-green-800",
      achievements: [
        "Expert in cross-cultural business operations",
        "Strategic partnership development",
        "Market expansion specialist",
        "Community development advocate",
      ],
    },
    {
      id: 3,
      name: "Muhammad Al Jabir",
      position: "Managing Director",
      image: "https://i.postimg.cc/8C29Q0CS/jabir.jpg",
      message:
        "Our strategy is simple: think globally, act locally. With strong systems and an international mindset, LIVEN GROUP is positioned to lead across industries.",
      icon: TrendingUp,
      gradient: "from-purple-600 to-purple-800",
      achievements: [
        "Operations excellence across 3 countries",
        "Strategic planning and execution",
        "Technology integration pioneer",
        "Sustainable growth architect",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Leadership excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Leadership
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {" "}
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Meet the visionary leaders driving LIVEN GROUP's success across
              global markets with unwavering commitment to excellence and
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {leaders.map((leader, index) => {
              const Icon = leader.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={leader.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-r ${leader.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                      <div className="relative">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute top-6 right-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                          {leader.name}
                        </h2>
                        <p
                          className={`text-xl font-semibold bg-gradient-to-r ${leader.gradient} text-transparent bg-clip-text`}
                        >
                          {leader.position}
                        </p>
                      </div>

                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <Quote className="w-8 h-8 text-gray-400 mb-4" />
                        <blockquote className="text-lg text-gray-700 leading-relaxed font-medium italic">
                          "{leader.message}"
                        </blockquote>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Key Achievements
                        </h3>
                        <ul className="space-y-3">
                          {leader.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div
                                className={`w-6 h-6 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                              >
                                <Award className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-600 leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership approach is built on core principles that drive
              sustainable success and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Think globally, act locally. Our leaders combine international
                expertise with deep local market understanding to create
                sustainable value.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ethical Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity and ethical practices form the foundation of every
                decision, ensuring trust and long-term partnerships with all
                stakeholders.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation Drive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Embracing new technologies and ideas while maintaining focus on
                sustainable growth and positive community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our leadership team to explore partnership
            opportunities and be part of building a better tomorrow.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Connect with Leadership
          </button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
