import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Changes to UK Student Visa Requirements in 2025",
      excerpt: "Important updates to the UK's student visa application process that will affect international students planning to study in the United Kingdom.",
      date: "April 15, 2025",
      image: "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Visa Updates"
    },
    {
      id: 2,
      title: "Top Scholarships for International Students in Canada",
      excerpt: "Discover the most prestigious scholarships available for international students planning to study in Canada in the upcoming academic year.",
      date: "April 10, 2025",
      image: "https://images.pexels.com/photos/8617851/pexels-photo-8617851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Scholarships"
    },
    {
      id: 3,
      title: "Best Universities for Computer Science in 2025",
      excerpt: "Our annual ranking of the top global universities for computer science and information technology programs.",
      date: "April 3, 2025",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Rankings"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Latest News & Resources</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest education news, visa changes, and resources to help you make informed decisions.
            </p>
          </div>
          <a href="#" className="inline-flex items-center text-blue-900 font-medium mt-4 md:mt-0 hover:text-amber-500">
            View all articles
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="card group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-900 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-900">
                  <a href="#">{item.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <a href="#" className="inline-flex items-center text-blue-900 font-medium hover:text-amber-500">
                  Read more
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default News;