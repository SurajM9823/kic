import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, X, Phone } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showChat, setShowChat] = useState(false);

  const slides = [
    {
      title: "CMAT 2025 Success Starts HERE!",
      subtitle: "Transform Your Preparation with Nepal's Top-Rated CMAT Coaching",
      description: "Expert Faculty • Updated Study Material • 50+ Mock Tests • 90%+ Success Rate",
      image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg",
      cta: "Enroll Now for CMAT 2025"
    },
    {
      title: "Study in Japan 2025",
      subtitle: "Your Gateway to World-Class Education",
      description: "Japanese Language Classes (N5 & N4) • Multiple City Options • Limited Seats Available",
      image: "https://images.pexels.com/photos/356807/pexels-photo-356807.jpeg",
      cta: "Apply for Japan Intake"
    },
    {
      title: "South Korea Awaits You",
      subtitle: "2025 Intake Now Open",
      description: "IELTS 5.5 • GPA 3.20+ • 2-3 Years Gap Accepted",
      image: "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg",
      cta: "Explore Korean Universities"
    }
  ];

  const destinations = [
    { country: "Japan", flag: "🇯🇵", logo: "https://flagcdn.com/w80/jp.png" },
    { country: "South Korea", flag: "🇰🇷", logo: "https://flagcdn.com/w80/kr.png" },
    { country: "Australia", flag: "🇦🇺", logo: "https://flagcdn.com/w80/au.png" },
    { country: "USA", flag: "🇺🇸", logo: "https://flagcdn.com/w80/us.png" },
    { country: "UK", flag: "🇬🇧", logo: "https://flagcdn.com/w80/gb.png" },
    { country: "Canada", flag: "🇨🇦", logo: "https://flagcdn.com/w80/ca.png" },
    { country: "Germany", flag: "🇩🇪", logo: "https://flagcdn.com/w80/de.png" },
    { country: "New Zealand", flag: "🇳🇿", logo: "https://flagcdn.com/w80/nz.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-[#1c5292] overflow-hidden">
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-slider {
            display: flex;
            animation: slide 20s linear infinite;
            width: calc(180px * ${destinations.length * 2});
          }
          .logo-slider:hover {
            animation-play-state: paused;
          }
          .destination-item {
            flex: 0 0 180px;
            padding: 0 8px;
          }
        `}
      </style>

      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-[#4cbbe0] mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-[#ffffff] mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-[#4cbbe0] hover:bg-[#ffffff] hover:text-[#1c5292] text-[#ffffff] font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#4cbbe0] w-6' : 'bg-[#ffffff]/70 hover:bg-[#ffffff]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Study Destinations Slider */}
      <div className="absolute bottom-0 left-0 right-0 py-2 z-30">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="logo-slider">
            {[...destinations, ...destinations].map((dest, index) => (
              <div key={`${dest.country}-${index}`} className="destination-item text-center group cursor-pointer">
                <div className="relative w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={dest.logo}
                    alt={dest.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xl">
                    {dest.flag}
                  </div>
                </div>
                <div className="font-medium text-[#ffffff] text-sm drop-shadow-md">{dest.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+9779805996874"
        className="fixed bottom-32 right-6 z-50 bg-[#4cbbe0] text-[#ffffff] p-3 rounded-full shadow-lg hover:bg-[#1c5292] transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.27 2.62.75 3.83L2 22l6.32-.87c1.17.44 2.42.69 3.72.69 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.16 0-2.3-.23-3.37-.67l-.24-.13-3.75.52.53-3.68-.13-.24c-.44-1.07-.67-2.21-.67-3.37 0-4.64 3.77-8.41 8.41-8.41s8.41 3.77 8.41 8.41-3.77 8.41-8.41 8.41zm4.74-6.47c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.18.26-.69.85-.85 1.03-.15.18-.31.22-.57.09-.26-.13-1.09-.41-2.08-1.31-.76-.69-1.28-1.55-1.43-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.18-.26.26-.44.09-.18.04-.34-.02-.48-.06-.13-.59-1.41-.81-1.94-.22-.52-.44-.46-.59-.46-.15 0-.33 0-.5 0-.18 0-.46.09-.7.31-.24.22-.94.91-.94 2.22s.96 2.57 1.09 2.75c.13.18 1.91 3.05 4.65 4.03.66.23 1.17.37 1.57.47.66.17 1.26.14 1.73.09.53-.06 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"/>
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:+9779805996874"
        className="fixed bottom-20 right-6 z-50 bg-[#4cbbe0] text-[#ffffff] p-3 rounded-full shadow-lg hover:bg-[#1c5292] transition-colors duration-300"
      >
        <Phone size={20} />
      </a>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-50 bg-[#4cbbe0] text-[#ffffff] p-3 rounded-full shadow-lg hover:bg-[#1c5292] transition-colors duration-300"
      >
        {showChat ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Quick Inquiry Chat */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-[#ffffff] rounded-lg shadow-2xl">
          <div className="bg-gradient-to-b from-[#ffffff] to-[#e6f0fa] text-[#1c5292] p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-base font-semibold">Quick Inquiry</h3>
            <button onClick={() => setShowChat(false)} className="text-[#1c5292] hover:text-[#4cbbe0]">
              <X size={18} />
            </button>
          </div>
          <form className="p-4 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4cbbe0] text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4cbbe0] text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4cbbe0] text-sm"
            />
            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4cbbe0] text-sm">
              <option value="">Select Course</option>
              <option value="cmat">CMAT Preparation</option>
              <option value="japan">Study in Japan</option>
              <option value="korea">Study in South Korea</option>
              <option value="other">Other Courses</option>
            </select>
            <button type="submit" className="w-full bg-[#4cbbe0] hover:bg-[#1c5292] text-[#ffffff] py-2 rounded-lg flex items-center justify-center text-sm">
              Send Message <ArrowRight className="ml-2" size={16} />
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Hero;