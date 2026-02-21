import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, Users, Building2, DollarSign } from "lucide-react";

export function Angola() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758061376455-6d4e2272bd53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2l0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTUyODA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Angola"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Angola</h1>
          <p className="text-xl">Southern Africa's Economic Powerhouse</p>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Country Overview</h2>
            <p className="text-lg text-gray-700">
              Angola is a rapidly developing economy with abundant natural
              resources, particularly oil and diamonds. The country is
              undergoing significant economic diversification, moving beyond oil
              dependency to develop agriculture, manufacturing, and services
              sectors, creating diverse investment opportunities.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Population</h3>
              <p className="text-3xl text-blue-600 mb-2">35.6M</p>
              <p className="text-sm text-gray-600">Growing at 3.3% annually</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">GDP Growth</h3>
              <p className="text-3xl text-green-600 mb-2">3.2%</p>
              <p className="text-sm text-gray-600">2025 annual rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">GDP</h3>
              <p className="text-3xl text-purple-600 mb-2">$92B</p>
              <p className="text-sm text-gray-600">Nominal GDP (2025)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Urbanization</h3>
              <p className="text-3xl text-orange-600 mb-2">68%</p>
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
                <li>• Oil and gas production</li>
                <li>• Diamond mining</li>
                <li>• Agriculture and fishing</li>
                <li>• Construction and real estate</li>
                <li>• Manufacturing</li>
                <li>• Financial services</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Investment Climate</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Economic diversification initiatives</li>
                <li>• Major infrastructure development</li>
                <li>• Improving business regulations</li>
                <li>• Strategic Atlantic coast location</li>
                <li>• Growing consumer market</li>
                <li>• Portuguese language business hub</li>
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
              <h3 className="text-2xl mb-2">Infrastructure Projects</h3>
              <p className="text-gray-700">
                Large-scale opportunities in ports, airports, roads, and urban
                infrastructure supporting national reconstruction and
                development.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl mb-2">Agriculture Development</h3>
              <p className="text-gray-700">
                Vast potential in commercial agriculture, food processing, and
                agricultural exports leveraging fertile land and favorable
                climate.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl mb-2">Real Estate</h3>
              <p className="text-gray-700">
                Strong demand for residential, commercial, and hospitality
                properties in Luanda and other major urban centers.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl mb-2">Manufacturing</h3>
              <p className="text-gray-700">
                Import substitution opportunities in consumer goods,
                construction materials, and light manufacturing for domestic and
                regional markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
