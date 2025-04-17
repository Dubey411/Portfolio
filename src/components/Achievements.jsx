import { motion } from "framer-motion";

const achievements = [
  { title: "100+ GitHub Contributions", desc: "Active Open Source Contributor" },
  { title: "Frontend Mentor Top 5%", desc: "Ranked for solving UI challenges" },
  { title: "Hackathon Winner", desc: "Won UI/UX track in CodeFest 2024" },
];

const Achievements = () => (
  <section id="achievements" className=" min-h-screen pt-24 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-indigo-100 dark:bg-indigo-800 p-6 rounded-xl shadow hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
            <p className="text-sm">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
