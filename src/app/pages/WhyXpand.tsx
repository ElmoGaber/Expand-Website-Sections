import {
  TrendingUp,
  Users,
  Briefcase,
  Shield,
  Globe2,
  Target,
} from "lucide-react";

export function WhyXpand() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Consistent outperformance with average returns of 18%+ across our portfolio, significantly exceeding market benchmarks.",
    },
    {
      icon: Globe2,
      title: "Strategic Geographic Presence",
      description:
        "Deep local expertise across six high-growth markets in Africa and the Middle East, with established operations and networks.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "World-class professionals with decades of combined experience in investment banking, private equity, and emerging market operations.",
    },
    {
      icon: Briefcase,
      title: "Diversified Portfolio",
      description:
        "Strategic allocation across infrastructure, real estate, technology, and consumer services to optimize risk-adjusted returns.",
    },
    {
      icon: Shield,
      title: "Best-in-Class Governance",
      description:
        "Industry-leading corporate governance standards, transparent reporting, and comprehensive risk management frameworks.",
    },
    {
      icon: Target,
      title: "Value-Add Approach",
      description:
        "Active portfolio management with operational support to drive performance improvements and accelerate growth.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Why Choose Xpand?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner for high-return investments in emerging
            markets, combining local expertise with global investment standards
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Our Competitive Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-12">
              Our Investment Philosophy
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Strategic Focus</h3>
                <p className="text-gray-700">
                  We concentrate on markets with strong fundamentals: growing
                  GDP, favorable demographics, increasing urbanization, and
                  supportive regulatory environments. This focused approach
                  allows us to develop deep expertise and strong local networks
                  that drive superior returns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Disciplined Execution</h3>
                <p className="text-gray-700">
                  Every investment undergoes rigorous due diligence, including
                  comprehensive market analysis, financial modeling, legal
                  review, and operational assessment. We only pursue
                  opportunities that meet our strict investment criteria and
                  offer attractive risk-adjusted returns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Active Management</h3>
                <p className="text-gray-700">
                  We take an active approach to portfolio management, working
                  closely with management teams to implement operational
                  improvements, drive strategic initiatives, and ensure strong
                  governance. This hands-on involvement is key to maximizing
                  value creation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl mb-4">Sustainable Impact</h3>
                <p className="text-gray-700">
                  We believe that long-term value creation requires sustainable
                  business practices. All our investments are evaluated for
                  environmental and social impact, and we actively work to
                  ensure positive outcomes for local communities and
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Performance Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl text-blue-600 mb-3">18%+</div>
              <div className="text-gray-600">Average Annual Returns</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-blue-600 mb-3">$2.5B+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-blue-600 mb-3">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-blue-600 mb-3">95%</div>
              <div className="text-gray-600">Investor Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">
            Ready to Partner with Xpand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in capitalizing on the tremendous opportunities in
            emerging markets
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
