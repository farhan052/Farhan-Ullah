"use client";

import { useState, FormEvent } from "react";

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
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.message);
    e.currentTarget.reset();
  }

  return (
    <main style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          required
          style={{ width: "100%", marginBottom: 12 }}
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          style={{ width: "100%", marginBottom: 12 }}
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={4}
          style={{ width: "100%", marginBottom: 12 }}
        />

        <button disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 16 }}>
          {message}
        </p>
      )}
    </main>
  );
}
