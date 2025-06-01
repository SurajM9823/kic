import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Shield size={28} className="text-blue-900" />,
      title: "Integrity",
      description: "We provide honest, transparent advice focused on your best interests, not commissions."
    },
    {
      icon: <Users size={28} className="text-blue-900" />,
      title: "Personalization",
      description: "Every student receives customized guidance tailored to their unique goals and circumstances."
    },
    {
      icon: <Clock size={28} className="text-blue-900" />,
      title: "Timeliness",
      description: "We understand the importance of deadlines in the application process and ensure punctuality."
    },
    {
      icon: <Award size={28} className="text-blue-900" />,
      title: "Excellence",
      description: "We strive for the highest standards in every aspect of our service delivery and student outcomes."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-2">About KIC</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Partner for Global Education</h2>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            </div>
            
            <p className="text-gray-600 mb-6">
              KIC Education and Visa Services has been helping students achieve their international education dreams since 2015. With a team of experienced education consultants and visa specialists, we provide comprehensive guidance through every step of your journey.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our mission is to empower students to make informed decisions about their education and future, providing personalized advice that aligns with their career goals, academic background, and personal preferences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-900">1000+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-900">20+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-900">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <a href="#" className="btn btn-primary bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-900">
              Meet Our Team
            </a>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-medium">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="KIC Education Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500 rounded-lg z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-900 rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;