import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xgvzyroq"); // Replace with your Formspree form ID
  const navigate = useNavigate();

  // Wrapper to log submission and call Formspree's handleSubmit
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submission triggered");
    handleSubmit(event);
  };

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate]);

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-center font-semibold mt-4">
        Thanks for your message! Redirecting...
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto space-y-4 p-6 bg-gray-50 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>

      <label htmlFor="fullName" className="block font-semibold">
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

      <label htmlFor="email" className="block font-semibold">
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

      <label htmlFor="company" className="block font-semibold">
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

      <label htmlFor="message" className="block font-semibold">
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
