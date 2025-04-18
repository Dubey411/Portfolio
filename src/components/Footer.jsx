



// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import the Gmail (Envelope) icon

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3, duration: 1 }}
//       className="bg-gray-900 text-white py-6 text-center"
//     >
    
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Contact Me</h2> {/* Added "Contact Me" */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <a
//             href="https://github.com/Dubey411" // Replace with your GitHub link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/shubham-dubey" // Replace with your LinkedIn link
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-gray-400"
//           >
//             <FaLinkedin size={24} />
//           </a>
//           <a
//             href="mailto:dubeytech9619@gmail.com" // Link to your Gmail
//             className="text-white hover:text-gray-400"
//           >
//             <FaEnvelope size={24} />
//           </a>
//         </div>
//       </div>
//       <p>© {new Date().getFullYear()} Shubham Dubey. All rights reserved.</p>
//     </motion.footer>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f2027] text-white py-10 px-4 mt-10" // Dark blue gradient base
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 drop-shadow-md">
          Let’s Connect
        </h2>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/Dubey411"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-dubey"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:dubeytech9619@gmail.com"
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Shubham Dubey. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

