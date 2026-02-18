import React, { useState } from "react";
import bgImage from "../images/Contact.png";

const TELEGRAM_BOT_TOKEN = "8231210727:AAE-cUG2qQJR4a9A3qy8SJlljScvfL7X4PQ";
const TELEGRAM_CHAT_ID = "5831969325";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (formData.captcha !== "11") {
      alert("Incorrect captcha! Please try again.");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const message = `
🔔 New Contact Form Submission

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
💬 Message: ${formData.message || "No message"}

⏰ Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        },
      );

      if (response.ok) {
        alert(
          "Thank you! Your message has been sent successfully. We'll contact you soon.",
        );
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          captcha: "",
        });
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      alert(
        "Failed to send message. Please try again or contact us at +91 7419011364",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full bg-cover bg-left bg-no-repeat px-6 md:px-16 py-4 md:py-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-900">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
            Fill your order at Smart Eager Aircon !
          </h1>
          <p className="text-base md:text-lg max-w-lg leading-relaxed">
            Book Your Free Air Conditioner Offers with Smart Eager Aircon
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 bg-white/95 p-4 md:p-5 rounded-2xl shadow-xl w-full max-w-xl">
          <h2 className="text-center text-2xl font-semibold text-blue-700 mb-6">
            Fill Your Details!
          </h2>

          <form onSubmit={sendToTelegram} className="space-y-3">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <div className="flex items-center gap-3">
              <div className="px-4 py-3 bg-gray-200 rounded-lg font-semibold">
                7 + 4 =
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Captcha *"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
