import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xgvzyroq");

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-50 rounded-xl shadow p-6 space-y-4"
      noValidate
    >
      <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="font-semibold">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            disabled={state.submitting}
            placeholder="Your full name"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
          />
          <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            disabled={state.submitting}
            placeholder="your@email.com"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="font-semibold">
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          disabled={state.submitting}
          placeholder="Your company name"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
        />
        <ValidationError prefix="Company" field="company" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={state.submitting}
          placeholder="Tell us about your project..."
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none resize-y"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {state.submitting && (
        <p className="text-blue-600 font-medium">Sending...</p>
      )}
      {state.succeeded && (
        <p className="text-green-600 font-medium">Thank you! Your message has been sent.</p>
      )}
      {state.errors.length > 0 && (
        <p className="text-red-600 font-medium">Something went wrong. Please check your details and try again.</p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded hover:brightness-110 flex items-center justify-center space-x-2"
      >
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
        <svg width={22} height={22} fill="none" viewBox="0 0 24 24" className="ml-2">
          <path
            d="M2 21l21-9-21-9v7l15 2-15 2v7z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;
