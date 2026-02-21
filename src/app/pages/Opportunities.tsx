import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Building,
  TrendingUp,
  Users,
  ArrowRight,
  MapPin,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router";

export function Opportunities() {
  const opportunities = [
    {
      id: 1,
      title: "Dakar Logistics Hub Development",
      location: "Senegal",
      sector: "Infrastructure & Logistics",
      investmentSize: "$120M",
      targetReturn: "22% IRR",
      status: "Open",
      description:
        "Development of a state-of-the-art logistics and distribution center adjacent to Dakar Port, serving West African markets.",
      highlights: [
        "Strategic location at Africa's westernmost port",
        "Growing intra-African trade volumes",
        "Long-term offtake agreements secured",
        "Government infrastructure incentives",
      ],
    },
    {
      id: 2,
      title: "Ghana Renewable Energy Project",
      location: "Ghana",
      sector: "Energy",
      investmentSize: "$85M",
      targetReturn: "18% IRR",
      status: "Open",
      description:
        "Construction and operation of a 50MW solar power facility with 20-year power purchase agreement with Ghana Grid Company.",
      highlights: [
        "Government-backed PPA at attractive tariffs",
        "Strong solar irradiation levels",
        "Growing energy demand",
        "Carbon credit revenue potential",
      ],
    },
    {
      id: 3,
      title: "Luanda Mixed-Use Development",
      location: "Angola",
      sector: "Real Estate",
      investmentSize: "$200M",
      targetReturn: "25% IRR",
      status: "Open",
      description:
        "Premium mixed-use development in Luanda featuring residential, commercial, and hospitality components.",
      highlights: [
        "Prime waterfront location",
        "Severe shortage of quality real estate",
        "Growing expatriate and local demand",
        "Pre-leasing agreements in place",
      ],
    },
    {
      id: 4,
      title: "DRC Copper Mining Expansion",
      location: "Congo DRC",
      sector: "Mining",
      investmentSize: "$150M",
      targetReturn: "28% IRR",
      status: "Closing Soon",
      description:
        "Expansion of existing copper mine with proven reserves and established infrastructure to increase production capacity.",
      highlights: [
        "Proven reserves of 2M+ tonnes",
        "Existing infrastructure and permits",
        "Strong copper price fundamentals",
        "Export logistics already established",
      ],
    },
    {
      id: 5,
      title: "Madagascar Vanilla Processing Facility",
      location: "Madagascar",
      sector: "Agribusiness",
      investmentSize: "$35M",
      targetReturn: "20% IRR",
      status: "Open",
      description:
        "Modern processing and export facility for premium vanilla, leveraging Madagascar's position as the world's leading producer.",
      highlights: [
        "Madagascar produces 80% of global vanilla",
        "Premium product commands high margins",
        "Long-term supply agreements with farmers",
        "Strong global demand growth",
      ],
    },
    {
      id: 6,
      title: "Oman Industrial Zone",
      location: "Oman",
      sector: "Manufacturing & Industry",
      investmentSize: "$180M",
      targetReturn: "19% IRR",
      status: "Open",
      description:
        "Development of specialized industrial zone focused on petrochemicals and light manufacturing for export markets.",
      highlights: [
        "Strategic location near ports",
        "Government incentives and support",
        "Access to regional and Asian markets",
        "Stable business environment",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769028871759-8099b7474ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwb3Bwb3J0dW5pdHklMjBncm93dGh8ZW58MXx8fHwxNzcxNTI4MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Investment Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Investment Opportunities</h1>
          <p className="text-xl">
            High-return projects across emerging markets
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl mb-6">Current Investment Pipeline</h2>
            <p className="text-xl text-gray-700">
              We maintain a carefully curated pipeline of investment
              opportunities across our target markets. Each opportunity undergoes
              rigorous due diligence and is structured to deliver attractive
              risk-adjusted returns.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-2">$770M</div>
              <div className="text-gray-700">Total Investment Size</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-green-600 mb-2">22%</div>
              <div className="text-gray-700">Avg. Target IRR</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-purple-600 mb-2">6</div>
              <div className="text-gray-700">Active Opportunities</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-orange-600 mb-2">5</div>
              <div className="text-gray-700">Sectors Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl">{opp.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            opp.status === "Open"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {opp.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {opp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {opp.sector}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl text-blue-600 mb-1">
                        {opp.investmentSize}
                      </div>
                      <div className="text-sm text-gray-600">
                        Target: {opp.targetReturn}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{opp.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 text-gray-900">Key Highlights</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {opp.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    Request Information
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Interested in These Opportunities?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact our investment team to receive detailed information
            memorandums and discuss how these opportunities align with your
            investment objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
