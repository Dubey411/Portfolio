import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m0zr3m8",     // Replace with your EmailJS service ID
      "template_z7dj0ha",    // Replace with your EmailJS template ID
      form.current,
      "QueAkad-3wfe6uIex"      // Replace with your EmailJS public key
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">🤝 Let's Collaborate</h2>
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-100 dark:bg-gray-800"
            required
          ></textarea>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
