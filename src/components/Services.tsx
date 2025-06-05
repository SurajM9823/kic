import React from 'react';
import {
  Briefcase, Landmark, Plane, GraduationCap,
  FileCheck, Globe, Building, HelpCircle
} from 'lucide-react';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <div className={`service-card fade-in relative flex flex-col items-center p-6 bg-[#ffffff] rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500`}>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#4cbbe0] flex items-center justify-center text-[#ffffff] shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold mt-8 mb-2 text-[#1c5292] text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center leading-relaxed">{description}</p>
      <a href="#" className="inline-flex items-center mt-4 text-[#1c5292] font-semibold hover:text-[#4cbbe0] transition-colors duration-300">
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    { icon: <GraduationCap size={32} />, title: "Education Counselling", description: "Personalized guidance..." },
    { icon: <FileCheck size={32} />, title: "Application Processing", description: "End-to-end assistance..." },
    { icon: <Plane size={32} />, title: "Visa Assistance", description: "Complete support..." },
    { icon: <Landmark size={32} />, title: "Scholarship Guidance", description: "Support for identifying scholarships..." },
    { icon: <HelpCircle size={32} />, title: "Post-Landing Support", description: "Ongoing assistance after arrival..." },
    { icon: <Building size={32} />, title: "Accommodation Assistance", description: "Help with finding housing..." },
    { icon: <Globe size={32} />, title: "Pre-Departure Briefing", description: "Orientation sessions to prepare you..." },
    { icon: <Briefcase size={32} />, title: "Career Planning", description: "Advice on job opportunities..." },
  ];

  return (
    <section className="py-20 bg-[#ffffff]">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.5s ease-out forwards;
          }
          .service-card:nth-child(1) { animation-delay: 0.2s; }
          .service-card:nth-child(2) { animation-delay: 0.4s; }
          .service-card:nth-child(3) { animation-delay: 0.6s; }
          .service-card:nth-child(4) { animation-delay: 0.8s; }
          .service-card:nth-child(5) { animation-delay: 1.0s; }
          .service-card:nth-child(6) { animation-delay: 1.2s; }
          .service-card:nth-child(7) { animation-delay: 1.4s; }
          .service-card:nth-child(8) { animation-delay: 1.6s; }
        `}
      </style>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c5292] mb-4">Your Journey with Us</h2>
          <p className="text-md md:text-lg text-gray-600">
            Follow our streamlined process to make your international education journey smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#4cbbe0] hover:bg-[#1c5292] text-[#ffffff] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;