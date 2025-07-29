import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xgvzyroq"); // Use your Formspree form ID

  return (
    <>
      {state.succeeded ? (
        <p className="text-green-600 font-semibold text-center mt-4">
          Thanks for your message! We will get back to you shortly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="fullName" className="block font-semibold mb-1">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              disabled={state.submitting}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              disabled={state.submitting}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="company" className="block font-semibold mb-1">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              disabled={state.submitting}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Company" field="company" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={state.submitting}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Show error messages if any */}
          {state.errors.length > 0 && (
            <p className="text-red-600 font-semibold text-center">
              Oops! Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded hover:brightness-110 transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-8 bg-gray-50">
      {/* Left side: Contact Info */}
      <section className="md:w-1/3 bg-white rounded shadow p-6 flex flex-col space-y-6">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div>
          <h3 className="font-semibold">Email</h3>
          <p>
            <a href="mailto:contact@ajubatech.com" className="text-blue-600 hover:underline">
              contact@ajubatech.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>123 Ajuba Tech Street<br />Auckland, New Zealand</p>
        </div>
      </section>

      {/* Right side: Contact Form */}
      <section id="contact" className="md:w-2/3 bg-white rounded shadow p-6">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
