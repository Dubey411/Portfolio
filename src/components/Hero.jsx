// import { motion } from "framer-motion";
// import MyImage from "../assets/MyImage.jpg";


// const letters = ["S", "H", "U","B","H","A","M"," ", "D","U","B","E","Y"]; // 👈 Replace with your name's letters
// const fullName = letters.join("");

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-4"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side - Text and Animation */}
//         <div className="text-center md:text-left mb-10 md:mb-0">
//           <motion.h2
//             className="text-xl md:text-2xl mb-4"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Hi I'm
//           </motion.h2>

//           {/* Letter by letter animation */}
//           <div className="flex justify-center md:justify-start space-x-2 text-6xl md:text-8xl font-bold">
//             {letters.map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: -100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.3, type: "spring", stiffness: 300 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </div>

//           {/* Floating name glow effect */}
//           <motion.h1
//             className="mt-6 text-3xl md:text-4xl font-extrabold tracking-wide text-white"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [0, 1, 0.8, 1, 0.9, 1],
//               textShadow: [
//                 "0 0 0px #fff",
//                 "0 0 10px #fff",
//                 "0 0 20px #fff",
//                 "0 0 30px #7f5af0",
//                 "0 0 40px #7f5af0",
//                 "0 0 10px #fff",
//                 "0 0 0px #fff",
//               ],
//               y: [0, -5, 0, 5, 0],
//             }}
//             transition={{
//               duration: 4,
//               delay: letters.length * 0.3 + 0.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           >
//             {fullName}
//           </motion.h1>

//           {/* Download CV button */}
//           <motion.a
//             href="/cv.pdf" // 👈 Replace with your actual CV path
//             download
//             className="inline-block mt-8 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5 }}
//           >
//             Download CV
//           </motion.a>
//         </div>

//         {/* Right Side - AI Image */}
//         <motion.div
//           className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-xl"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.8 }}
//         >
//          <img
//           src={MyImage}
//           alt="Shubham Dubey"
//           className="w-full h-full object-cover"
//          />

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import MyImage from "../assets/MyImage.jpg";

const letters = ["S", "H", "U", "B", "H", "A", "M", " ", "D", "U", "B", "E", "Y"];
const fullName = letters.join("");

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Side - Text and Animation */}
        <div className="text-center md:text-left mb-10 md:mb-0">
          <motion.h2
            className="text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi I'm
          </motion.h2>

          {/* Letter by letter animation */}
          <div className="flex justify-center md:justify-start space-x-2 text-6xl md:text-8xl font-bold">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Floating name glow effect */}
          <motion.h1
            className="mt-6 text-3xl md:text-4xl font-extrabold tracking-wide text-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0.9, 1],
              textShadow: [
                "0 0 0px #fff",
                "0 0 10px #fff",
                "0 0 20px #fff",
                "0 0 30px #7f5af0",
                "0 0 40px #7f5af0",
                "0 0 10px #fff",
                "0 0 0px #fff",
              ],
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 4,
              delay: letters.length * 0.3 + 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {fullName}
          </motion.h1>

          {/* Download CV button */}
          <motion.a
            href="/cv.pdf"
            download
            className="inline-block mt-8 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Right Side - AI Image */}
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <img
            src={MyImage}
            alt="Shubham Dubey"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Robot Greeting */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          {/* Robot Icon */}
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Robot"
            className="w-20 h-20 md:w-24 md:h-24 animate-wave origin-bottom"
          /> */}

         <img
           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
           alt="Robot"
           className="w-20 h-20 md:w-24 md:h-24 animate-wave origin-bottom"
          />

         
            {/* Speech bubble */}
         <div className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-md text-sm md:text-base">
         Hi, Welcome!
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


