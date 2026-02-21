import { Award, CheckCircle, Users, Globe } from "lucide-react";

export function Credentials() {
  const achievements = [
    {
      year: "2024",
      title: "African Investment Fund of the Year",
      organization: "Global Finance Awards",
    },
    {
      year: "2024",
      title: "Best ESG Investment Strategy",
      organization: "Emerging Markets Association",
    },
    {
      year: "2023",
      title: "Excellence in Corporate Governance",
      organization: "African Business Review",
    },
    {
      year: "2023",
      title: "Top Performing Investment Platform",
      organization: "Private Equity International",
    },
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "ISO 45001:2018 - Occupational Health & Safety",
    "PRI Signatory - UN Principles for Responsible Investment",
  ];

  const partnerships = [
    {
      name: "International Finance Corporation (IFC)",
      description: "Strategic partnership for infrastructure development",
    },
    {
      name: "African Development Bank",
      description: "Co-investment initiatives in regional projects",
    },
    {
      name: "Leading Global Investment Banks",
      description: "Collaboration with major financial institutions",
    },
    {
      name: "Regional Governments",
      description: "Public-private partnerships across key sectors",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Our Credentials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Recognized excellence in emerging market investments, backed by
            industry-leading certifications and partnerships
          </p>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl text-blue-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Successfully Deployed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Institutional Investors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Markets</div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-6">Key Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-blue-600 mb-2">18.5%</div>
                <div className="text-gray-700">Average Annual Returns (5Y)</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">2.3x</div>
                <div className="text-gray-700">Average MOIC on Exits</div>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">98%</div>
                <div className="text-gray-700">Investor Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 mb-1">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">
            Certifications & Compliance
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Strategic Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <h3 className="text-xl mb-3">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">
            Professional Memberships
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  African Private Equity and Venture Capital Association (AVCA)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Emerging Markets Private Equity Association (EMPEA)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Global Impact Investing Network (GIIN)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  International Finance Corporation (IFC) Asset Management Company
                  Network
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
