

// import { motion } from "framer-motion";
// import MyImage from "../assets/MyImage.jpg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
//     >
      
//       <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">
//       About Me
//       </h2>

//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 h-full">
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2"
//         >
//           <img
//             src={MyImage}
//             alt="Shubham Dubey"
//             // className="rounded-2xl shadow-lg object-cover w-full h-auto"
//             className="rounded-2xl shadow-lg object-cover w-3/4 md:w-2/3 lg:w-1/2 h-auto mx-auto"
//           />
//         </motion.div>

//         {/* Info Cards */}
//         <div className="w-full md:w-1/2 flex flex-col gap-6">
//           {/* Introduction */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
//           >
//             <h3 className="text-2xl font-semibold mb-2">👋 Introduction</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//             Hi, I'm <span className="font-medium">Shubham Dubey</span>, a second-year Computer Engineering student at <span className="font-medium">Datta Meghe College of Engineering</span>, moving into my third year this June.
//             I'm passionate about web development and love building interactive, user-friendly interfaces using modern tools and frameworks like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>.
//             <br /><br />
//              Currently, I’m also expanding my skills by learning <strong>Node.js</strong> for backend development and improving my problem-solving with <strong>Java & DSA</strong>.
//             </p>

//           </motion.div>

//           {/* Education */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
//           >
//             <h3 className="text-2xl font-semibold mb-2">🎓 Education</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               I’m pursuing a degree in <strong>Computer Engineering</strong> at <strong>Datta Meghe College of Engineering</strong>. My academic journey is complemented by hands-on learning in full-stack development and computer science fundamentals. I enjoy turning ideas into working applications and continuously strive to grow as a developer.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { motion } from "framer-motion";
import MyImage from "../assets/MyImage.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-[#12262F] to-[#19323C] text-white pt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 h-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={MyImage}
            alt="Shubham Dubey"
            className="rounded-2xl shadow-lg object-cover w-3/4 md:w-2/3 lg:w-1/2 h-auto mx-auto border border-white/10"
          />
        </motion.div>

        {/* Info Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              👋 Introduction
            </h3>
            <p className="text-white/80 leading-relaxed">
              Hi, I'm <span className="font-medium text-white">Shubham Dubey</span>, a second-year Computer Engineering student at <span className="font-medium text-white">Datta Meghe College of Engineering</span>, moving into my third year this June.
              <br /><br />
              I'm passionate about web development and love building interactive, user-friendly interfaces using modern tools and frameworks like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>.
              <br /><br />
              Currently, I’m expanding my skills by learning <strong>Node.js</strong> for backend development and improving my problem-solving with <strong>Java & DSA</strong>.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              🎓 Education
            </h3>
            <p className="text-white/80 leading-relaxed">
              I’m pursuing a degree in <strong>Computer Engineering</strong> at <strong>Datta Meghe College of Engineering</strong>. My academic journey is complemented by hands-on learning in full-stack development and computer science fundamentals. I enjoy turning ideas into working applications and continuously strive to grow as a developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



