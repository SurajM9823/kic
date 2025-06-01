import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  universities: string[];
  requirements: string[];
}

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('usa');
  
  const destinations: Destination[] = [
    {
      id: 'usa',
      name: 'United States',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'The United States offers world-renowned education with flexible study options and cutting-edge research opportunities across thousands of institutions.',
      universities: ['Harvard University', 'Stanford University', 'MIT', 'Yale University', 'Columbia University'],
      requirements: ['Valid passport', 'F-1 Student Visa', 'I-20 Form', 'Proof of funds', 'TOEFL/IELTS scores']
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'The UK education system is known for its quality and prestigious institutions with programs typically shorter than other countries, saving time and money.',
      universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL', 'University of Edinburgh'],
      requirements: ['Valid passport', 'Tier 4 Student Visa', 'CAS', 'Proof of funds', 'IELTS/TOEFL scores']
    },
    {
      id: 'canada',
      name: 'Canada',
      image: 'https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'Canada offers high-quality education at affordable tuition rates with post-graduation work opportunities and a pathway to permanent residency.',
      universities: ['University of Toronto', 'University of British Columbia', 'McGill University', 'University of Alberta', 'McMaster University'],
      requirements: ['Valid passport', 'Study permit', 'Acceptance letter', 'Proof of funds', 'Language proficiency']
    },
    {
      id: 'australia',
      name: 'Australia',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'Australia provides excellent academic opportunities with a relaxed lifestyle, multicultural environment, and post-study work rights of up to 4 years.',
      universities: ['University of Melbourne', 'Australian National University', 'University of Sydney', 'University of Queensland', 'Monash University'],
      requirements: ['Valid passport', 'Student visa (subclass 500)', 'CoE', 'GTE statement', 'Health insurance']
    },
    {
      id: 'germany',
      name: 'Germany',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'Germany offers tuition-free education at public universities with world-class engineering and technical programs and a strong economy for job seekers.',
      universities: ['Technical University of Munich', 'Ludwig Maximilian University', 'Heidelberg University', 'Humboldt University', 'RWTH Aachen'],
      requirements: ['Valid passport', 'Student visa', 'University admission', 'Proof of funds', 'Health insurance']
    },
    {
      id: 'newzealand',
      name: 'New Zealand',
      image: 'https://images.pexels.com/photos/724949/pexels-photo-724949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      description: 'New Zealand offers a safe, welcoming environment with high-quality education, beautiful landscapes, and work opportunities during and after studies.',
      universities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University'],
      requirements: ['Valid passport', 'Student visa', 'Offer of place', 'Financial evidence', 'Medical certificate']
    }
  ];
  
  const activeDestination = destinations.find(d => d.id === activeTab) || destinations[0];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Study Destinations</h2>
          <p className="text-lg text-gray-600">
            Explore top education destinations around the world and find the perfect place to pursue your academic goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              className={`px-4 py-2 rounded-full mb-2 transition-colors ${
                activeTab === dest.id 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
              onClick={() => setActiveTab(dest.id)}
            >
              {dest.name}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-soft overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="h-64 md:h-auto bg-cover bg-center" 
              style={{ backgroundImage: `url(${activeDestination.image})` }}
            ></div>
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-900 mr-2" size={20} />
                <h3 className="text-2xl font-semibold text-blue-900">{activeDestination.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{activeDestination.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-900 mb-3">Top Universities</h4>
                  <ul className="space-y-2">
                    {activeDestination.universities.map((uni, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 mt-1.5 mr-2 rounded-full bg-amber-500"></span>
                        <span>{uni}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-900 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {activeDestination.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 mt-1.5 mr-2 rounded-full bg-amber-500"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="btn btn-primary bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-900">
                  Learn More About {activeDestination.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;