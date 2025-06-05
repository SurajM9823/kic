import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-3xl font-bold text-[#1c5292] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with our expert consultants to start your international education journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-[#ffffff] rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#1c5292]">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4cbbe0]"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4cbbe0]"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4cbbe0]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4cbbe0]"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">University Admission</option>
                    <option value="visa">Visa Consultation</option>
                    <option value="scholarship">Scholarship Information</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4cbbe0]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4cbbe0] text-[#ffffff] font-semibold py-3 px-6 rounded-md hover:bg-[#1c5292] transition-colors duration-300 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-b from-[#ffffff] to-[#e6f0fa] rounded-lg shadow-xl p-10 border border-[#4cbbe0]/20">
            <h3 className="text-2xl font-bold mb-8 text-[#1c5292]">Contact Information</h3>

            <ul className="space-y-4">
              <li className="flex items-start p-3 rounded-md hover:bg-[#4cbbe0]/10 transition-colors">
                <MapPin className="mr-3 h-6 w-6 text-[#1c5292] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1c5292] text-lg">Office Address</h4>
                  <p className="text-[#374151] text-base">123 Education Avenue, Suite 200<br />New York, NY 10001, USA</p>
                </div>
              </li>
              <li className="flex items-start p-3 rounded-md hover:bg-[#4cbbe0]/10 transition-colors">
                <Phone className="mr-3 h-6 w-6 text-[#1c5292] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1c5292] text-lg">Phone Number</h4>
                  <p className="text-[#374151] text-base">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start p-3 rounded-md hover:bg-[#4cbbe0]/10 transition-colors">
                <Mail className="mr-3 h-6 w-6 text-[#1c5292] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1c5292] text-lg">Email Address</h4>
                  <p className="text-[#374151] text-base">info@kiceducation.com</p>
                </div>
              </li>
              <li className="flex items-start p-3 rounded-md hover:bg-[#4cbbe0]/10 transition-colors">
                <Clock className="mr-3 h-6 w-6 text-[#1c5292] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#1c5292] text-lg">Office Hours</h4>
                  <p className="text-[#374151] text-base">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;