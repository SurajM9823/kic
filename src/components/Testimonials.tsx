import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  country: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      university: "University of Toronto",
      country: "Canada",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      quote: "KIC Education helped me navigate the complex visa process for Canada. Their personalized guidance made all the difference in my successful application to University of Toronto.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      university: "Imperial College London",
      country: "United Kingdom",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      quote: "I couldn't have achieved my dream of studying in London without KIC's support. Their counselors were knowledgeable about UK universities and helped me secure a scholarship.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      university: "University of Melbourne",
      country: "Australia",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      quote: "The team at KIC provided exceptional service from university selection to pre-departure briefing. Their attention to detail ensured my Australia student visa was approved on the first attempt.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      university: "Harvard University",
      country: "United States",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      quote: "KIC's comprehensive approach to the US application process was impressive. Their guidance on personal statements and interview preparation was invaluable for my Harvard admission.",
      rating: 5
    },
    {
      id: 5,
      name: "Ana Rodriguez",
      university: "Technical University of Munich",
      country: "Germany",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      quote: "I appreciated KIC's honest advice about studying in Germany. They helped me understand the language requirements and find a program taught in English that matched my career goals.",
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-white">Success Stories</h2>
          <p className="text-lg text-blue-100">
            Hear from our students who successfully achieved their international education goals with our guidance.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-amber-500">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                
                <blockquote className="text-lg italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col">
                  <span className="font-semibold text-lg text-blue-900">{testimonials[currentIndex].name}</span>
                  <span className="text-gray-600">{testimonials[currentIndex].university}</span>
                  <span className="text-amber-500">{testimonials[currentIndex].country}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white text-blue-900 hover:bg-amber-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white text-blue-900 hover:bg-amber-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-amber-500' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;