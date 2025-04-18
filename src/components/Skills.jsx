import { motion } from "framer-motion";
import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    bgColor: "bg-white/5",
  },
  {
    title: "Dev Tools",
    skills: ["Git", "Vercel", "Render"],
    bgColor: "bg-white/5",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    bgColor: "bg-white/5",
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
    bgColor: "bg-white/5",
  },
];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#12262F] to-[#19323C] text-white"
  >
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillGroups.slice(0, 3).map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`
              relative overflow-hidden
              ${group.bgColor}
              border border-white/10
              rounded-2xl shadow-md p-6 text-center
              transition-all duration-300
              hover:shadow-2xl active:shadow-2xl
              group
            `}
          >
            <span className="reflection absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-10 rotate-12 pointer-events-none group-hover:animate-reflection" />

            <h3 className="text-2xl font-semibold mb-4 text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Center the last group */}
        <div className="hidden md:block" />
        <motion.div
          key={skillGroups[3].title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`
            relative overflow-hidden
            ${skillGroups[3].bgColor}
            border border-white/10
            rounded-2xl shadow-md p-6 text-center
            transition-all duration-300
            hover:shadow-2xl active:shadow-2xl
            group
          `}
        >
          <span className="reflection absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-10 rotate-12 pointer-events-none group-hover:animate-reflection" />

          <h3 className="text-2xl font-semibold mb-4 text-white">
            {skillGroups[3].title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillGroups[3].skills.map((skill) => (
              <span
                key={skill}
                className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        <div className="hidden md:block" />
      </div>
    </div>
  </section>
);

export default Skills;




// import { motion } from "framer-motion";
// import React from "react";

// const skillGroups = [
//   {
//     title: "Frontend",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
//     bgColor: "bg-indigo-50 dark:bg-indigo-800",
//   },
//   {
//     title: "Dev Tools",
//     skills: ["Git", "Vercel", "Render"],
//     bgColor: "bg-pink-50 dark:bg-pink-800",
//   },
//   {
//     title: "Backend",
//     skills: ["Node.js", "Express.js"],
//     bgColor: "bg-green-50 dark:bg-green-800",
//   },
//   {
//     title: "Database",
//     skills: ["MongoDB", "MySQL"],
//     bgColor: "bg-yellow-50 dark:bg-yellow-800",
//   },
// ];

// const Skills = () => (
//   <section
//     id="skills"
//     className="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
//   >
//     <div className="max-w-6xl mx-auto px-4">
//       <h2 className="text-4xl font-bold text-center mb-16 text-indigo-700 dark:text-indigo-400">
//         Skills
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {skillGroups.slice(0, 3).map((group, index) => (
//           <motion.div
//             key={group.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className={`
//               relative overflow-hidden
//               ${group.bgColor}
//               border border-gray-200 dark:border-gray-700
//               rounded-2xl shadow-md p-6 text-center
//               transition-all duration-300
//               hover:shadow-2xl active:shadow-2xl
//               group
//             `}
//           >
//             {/* Glass reflection span */}
//             <span className="reflection absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 rotate-12 pointer-events-none group-hover:animate-reflection" />

//             <h3 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
//               {group.title}
//             </h3>
//             <div className="flex flex-wrap justify-center gap-3">
//               {group.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="inline-block bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}

//         {/* Center the last group */}
//         <div className="hidden md:block" />
//         <motion.div
//           key={skillGroups[3].title}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className={`
//             relative overflow-hidden
//             ${skillGroups[3].bgColor}
//             border border-gray-200 dark:border-gray-700
//             rounded-2xl shadow-md p-6 text-center
//             transition-all duration-300
//             hover:shadow-2xl active:shadow-2xl
//             group
//           `}
//         >
//           <span className="reflection absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-20 rotate-12 pointer-events-none group-hover:animate-reflection" />

//           <h3 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
//             {skillGroups[3].title}
//           </h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {skillGroups[3].skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="inline-block bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-600 transition"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//         <div className="hidden md:block" />
//       </div>
//     </div>
//   </section>
// );

// export default Skills;


