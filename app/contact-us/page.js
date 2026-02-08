"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Contact number"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-green-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
