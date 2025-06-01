import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';

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
    <section className="relative h-screen bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
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
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-amber-300 mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-white mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-900 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
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
                currentSlide === index ? 'bg-amber-400 w-6' : 'bg-white/70 hover:bg-white'
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
                <div className="font-medium text-white text-sm drop-shadow-md">{dest.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-50 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300"
      >
        {showChat ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Quick Inquiry Chat */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl">
          <div className="bg-blue-900 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-base font-semibold">Quick Inquiry</h3>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-amber-400">
              <X size={18} />
            </button>
          </div>
          <form className="p-4 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <select className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
              <option value="">Select Course</option>
              <option value="cmat">CMAT Preparation</option>
              <option value="japan">Study in Japan</option>
              <option value="korea">Study in South Korea</option>
              <option value="other">Other Courses</option>
            </select>
            <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg flex items-center justify-center text-sm">
              Send Message <ArrowRight className="ml-2" size={16} />
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Hero;
