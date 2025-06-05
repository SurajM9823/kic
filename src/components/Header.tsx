import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Menu, X } from 'lucide-react';
import clogo from '../../clogo.png'; // Adjust the path based on your project structure

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', to: 'home' },
    {
      name: 'Study Abroad',
      submenu: [
        { name: '🇯🇵 Japan', to: 'japan', highlight: 'New Intake 2025' },
        { name: '🇰🇷 South Korea', to: 'korea', highlight: 'Gap Accepted' },
        { name: '🇦🇺 Australia', to: 'australia' },
        { name: '🇺🇸 USA', to: 'usa' },
        { name: '🇬🇧 UK', to: 'uk' },
        { name: '🇨🇦 Canada', to: 'canada' }
      ]
    },
    {
      name: 'Test Preparation',
      submenu: [
        { name: '📚 CMAT', to: 'cmat', highlight: '90% Success Rate' },
        { name: '🌟 IELTS', to: 'ielts' },
        { name: '🎌 Japanese Language', to: 'japanese' },
        { name: '🇰🇷 Korean Language', to: 'korean' }
      ]
    },
    { name: 'Services', to: 'services' },
    { name: 'About Us', to: 'about' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .dropdown-menu {
            animation: fadeIn 0.2s ease-out;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="home"
            className="flex items-center space-x-2 cursor-pointer"
            smooth={true}
            duration={500}
          >
            <img src={clogo} alt="KIC Education Logo" className="size-16 md:size-32 lg:size-32 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  <button 
                    className="flex items-center px-4 py-2 transition-colors duration-200 rounded-lg text-[#1c5292] hover:bg-[#4cbbe0] hover:text-white"
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                    <div className="absolute hidden group-hover:block top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-1 dropdown-menu">
                      {link.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          className="block px-4 py-3 text-[#1c5292] hover:bg-[#4cbbe0] hover:text-white transition-colors duration-200"
                          smooth={true}
                          duration={500}
                        >
                          <div className="flex items-center justify-between">
                            <span>{subItem.name}</span>
                            {subItem.highlight && (
                              <span className="text-xs bg-[#4cbbe0] text-white px-2 py-1 rounded-full">
                                {subItem.highlight}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="px-4 py-2 transition-colors duration-200 rounded-lg text-[#1c5292] hover:bg-[#4cbbe0] hover:text-white"
                    smooth={true}
                    duration={500}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <a 
              href="#"
              className="ml-4 px-6 py-2 bg-[#4cbbe0] text-white rounded-lg hover:bg-[#1c5292] transition-colors duration-300"
            >
              Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1c5292] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {mainLinks.map((link, index) => (
                <div key={index}>
                  {link.submenu ? (
                    <div className="space-y-2">
                      <div className="font-medium text-[#1c5292] px-4 py-2">
                        {link.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {link.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="block px-4 py-2 text-[#1c5292] hover:bg-[#4cbbe0] hover:text-white rounded-lg transition-colors duration-200"
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span>{subItem.name}</span>
                              {subItem.highlight && (
                                <span className="text-xs bg-[#4cbbe0] text-white px-2 py-1 rounded-full">
                                  {subItem.highlight}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      className="block px-4 py-2 text-[#1c5292] hover:bg-[#4cbbe0] hover:text-white rounded-lg transition-colors duration-200"
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <a 
                href="#"
                className="block px-4 py-2 mt-4 bg-[#4cbbe0] text-white text-center rounded-lg hover:bg-[#1c5292] transition-colors duration-300"
              >
                Free Consultation
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;