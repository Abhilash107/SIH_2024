import React, { useState } from "react";
import "./ContactUsStyle.css";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Form submitted:", { name, email, message });

    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <section className="left">
        <div className="Aboutus">
          <div className="Aboutus">
            <h2>About Us</h2>
            <p>
              We are a team of passionate individuals dedicated to providing
              exceptional service and support to our customers.
            </p>
            <p>
              Our mission is to deliver high-quality solutions that meet the
              evolving needs of our clients, while fostering a culture of
              innovation and excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="right">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
