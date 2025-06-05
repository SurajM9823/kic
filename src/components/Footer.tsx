import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import clogo from '../../clogo.png'; // Adjust the path based on your project structure

const Footer = () => {
  return (
    <footer className="bg-[#1c5292] text-[#ffffff] pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={clogo}
                alt="KIC Education Logo"
                className="size-16 md:size-32 lg:size-32 object-contain"
              />
            </div>
            <p className="text-gray-200 mb-6">
              Your trusted partner for international education and visa services. We help students achieve their global academic ambitions.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-[#ffffff] hover:bg-[#4cbbe0] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', to: 'home' },
                { name: 'Services', to: 'services' },
                { name: 'Study Destinations', to: 'destinations' },
                { name: 'About Us', to: 'about' },
                { name: 'Testimonials', to: 'testimonials' },
                { name: 'News', to: 'news' },
                { name: 'Contact', to: 'contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-200 hover:text-[#4cbbe0] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Education Counselling',
                'Visa Assistance',
                'University Application',
                'Scholarship Guidance',
                'Test Preparation',
                'Career Planning',
                'Accommodation Assistance',
                'Pre-Departure Briefing',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-[#4cbbe0] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <strong className="block text-[#ffffff]">Address:</strong>
                123 Education Avenue, Suite 200
                <br />
                New York, NY 10001, USA
              </li>
              <li>
                <strong className="block text-[#ffffff]">Phone:</strong>
                +1 (555) 123-4567
              </li>
              <li>
                <strong className="block text-[#ffffff]">Email:</strong>
                info@kiceducation.com
              </li>
              <li>
                <strong className="block text-[#ffffff]">Hours:</strong>
                Mon-Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 2:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KIC Education and Visa Services. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-[#4cbbe0] text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4cbbe0] text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4cbbe0] text-sm"
            >
              Sitemap
            </a>
          </div>

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="mt-6 md:mt-0 w-10 h-10 bg-[#4cbbe0] rounded-full flex items-center justify-center text-[#ffffff] hover:bg-[#ffffff] hover:text-[#1c5292] transition-colors cursor-pointer"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;