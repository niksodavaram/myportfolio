// src/pages/Contact.tsx
import React, { useState } from "react";
import "./Contact.css"; // Make sure to create this CSS file as shown previously

type Review = {
  id: number;
  name: string;
  text: string;
};

export default function Contact() {
  // Contact form state
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Reviews state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [review, setReview] = useState({
    name: "",
    text: "",
  });

  // Contact form submission handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContact({ name: "", email: "", message: "" });
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  // Review form submission handler
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.name && review.text) {
      setReviews([{ id: Date.now(), ...review }, ...reviews]);
      setReview({ name: "", text: "" });
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleContactSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={contact.message}
            onChange={(e) => setContact({ ...contact, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
          {contactSubmitted && (
            <div className="success-msg">
              Thank you! I'll get back to you soon.
            </div>
          )}
        </form>
      </section>

      <section className="review-section">
        <h3>Leave a Review</h3>
        <form className="review-form" onSubmit={handleReviewSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
          />
          <textarea
            placeholder="Your Review"
            required
            rows={3}
            value={review.text}
            onChange={(e) => setReview({ ...review, text: e.target.value })}
          />
          <button type="submit">Submit Review</button>
        </form>
        <div className="reviews-list">
          <h4>Client Reviews:</h4>
          {reviews.length === 0 && <p>No reviews yet.</p>}
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <strong>{rev.name}</strong>
              <p>{rev.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}