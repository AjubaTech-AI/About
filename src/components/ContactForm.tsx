import React, { useEffect } from "react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgvzyroq"); // your Formspree ID
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      // Redirect after 2 seconds to thank-you page
      const timer = setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate]);

  if (state.succeeded) {
    return <p className="text-green-600 text-center mt-4">Thanks for your message! Redirecting...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      {/* e.g. */}
      <input id="email" type="email" name="email" required />
      <textarea id="message" name="message" required />
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
