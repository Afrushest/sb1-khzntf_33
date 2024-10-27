import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceTestimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Ben Ali',
      position: 'CTO',
      company: 'TechCorp Tunisia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'LinSoft has been instrumental in our cloud transformation journey. Their expertise in AWS and RedHat technologies is unmatched.',
      rating: 5
    },
    {
      name: 'Sarah Mansour',
      position: 'IT Director',
      company: 'DataTech Algeria',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'The training programs provided by LinSoft have significantly improved our team\'s technical capabilities.',
      rating: 5
    },
    {
      name: 'Mohammed Hassan',
      position: 'CEO',
      company: 'InnovateTech Morocco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'Exceptional service and support. LinSoft\'s team goes above and beyond to ensure our success.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-block bg-linsoft-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;