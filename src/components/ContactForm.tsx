import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  // Replace "xgvzyroq" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xgvzyroq");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold mt-4 text-center">
        Thanks for your message! We will get back to you shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded shadow"
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

      {/* Show error message if submission fails */}
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
  );
};

export default ContactForm;
