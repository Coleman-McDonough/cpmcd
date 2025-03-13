"use client";
import React, { useState } from "react";
import HCaptcha from "react-hcaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // State for form submission status
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // Check if hCaptcha is completed
    if (!captchaToken) {
      setStatus("");
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus(""); // Clear status
        setSuccessMessage(
          "Your message has been sent successfully! We'll get back to you ASAP.",
        );
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        setStatus(""); // Clear status
        setErrorMessage(
          result.details || "An error occurred while sending the email.",
        ); // Set error message if available
      }
    } catch (error) {
      setStatus(""); // Clear status
      setErrorMessage(error.message || "An unknown error occurred.");
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-gray-cpm py-6">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-7/12 xl:w-8/12">
            <div
              className="dark:bg-gray-dark mb-12 rounded-sm bg-gray-dark px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="dark:text-white mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>

              <p className="dark:text-body-color-dark mb-1 text-base leading-relaxed text-white">
                Phone:{" "}
                <a href="tel:978-375-7001" className="text-blue-500 underline">
                  978-375-7001
                </a>
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="dark:text-white mb-3 block text-sm font-medium text-dark"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="border-stroke dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="dark:text-white mb-3 block text-sm font-medium text-dark"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-stroke dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="dark:text-white mb-3 block text-sm font-medium text-dark"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="What can we dispose for you?"
                        className="border-stroke dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      ></textarea>
                    </div>
                  </div>

                  {/* hCaptcha Field */}
                  <div className="mt-6 flex justify-center">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                      onVerify={(token) => setCaptchaToken(token)}
                    />
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
                      disabled={status === "Sending..."} // Disable button while sending
                    >
                      {status === "Sending..." ? "Sending..." : "Submit"}{" "}
                      {/* Change button text based on status */}
                    </button>
                  </div>
                </div>
              </form>
              {status && <p className="mt-4 text-sm font-medium">{status}</p>}
              {successMessage && (
                <p className="mt-4 text-sm font-medium text-green-600">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
