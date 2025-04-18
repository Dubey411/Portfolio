// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_m0zr3m8",     // Replace with your EmailJS service ID
//       "template_z7dj0ha",    // Replace with your EmailJS template ID
//       form.current,
//       "QueAkad-3wfe6uIex"      // Replace with your EmailJS public key
//     ).then(
//       () => {
//         alert("Message sent successfully!");
//         form.current.reset();
//       },
//       (error) => {
//         alert("Failed to send message. Please try again.");
//         console.error(error);
//       }
//     );
//   };

//   return (
//     <section id="contact" className="min-h-screen py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-8 text-center">🤝 Let's Collaborate</h2>
//         <form ref={form} onSubmit={sendEmail} className="grid gap-6">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             className="p-3 rounded bg-gray-100 dark:bg-gray-800"
//             required
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             className="p-3 rounded bg-gray-100 dark:bg-gray-800"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             className="p-3 rounded bg-gray-100 dark:bg-gray-800"
//             required
//           ></textarea>
//           <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0zr3m8",
        "template_z7dj0ha",
        form.current,
        "QueAkad-3wfe6uIex"
      )
      .then(
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
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-br from-[#12262F] to-[#19323C] text-white pt-24"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          🤝 Let's Collaborate
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl grid gap-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition shadow-md hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
