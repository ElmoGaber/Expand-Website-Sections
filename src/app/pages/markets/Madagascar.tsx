import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function Madagascar() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1570742544137-3a469196c32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRhZ2FzY2FyJTIwbGFuZHNjYXBlJTIwYmFvYmFifGVufDF8fHx8MTc3MTUyODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Madagascar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Madagascar</h1>
          <p className="text-xl">The Island of Opportunity</p>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Country Overview</h2>
            <p className="text-lg text-gray-700">
              Madagascar, the world's fourth-largest island, offers unique
              investment opportunities in agriculture, mining, tourism, and
              manufacturing. With its diverse ecosystems, strategic location in
              the Indian Ocean, and abundant natural resources, Madagascar
              represents an emerging frontier market with significant potential.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Population</h3>
              <p className="text-3xl text-blue-600 mb-2">29.6M</p>
              <p className="text-sm text-gray-600">Growing at 2.6% annually</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">GDP Growth</h3>
              <p className="text-3xl text-green-600 mb-2">4.8%</p>
              <p className="text-sm text-gray-600">2025 annual rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">GDP</h3>
              <p className="text-3xl text-purple-600 mb-2">$16B</p>
              <p className="text-sm text-gray-600">Nominal GDP (2025)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Urbanization</h3>
              <p className="text-3xl text-orange-600 mb-2">39%</p>
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
                <li>• Agriculture (vanilla, cloves, seafood)</li>
                <li>• Mining (nickel, cobalt, ilmenite)</li>
                <li>• Textile and garment manufacturing</li>
                <li>• Tourism and eco-tourism</li>
                <li>• Fishing and aquaculture</li>
                <li>• Renewable energy</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Natural Assets</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Unique biodiversity and ecosystems</li>
                <li>• Rich mineral deposits</li>
                <li>• Extensive coastline and marine resources</li>
                <li>• Agricultural land and favorable climate</li>
                <li>• Strategic Indian Ocean location</li>
                <li>• Young, low-cost labor force</li>
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
              <h3 className="text-2xl mb-2">Agricultural Value Chains</h3>
              <p className="text-gray-700">
                Export-oriented agriculture including vanilla, spices, essential
                oils, and seafood processing with strong global demand.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl mb-2">Mining Development</h3>
              <p className="text-gray-700">
                Nickel, cobalt, and rare earth mineral extraction opportunities
                serving global EV battery and technology markets.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl mb-2">Tourism Infrastructure</h3>
              <p className="text-gray-700">
                Eco-tourism, luxury resorts, and sustainable tourism development
                leveraging Madagascar's unique wildlife and landscapes.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl mb-2">Textile Manufacturing</h3>
              <p className="text-gray-700">
                Export processing zone opportunities in garments and textiles
                with duty-free access to US and European markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
