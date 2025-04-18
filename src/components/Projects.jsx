
// import { motion } from "framer-motion";
// import image from "../assets/image1.png"; // Replace with your local image
// import image1 from "../assets/image2.png";
// import image2 from "../assets/image3.png";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "Personal website built with React and Tailwind.",
//     image: image,
//   },
//   {
//     title: "E-commerce App",
//     description: "Online store with payment integration.",
//     image: image2, // fallback image
//   },
//   {
//     title: "College Management System",
//     description: "Built using HTML, CSS, JS, Node.js, Express, and MySQL.",
//     image: image1, // fallback image
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen pt-24"
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               className="bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform"
//             >
//               {project.image && (
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover rounded-lg mb-4 sm:h-64 md:h-48 lg:h-56"
//                 />
//               )}
//               <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-300">
//                 {project.title}
//               </h3>
//               <p className="text-sm text-gray-700 dark:text-gray-300">
//                 {project.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import { motion } from "framer-motion";
import image from "../assets/image1.png";
import image1 from "../assets/image2.png";
import image2 from "../assets/image3.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal website built with React and Tailwind.",
    image: image,
  },
  {
    title: "E-commerce App",
    description: "Online store with payment integration.",
    image: image2,
  },
  {
    title: "College Management System",
    description: "Built using HTML, CSS, JS, Node.js, Express, and MySQL.",
    image: image1,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 min-h-screen bg-gradient-to-br from-[#12262F] to-[#19323C] text-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-white/10"
              />
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
                {project.title}
              </h3>
              <p className="text-sm text-white/80">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
