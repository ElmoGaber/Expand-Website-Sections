import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTQ4NDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Xpand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">About Xpand</h1>
          <p className="text-xl">Building the Future of Emerging Markets</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Xpand is a dynamic investment and development company
                specializing in high-growth emerging markets across Africa and
                the Middle East. Founded on the principles of strategic vision,
                local expertise, and sustainable development, we identify and
                capitalize on transformative investment opportunities that
                create lasting value.
              </p>
              <p>
                With a strong presence in Ghana, Congo DRC, Angola, Senegal,
                Madagascar, and Oman, Xpand has established itself as a trusted
                partner for both international investors seeking exposure to
                these dynamic markets and local enterprises looking for growth
                capital and strategic support.
              </p>
              <p>
                Our team combines decades of collective experience in
                investment banking, private equity, real estate development, and
                infrastructure financing. This expertise, coupled with our deep
                understanding of local markets and regulatory environments,
                enables us to navigate complex investment landscapes and deliver
                superior returns for our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To identify and develop high-value investment opportunities
                across emerging markets, creating sustainable economic growth
                and delivering exceptional returns for our investors while
                contributing to the development of the communities we serve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading investment and development platform for
                emerging markets in Africa and the Middle East, recognized for
                our strategic insights, operational excellence, and commitment
                to sustainable value creation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Integrity in all our dealings</li>
                <li>• Excellence in execution</li>
                <li>• Innovation in approach</li>
                <li>• Sustainability in impact</li>
                <li>• Partnership in success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Xpand at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
