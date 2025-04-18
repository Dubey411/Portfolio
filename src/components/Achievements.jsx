// import { motion } from "framer-motion";

// const achievements = [
//   { title: "100+ GitHub Contributions", desc: "Active Open Source Contributor" },
//   { title: "Frontend Mentor Top 5%", desc: "Ranked for solving UI challenges" },
//   { title: "Hackathon Winner", desc: "Won UI/UX track in CodeFest 2024" },
// ];

// const Achievements = () => (
//   <section id="achievements" className=" min-h-screen pt-24 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//     <div className="max-w-5xl mx-auto px-4">
//       <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {achievements.map((a, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.2 }}
//             className="bg-indigo-100 dark:bg-indigo-800 p-6 rounded-xl shadow hover:shadow-xl"
//           >
//             <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
//             <p className="text-sm">{a.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Achievements;


import { motion } from "framer-motion";
import { FaGithub, FaTrophy, FaCode } from "react-icons/fa";

const achievements = [
  {
    title: "Tailwind With React",
    desc: "Created Portfolio project",
    icon: <FaGithub className="text-indigo-400" size={28} />,
    certLink: "#",
  },
  {
    title: "Tailwind with Ejs",
    desc: "Created BnB Clone",
    icon: <FaCode className="text-indigo-400" size={28} />,
    certLink: "#",
  },
  {
    title: "Frontend With Node.js",
    desc: "Created College Management System Project",
    icon: <FaTrophy className="text-indigo-400" size={28} />,
    certLink: "#",
  },
];

const Achievements = () => (
  <section
    id="achievements"
    className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#0a1f29] via-[#0f2b38] to-[#0c1c26] text-white"
  >
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">🏆 Achievements And Certificates</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group"
          >
            {/* Sparkle Glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:animate-pulse bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />

            <div className="flex items-center gap-4 mb-4">
              {a.icon}
              <h3 className="text-xl font-semibold">{a.title}</h3>
            </div>
            <p className="text-sm mb-4 text-gray-300">{a.desc}</p>
            <a
              href={a.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto text-indigo-400 hover:text-indigo-300 hover:underline font-medium text-sm"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;




