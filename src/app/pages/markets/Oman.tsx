import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function Oman() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1700829265708-468072e4e09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPbWFuJTIwTXVzY2F0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTUyODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Oman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Oman</h1>
          <p className="text-xl">Middle East's Gateway to Innovation</p>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Country Overview</h2>
            <p className="text-lg text-gray-700">
              Oman is a stable, business-friendly Gulf nation undergoing
              ambitious economic transformation through its Vision 2040 strategy.
              With a focus on diversification away from oil, Oman is developing
              logistics, tourism, manufacturing, and financial services sectors,
              creating attractive investment opportunities in a secure
              environment.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Population</h3>
              <p className="text-3xl text-blue-600 mb-2">4.6M</p>
              <p className="text-sm text-gray-600">Growing at 1.8% annually</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">GDP Growth</h3>
              <p className="text-3xl text-green-600 mb-2">3.5%</p>
              <p className="text-sm text-gray-600">2025 annual rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">GDP</h3>
              <p className="text-3xl text-purple-600 mb-2">$108B</p>
              <p className="text-sm text-gray-600">Nominal GDP (2025)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Urbanization</h3>
              <p className="text-3xl text-orange-600 mb-2">87%</p>
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
                <li>• Oil and gas (declining share)</li>
                <li>• Logistics and ports</li>
                <li>• Tourism and hospitality</li>
                <li>• Manufacturing and industry</li>
                <li>• Financial services</li>
                <li>• Renewable energy</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Strategic Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Political stability and security</li>
                <li>• Strategic Strait of Hormuz location</li>
                <li>• World-class logistics infrastructure</li>
                <li>• Business-friendly regulations</li>
                <li>• High-quality infrastructure</li>
                <li>• Growing regional hub for Asia-Africa trade</li>
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
              <h3 className="text-2xl mb-2">Logistics and Free Zones</h3>
              <p className="text-gray-700">
                Strategic investments in ports, free zones, and logistics
                infrastructure serving as a gateway between Asia, Africa, and
                Europe.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl mb-2">Tourism Development</h3>
              <p className="text-gray-700">
                Luxury resorts, heritage tourism, and adventure tourism
                infrastructure leveraging Oman's natural beauty and cultural
                heritage.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl mb-2">Renewable Energy</h3>
              <p className="text-gray-700">
                Solar, wind, and green hydrogen projects as Oman positions
                itself as a future clean energy hub for the region.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl mb-2">Manufacturing</h3>
              <p className="text-gray-700">
                Industrial zone development in petrochemicals, metals, food
                processing, and light manufacturing for domestic and export
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
