import React from 'react';
import { User, Mail, MessageSquare,Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="w-screen mx-auto pt-[80px] p-8 shadow-lg flex flex-col md:flex-row gap-10 justify-center">
      <div className="flex-1 max-w-[700px]">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-green-100">Contact Us</h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-semibold text-green-300 mb-1">
              Name
            </label>
            <div className="flex items-center border border-green-700 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition duration-300">
              <span className="pl-3 text-green-400">
                <User size={18} />
              </span>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 bg-transparent focus:outline-none text-green-100 placeholder-green-500"
              placeholder="Your Name"
            />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-semibold text-green-300 mb-1">
              Phone
            </label>
            <div className="flex items-center border border-green-700 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition duration-300">
              <span className="pl-3 text-green-400">
                <Phone size={18} />
              </span>
            <input
              id="phone"
              type="tel"
              className="w-full px-3 py-2 bg-transparent focus:outline-none text-green-100 placeholder-green-500"
              placeholder="+123 445 665"
            />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-green-300 mb-1">
              Email
            </label>
            <div className="flex items-center border border-green-700 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition duration-300">
              <span className="pl-3 text-green-400">
                <Mail size={18} />
              </span>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-transparent focus:outline-none text-green-100 placeholder-green-500"
              placeholder="you@example.com"
            />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-semibold text-green-300 mb-1">
              Message
            </label>
            <div className="flex items-start border border-green-700 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition duration-300">
              <span className="pl-3 pt-2 text-green-400">
                <MessageSquare size={18} />
              </span>
              <textarea
                id="message"
                className="w-full px-3 py-2 bg-transparent focus:outline-none text-green-100 placeholder-green-500 resize-none"
                rows={4}
                placeholder="Your Message"
              />
            </div>
          </div>
          <div className="text-left">
          <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r transition-colors"
              >
                Send Message
              </button>
          </div>
         
        </form>
      </div>
     
    </div>
  );
};

export default ContactForm;
