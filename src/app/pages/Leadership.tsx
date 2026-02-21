import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mail } from "lucide-react";

export function Leadership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Leadership</h1>
          <p className="text-xl text-gray-300">
            Experienced leadership driving strategic growth across emerging
            markets
          </p>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjaGFpcm1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUyODA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chairman"
                  className="w-full aspect-square object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl mb-1">Dr. Ahmed Al-Rashid</h3>
                  <p className="text-gray-600 mb-4">Chairman</p>
                  <a
                    href="mailto:chairman@xpand.com"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4" />
                    chairman@xpand.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl mb-6">Message from the Chairman</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>Dear Stakeholders,</p>
                <p>
                  It is with great pleasure and pride that I welcome you to
                  Xpand. As we continue our journey of strategic expansion
                  across Africa and the Middle East, I am reminded of the
                  tremendous potential that these emerging markets represent
                  for sustainable growth and value creation.
                </p>
                <p>
                  When we founded Xpand, our vision was clear: to bridge the
                  gap between international capital and the abundant
                  opportunities in high-growth emerging markets. Today, with
                  operations across six dynamic countries, we have not only
                  realized this vision but have exceeded our initial
                  expectations.
                </p>
                <p>
                  The markets we operate in—Ghana, Congo DRC, Angola, Senegal,
                  Madagascar, and Oman—represent some of the fastest-growing
                  economies in the world. These regions are experiencing
                  unprecedented demographic shifts, rapid urbanization, and
                  increasing consumer spending power. Our strategic positioning
                  in these markets allows us to capture value across multiple
                  sectors while contributing to sustainable economic
                  development.
                </p>
                <p>
                  Our success is built on three fundamental pillars: deep local
                  expertise, rigorous investment discipline, and unwavering
                  commitment to ethical business practices. We believe that
                  long-term value creation is only possible when we maintain
                  the highest standards of corporate governance and operate
                  with integrity in all our dealings.
                </p>
                <p>
                  As we look to the future, I am confident in our ability to
                  continue delivering exceptional returns for our investors
                  while making a positive impact on the communities we serve.
                  The strength of our team, the quality of our portfolio, and
                  the robustness of our strategic framework position us well
                  for sustained growth.
                </p>
                <p>
                  Thank you for your continued trust and support as we work
                  together to expand horizons and create lasting value.
                </p>
                <p className="pt-4">
                  <span className="block">Warm regards,</span>
                  <span className="block font-medium">Dr. Ahmed Al-Rashid</span>
                  <span className="block text-gray-600">Chairman, Xpand</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl mb-6 lg:hidden">
                  Message from the Managing Director
                </h2>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjaGFpcm1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUyODA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Managing Director"
                  className="w-full aspect-square object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl mb-1">Sarah Okonkwo</h3>
                  <p className="text-gray-600 mb-4">
                    Managing Director & Board Member
                  </p>
                  <a
                    href="mailto:md@xpand.com"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4" />
                    md@xpand.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-3xl mb-6 hidden lg:block">
                Message from the Managing Director
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>Dear Partners and Investors,</p>
                <p>
                  As Managing Director of Xpand, I am honored to lead an
                  exceptional team dedicated to unlocking value in some of the
                  world's most dynamic markets. Our operational excellence and
                  strategic agility have enabled us to navigate complex market
                  conditions and deliver consistent results.
                </p>
                <p>
                  The past year has been transformative for Xpand. We have
                  successfully deployed capital across multiple sectors,
                  expanded our geographic footprint, and strengthened our
                  position as a leading investment platform in emerging
                  markets. Our diversified portfolio spans infrastructure, real
                  estate, technology, and consumer services—sectors that are
                  fundamental to the economic development of our target
                  markets.
                </p>
                <p>
                  What sets Xpand apart is our deep operational involvement in
                  our investments. We don't simply provide capital; we partner
                  with our portfolio companies to drive operational
                  improvements, implement best practices, and accelerate
                  growth. This hands-on approach has been instrumental in
                  creating value and achieving superior returns.
                </p>
                <p>
                  Our presence across six countries provides us with unique
                  insights into regional economic trends and investment
                  opportunities. Each market has its distinct characteristics
                  and growth drivers, but they all share common themes of
                  demographic dividend, rising middle class, and infrastructure
                  development needs. We are strategically positioned to
                  capitalize on these mega-trends.
                </p>
                <p>
                  Looking ahead, we remain focused on disciplined growth,
                  maintaining our high standards for investment selection, and
                  continuing to build a portfolio that delivers sustainable
                  returns. We are committed to transparency, regular
                  communication, and ensuring that our stakeholders are fully
                  informed about our strategy and performance.
                </p>
                <p>
                  I would like to thank our team for their dedication, our
                  investors for their confidence, and our partners for their
                  collaboration. Together, we are building something truly
                  special.
                </p>
                <p className="pt-4">
                  <span className="block">Best regards,</span>
                  <span className="block font-medium">Sarah Okonkwo</span>
                  <span className="block text-gray-600">
                    Managing Director & Board Member, Xpand
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
