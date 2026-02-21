import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, TrendingUp, Globe, Shield } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762439183787-54302c4dfb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMGhlYWRxdWFydGVycyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTUyODA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Xpand Headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Expanding Horizons, Creating Value
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Strategic investment and development across Africa and the Middle
            East
          </p>
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Opportunities
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Strategic Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Our Strategic Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Xpand is a pioneering investment and development company focused
              on identifying and capitalizing on high-growth opportunities
              across emerging markets. We combine deep regional expertise with
              global investment standards to create sustainable value for our
              stakeholders and the communities we serve.
            </p>
            <p className="text-lg text-gray-600">
              Our strategic approach focuses on sectors with strong growth
              potential including infrastructure, real estate, technology, and
              consumer services across our key markets in Ghana, Congo DRC,
              Angola, Senegal, Madagascar, and Oman.
            </p>
          </div>
        </div>
      </section>

      {/* Core Growth Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Core Growth Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-2">Market Growth</h3>
              <p className="text-4xl text-blue-600 mb-2">15%+</p>
              <p className="text-gray-600">
                Average GDP growth across our target markets, significantly
                outpacing global averages
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-2">Global Reach</h3>
              <p className="text-4xl text-green-600 mb-2">6 Markets</p>
              <p className="text-gray-600">
                Strategic presence across high-potential African nations and the
                Middle East
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl mb-2">Risk Management</h3>
              <p className="text-4xl text-purple-600 mb-2">AAA</p>
              <p className="text-gray-600">
                Industry-leading governance and risk management frameworks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Explore Opportunities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how Xpand is shaping the future of investment across
            emerging markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/opportunities"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Opportunities
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
