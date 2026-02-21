import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function Ghana() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGNpdHlzY2FwZSUyMEFjY3JhfGVufDF8fHx8MTc3MTUyODA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Ghana"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Ghana</h1>
          <p className="text-xl">West Africa's Gateway for Growth</p>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Country Overview</h2>
            <p className="text-lg text-gray-700">
              Ghana stands out as one of Africa's most stable democracies with
              a robust economy driven by gold, cocoa, and increasingly, oil and
              gas. The country has demonstrated consistent economic growth,
              strong institutions, and a favorable business environment that
              attracts international investment.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Population</h3>
              <p className="text-3xl text-blue-600 mb-2">32.8M</p>
              <p className="text-sm text-gray-600">Growing at 2.1% annually</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">GDP Growth</h3>
              <p className="text-3xl text-green-600 mb-2">6.5%</p>
              <p className="text-sm text-gray-600">2025 annual rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">GDP</h3>
              <p className="text-3xl text-purple-600 mb-2">$76B</p>
              <p className="text-sm text-gray-600">Nominal GDP (2025)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Urbanization</h3>
              <p className="text-3xl text-orange-600 mb-2">58%</p>
              <p className="text-sm text-gray-600">Urban population</p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12">Economic Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Key Industries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Gold mining (Africa's largest producer)</li>
                <li>• Cocoa production (world's second-largest)</li>
                <li>• Oil and natural gas</li>
                <li>• Agriculture and agro-processing</li>
                <li>• Financial services</li>
                <li>• Technology and telecommunications</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Business Environment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stable democratic governance</li>
                <li>• Strong legal framework</li>
                <li>• English-speaking business environment</li>
                <li>• Strategic location in West Africa</li>
                <li>• Modern banking sector</li>
                <li>• Growing middle class consumer market</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12">Investment Opportunities</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl mb-2">Infrastructure Development</h3>
              <p className="text-gray-700">
                Significant opportunities in roads, ports, energy, and digital
                infrastructure to support economic growth and urbanization.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl mb-2">Real Estate</h3>
              <p className="text-gray-700">
                Growing demand for commercial, residential, and hospitality
                properties driven by rapid urbanization and expanding middle
                class.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl mb-2">Agribusiness</h3>
              <p className="text-gray-700">
                Value-add opportunities in processing, logistics, and export of
                agricultural products, particularly cocoa, cashews, and
                tropical fruits.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl mb-2">Financial Services</h3>
              <p className="text-gray-700">
                Expanding fintech and banking opportunities serving Ghana's
                underbanked population and growing business sector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
