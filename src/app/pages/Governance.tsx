import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Shield, FileText, Users, Eye, CheckCircle } from "lucide-react";

export function Governance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1752159684779-0639174cdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc3MTUyODA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Corporate Governance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Corporate Governance</h1>
          <p className="text-xl">
            Committed to Transparency, Integrity, and Excellence
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl mb-6">Our Governance Framework</h2>
            <p className="text-xl text-gray-700">
              Xpand maintains the highest standards of corporate governance,
              ensuring accountability, transparency, and ethical conduct across
              all our operations. Our governance structure is designed to
              protect stakeholder interests while enabling effective
              decision-making and strategic oversight.
            </p>
          </div>

          {/* Key Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Integrity</h3>
              <p className="text-gray-600">
                Unwavering commitment to ethical business practices
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Transparency</h3>
              <p className="text-gray-600">
                Clear, timely disclosure to all stakeholders
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">Accountability</h3>
              <p className="text-gray-600">
                Clear roles and responsibilities at all levels
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Compliance</h3>
              <p className="text-gray-600">
                Adherence to all regulatory requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12">Board of Directors</h2>
          <div className="bg-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl mb-4">Composition & Independence</h3>
            <p className="text-gray-700 mb-6">
              Our Board comprises highly qualified individuals with diverse
              expertise in finance, emerging markets, operations, and
              governance. The Board maintains a majority of independent
              directors to ensure objective oversight and decision-making.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl text-blue-600 mb-2">9</div>
                <div className="text-sm text-gray-600">Board Members</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl text-blue-600 mb-2">6</div>
                <div className="text-sm text-gray-600">
                  Independent Directors
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl text-blue-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Board Committees</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Board Committees</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-900">Audit Committee</div>
                    <div className="text-sm text-gray-600">
                      Financial reporting and internal controls oversight
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-900">
                      Risk Management Committee
                    </div>
                    <div className="text-sm text-gray-600">
                      Enterprise risk assessment and mitigation
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-900">
                      Investment Committee
                    </div>
                    <div className="text-sm text-gray-600">
                      Review and approval of investment decisions
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-900">
                      Governance & Compensation Committee
                    </div>
                    <div className="text-sm text-gray-600">
                      Board effectiveness and executive compensation
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Board Responsibilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Strategic direction and oversight
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Major investment approvals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Risk management oversight
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Financial performance monitoring
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Succession planning
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  Stakeholder engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12">Risk Management Framework</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Three Lines of Defense</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-lg text-blue-600 mb-2">
                    First Line: Business Operations
                  </div>
                  <p className="text-sm text-gray-700">
                    Day-to-day risk management by operational teams with clear
                    ownership and accountability
                  </p>
                </div>
                <div>
                  <div className="text-lg text-blue-600 mb-2">
                    Second Line: Risk & Compliance
                  </div>
                  <p className="text-sm text-gray-700">
                    Independent risk monitoring, policy development, and
                    compliance oversight
                  </p>
                </div>
                <div>
                  <div className="text-lg text-blue-600 mb-2">
                    Third Line: Internal Audit
                  </div>
                  <p className="text-sm text-gray-700">
                    Independent assurance on effectiveness of risk management
                    and controls
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl mb-4">Key Risk Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Market and investment risks</li>
                  <li>• Operational risks</li>
                  <li>• Regulatory and compliance risks</li>
                  <li>• Political and country risks</li>
                  <li>• Environmental and social risks</li>
                  <li>• Cybersecurity and technology risks</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl mb-4">Risk Mitigation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive due diligence processes</li>
                  <li>• Diversification across markets and sectors</li>
                  <li>• Regular portfolio monitoring and reporting</li>
                  <li>• Insurance and hedging strategies</li>
                  <li>• Crisis management protocols</li>
                  <li>• Continuous training and awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Ethics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12">Compliance & Ethics</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg mb-6">
              <h3 className="text-2xl mb-4">Code of Conduct</h3>
              <p className="text-gray-700 mb-4">
                All Xpand employees, directors, and contractors are bound by our
                comprehensive Code of Conduct, which sets clear standards for
                ethical behavior, conflict of interest management, and
                professional conduct.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Zero tolerance for corruption and bribery
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Strict anti-money laundering procedures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Comprehensive whistleblower protection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Regular ethics training and certification
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">ESG Integration</h3>
              <p className="text-gray-700 mb-4">
                Environmental, Social, and Governance considerations are
                integrated throughout our investment process and portfolio
                management activities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ESG screening of all investment opportunities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Active engagement with portfolio companies on ESG
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  Annual sustainability reporting
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  UN PRI signatory and commitment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
