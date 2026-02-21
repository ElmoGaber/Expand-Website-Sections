import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function KongoDRC() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660374509603-a51e49ae07a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb25nbyUyMERSQyUyMEtpbnNoYXNhJTIwY2l0eXxlbnwxfHx8fDE3NzE1MjgwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Congo DRC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Congo DRC</h1>
          <p className="text-xl">Africa's Resource Giant</p>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Country Overview</h2>
            <p className="text-lg text-gray-700">
              The Democratic Republic of Congo is Africa's second-largest
              country by area and possesses some of the world's richest mineral
              deposits. With vast reserves of copper, cobalt, diamonds, and
              other strategic minerals, DRC offers immense opportunities for
              resource development and infrastructure investment.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Population</h3>
              <p className="text-3xl text-blue-600 mb-2">99.0M</p>
              <p className="text-sm text-gray-600">Growing at 3.2% annually</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">GDP Growth</h3>
              <p className="text-3xl text-green-600 mb-2">7.8%</p>
              <p className="text-sm text-gray-600">2025 annual rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">GDP</h3>
              <p className="text-3xl text-purple-600 mb-2">$64B</p>
              <p className="text-sm text-gray-600">Nominal GDP (2025)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Urbanization</h3>
              <p className="text-3xl text-orange-600 mb-2">46%</p>
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
                <li>• Mining (copper, cobalt, diamonds, gold)</li>
                <li>• Energy and hydroelectric power</li>
                <li>• Agriculture and forestry</li>
                <li>• Telecommunications</li>
                <li>• Manufacturing</li>
                <li>• Transport and logistics</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Strategic Assets</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• World's largest cobalt reserves (70%)</li>
                <li>• Significant copper deposits</li>
                <li>• Vast hydroelectric potential</li>
                <li>• Extensive arable land</li>
                <li>• Strategic location in Central Africa</li>
                <li>• Young, growing population</li>
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
              <h3 className="text-2xl mb-2">Mining and Resources</h3>
              <p className="text-gray-700">
                Exceptional opportunities in copper, cobalt, and lithium mining
                to supply global EV battery and technology industries.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl mb-2">Energy Infrastructure</h3>
              <p className="text-gray-700">
                Development of hydroelectric power projects to harness the
                Congo River's massive potential and power regional growth.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl mb-2">Urban Development</h3>
              <p className="text-gray-700">
                Large-scale real estate and infrastructure projects in rapidly
                growing urban centers like Kinshasa and Lubumbashi.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl mb-2">Agriculture</h3>
              <p className="text-gray-700">
                Commercial farming and agro-processing opportunities leveraging
                vast arable land and favorable climate conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
