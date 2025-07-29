import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => (
  <div className="pt-24 max-w-7xl mx-auto px-4">
    <h1 className="text-5xl font-black text-center mb-2">
      Get In <span className="text-blue-600">Touch</span>
    </h1>
    <p className="text-lg text-center mb-10 text-gray-700">
      Ready to transform your ideas into reality? Let’s discuss your project and explore how
      we can help you achieve your goals.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <ContactForm />
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center mb-2">
            <svg width={26} height={26} fill="none" viewBox="0 0 24 24" className="mr-2 text-purple-600">
              <path d="M20 4H4v16h16V4zm-2 2v2l-2 2h2v2h-2l2 2v2h-2l2 2v2h-2l2 2v2h-2l2 2v2H4v-2l2-2v-2H4v-2l2-2v-2H4v-2l2-2v-2H4v-2l2-2V4h2l2 2h2l2-2h2l2 2v2h-2z" fill="currentColor" />
            </svg>
            <div>
              <div className="font-semibold">Email Us</div>
              <a href="mailto:info@ajubatech.com" className="text-blue-700 hover:underline">
                info@ajubatech.com
              </a>
              <div className="text-xs text-gray-500">We respond within 24 hours</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center mb-2">
            <svg width={26} height={26} fill="none" viewBox="0 0 24 24" className="mr-2 text-purple-600">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 6.08 7 13 7 13s7-6.92 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" fill="currentColor" />
            </svg>
            <div>
              <div className="font-semibold">Visit Us</div>
              <a href="https://goo.gl/maps/BjY76Ge3K68oLKoA7" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                822 Manukau Road,
              </a>
              <div className="text-xs text-gray-500">
                Royal Oak, Auckland, New Zealand
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl shadow p-6 text-white">
          <div className="font-semibold mb-2">Global Presence</div>
          <div className="flex space-x-4">
            <div className="bg-gray-800 rounded-lg p-4 flex-1 text-center">
              <div className="text-lg font-bold">Sydney</div>
              <div className="text-xs">Australia</div>
              <div className="text-xs opacity-70">AEST</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex-1 text-center">
              <div className="text-lg font-bold">Auckland</div>
              <div className="text-xs">New Zealand</div>
              <div className="text-xs opacity-70">GMT</div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl shadow p-6">
          <div className="font-semibold mb-2">Why Work With Us?</div>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Free initial consultation</li>
            <li>Enterprise-grade solutions</li>
            <li>Fast response time</li>
            <li>Experienced team</li>
            <li>Flexible engagement</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
