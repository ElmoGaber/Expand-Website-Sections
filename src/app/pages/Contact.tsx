import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1621953789264-0734777ee76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZWNlcHRpb258ZW58MXx8fHwxNzcxNTI4MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're an investor seeking opportunities, a partner
                looking to collaborate, or simply want to learn more about
                Xpand, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Head Office</h3>
                    <p className="text-gray-600">
                      Xpand Investment Holdings
                      <br />
                      Business Bay, Dubai
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Main: +971 4 XXX XXXX
                      <br />
                      Investor Relations: +971 4 XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@xpand.com
                      <br />
                      Investor Relations: investors@xpand.com
                      <br />
                      Careers: careers@xpand.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="mt-12">
                <h3 className="text-2xl mb-6">Regional Offices</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">Ghana - Accra</div>
                    <p className="text-sm text-gray-600">
                      Ridge Towers, Accra | +233 XXX XXX XXX
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">DRC - Kinshasa</div>
                    <p className="text-sm text-gray-600">
                      Gombe, Kinshasa | +243 XXX XXX XXX
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">Angola - Luanda</div>
                    <p className="text-sm text-gray-600">
                      Talatona, Luanda | +244 XXX XXX XXX
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">Senegal - Dakar</div>
                    <p className="text-sm text-gray-600">
                      Plateau, Dakar | +221 XXX XXX XXX
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">Madagascar - Antananarivo</div>
                    <p className="text-sm text-gray-600">
                      Antananarivo | +261 XXX XXX XXX
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1">Oman - Muscat</div>
                    <p className="text-sm text-gray-600">
                      Al Khuwair, Muscat | +968 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl mb-6">Send us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Send className="h-6 w-6" />
                      <h3 className="text-lg">Message Sent Successfully!</h3>
                    </div>
                    <p>
                      Thank you for contacting Xpand. We'll get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="investment">Investment Inquiry</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="general">General Information</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="media">Media Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl mb-6">Business Hours</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              <span className="text-gray-900">Head Office (Dubai):</span> Sunday
              - Thursday, 9:00 AM - 6:00 PM GST
            </p>
            <p className="text-gray-600 text-sm">
              Regional offices operate according to local business hours. For
              urgent matters outside business hours, please email
              urgent@xpand.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
