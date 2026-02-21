import { Link, Outlet, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketsDropdownOpen, setMarketsDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Why Xpand", href: "/why-xpand" },
    {
      name: "Where We Operate",
      href: "#",
      dropdown: [
        { name: "Ghana", href: "/markets/ghana" },
        { name: "Congo DRC", href: "/markets/kongo-drc" },
        { name: "Angola", href: "/markets/angola" },
        { name: "Senegal", href: "/markets/senegal" },
        { name: "Madagascar", href: "/markets/madagascar" },
        { name: "Oman", href: "/markets/oman" },
      ],
    },
    { name: "Credentials", href: "/credentials" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Governance", href: "/governance" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl text-blue-600">XPAND</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 transition-colors py-2"
                        onMouseEnter={() => setMarketsDropdownOpen(true)}
                        onMouseLeave={() => setMarketsDropdownOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {marketsDropdownOpen && (
                        <div
                          className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2"
                          onMouseEnter={() => setMarketsDropdownOpen(true)}
                          onMouseLeave={() => setMarketsDropdownOpen(false)}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm transition-colors py-2 ${
                        location.pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <div className="text-sm text-gray-900 py-2 px-2">
                        {item.name}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block pl-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-2 px-2 text-sm ${
                        location.pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4">XPAND</h3>
              <p className="text-gray-400 text-sm">
                Expanding investment opportunities across emerging markets in
                Africa and the Middle East.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/leadership"
                    className="text-gray-400 hover:text-white"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    to="/opportunities"
                    className="text-gray-400 hover:text-white"
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p>Email: info@xpand.com</p>
                <p>Phone: +971 XX XXX XXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Xpand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
