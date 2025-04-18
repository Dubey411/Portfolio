


// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { useState } from "react";
// import MyImage from "../assets/MyImage.jpg";

// const Hero = () => {
//   const [userName, setUserName] = useState("");
//   const [tempName, setTempName] = useState("");
//   const [isGreeting, setIsGreeting] = useState(false);
//   const [inputVisible, setInputVisible] = useState(true);

//   const handleNameSubmit = () => {
//     if (tempName.trim()) {
//       setUserName(tempName.trim());
//       setInputVisible(false);
//       setIsGreeting(true);
//       setTimeout(() => setIsGreeting(false), 3000);
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-6 md:px-12 overflow-hidden"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16">
//         {/* Left Side */}
//         <div className="text-center md:text-left w-full md:w-1/2">
//           <motion.h2
//             className="text-xl md:text-3xl font-light mb-4"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Hi, I'm
//           </motion.h2>

//           {/* Name */}
//           <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] flex flex-wrap gap-2">
//             <span className="flex">
//               {"SHUBHAM".split("").map((letter, index) => (
//                 <motion.span
//                   key={"shubham-" + index}
//                   initial={{ opacity: 0, y: -100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </span>
//             <span className="flex ml-3">
//               {"DUBEY".split("").map((letter, index) => (
//                 <motion.span
//                   key={"dubey-" + index}
//                   initial={{ opacity: 0, y: -100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: (index + 7) * 0.1, type: "spring", stiffness: 300 }}
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//             </span>
//           </div>

//           {/* Typing Effect */}
//           <div className="mt-8 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
//             <TypeAnimation
//               sequence={[
//                 "🌟 Web Developer by passion, Designer by curiosity.",
//                 2000,
//                 "💻 Crafting responsive, elegant, and user-friendly web experiences.",
//                 2000,
//                 "🚀 Always learning. Always building. Let’s grow together.",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>

//           {/* CV Button */}
//           <motion.a
//             href="/cv.pdf"
//             download
//             className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-100 transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.8 }}
//           >
//             Download CV
//           </motion.a>
//         </div>

//         {/* Profile Image */}
//         <motion.div
//           className="mt-10 md:mt-0 w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.8 }}
//         >
//           <img
//             src={MyImage}
//             alt="Shubham Dubey"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>

//       {/* Robot Chat Box */}
//       <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
//         {/* Input */}
//         {inputVisible && (
//           <div className="mb-3 p-3 bg-white text-black rounded-xl shadow-lg flex flex-col items-center gap-2 w-56">
//             <label className="text-sm font-semibold">What's your name?</label>
//             <input
//               type="text"
//               className="px-3 py-1 w-full text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={tempName}
//               onChange={(e) => setTempName(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
//             />
//             <button
//               onClick={handleNameSubmit}
//               className="text-xs px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {/* Greeting bubble */}
//         {isGreeting && (
//           <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-lg shadow-md animate-bounce">
//             Hello, {userName}!
//           </div>
//         )}

//         {/* Robot Image */}
//         <motion.img
//           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//           alt="Robot"
//           className="w-full h-full"
//           animate={isGreeting ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { useState } from "react";
// import MyImage from "../assets/MyImage.jpg";

// const Hero = () => {
//   const [userName, setUserName] = useState("");
//   const [tempName, setTempName] = useState("");
//   const [isGreeting, setIsGreeting] = useState(false);
//   const [inputVisible, setInputVisible] = useState(true);

//   const handleNameSubmit = () => {
//     if (tempName.trim()) {
//       setUserName(tempName.trim());
//       setInputVisible(false);
//       setIsGreeting(true);
//       setTimeout(() => setIsGreeting(false), 3000);
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] text-white px-6 md:px-12 overflow-hidden"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16 gap-10">
//         {/* Left Content */}
//         <div className="text-center md:text-left w-full md:w-1/2">
//           <motion.h2
//             className="text-xl md:text-3xl font-light mb-4"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Hi, I'm
//           </motion.h2>

//           {/* Animated Name */}
//           <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl flex flex-wrap justify-center md:justify-start">
//             {["Shubham", "Dubey"].map((word, wIndex) => (
//               <div key={wIndex} className="flex gap-1 ml-0 md:ml-2">
//                 {word.split("").map((letter, i) => (
//                   <motion.span
//                     key={`${word}-${i}`}
//                     initial={{ opacity: 0, y: -80 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       delay: (wIndex * 6 + i) * 0.1,
//                       type: "spring",
//                       stiffness: 300,
//                     }}
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Typing Animation */}
//           <div className="mt-8 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
//             <TypeAnimation
//               sequence={[
//                 "🌟 Web Developer by passion, Designer by curiosity.",
//                 2000,
//                 "💻 Crafting responsive, elegant, and user-friendly web experiences.",
//                 2000,
//                 "🚀 Always learning. Always building. Let’s grow together.",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>

//           {/* Download CV */}
//           <motion.a
//             href="/cv.pdf"
//             download
//             className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-100 transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.8 }}
//           >
//             Download CV
//           </motion.a>
//         </div>

//         {/* Right Content – Profile Image */}
//         <motion.div
//           className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.8 }}
//         >
//           <img
//             src={MyImage}
//             alt="Shubham Dubey"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>

//       {/* Chatbot Widget */}
//       <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
//         {inputVisible && (
//           <div className="mb-3 p-3 bg-white text-black rounded-xl shadow-lg flex flex-col items-center gap-2 w-56">
//             <label className="text-sm font-semibold">What's your name?</label>
//             <input
//               type="text"
//               className="px-3 py-1 w-full text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={tempName}
//               onChange={(e) => setTempName(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
//             />
//             <button
//               onClick={handleNameSubmit}
//               className="text-xs px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//             >
//               Submit
//             </button>
//           </div>
//         )}

//         {isGreeting && (
//           <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-lg shadow-md animate-bounce">
//             Hello, {userName}!
//           </div>
//         )}

//         <motion.img
//           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//           alt="Robot"
//           className="w-full h-full"
//           animate={isGreeting ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import MyImage from "../assets/MyImage.jpg";

const Hero = () => {
  const [userName, setUserName] = useState("");
  const [tempName, setTempName] = useState("");
  const [isGreeting, setIsGreeting] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);

  const handleNameSubmit = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
      setInputVisible(false);
      setIsGreeting(true);
      setTimeout(() => setIsGreeting(false), 3000);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16 gap-12">
        {/* Left Side */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <motion.h2
            className="text-xl md:text-3xl font-light mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm
          </motion.h2>

          {/* Glowing Full Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SHUBHAM DUBEY
          </motion.h1>

          {/* Typing Text */}
          <div className="mt-6 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
            <TypeAnimation
              sequence={[
                "🌟 Web Developer by passion, Designer by curiosity.",
                2000,
                "💻 Crafting responsive, elegant, and user-friendly web experiences.",
                2000,
                "🚀 Always learning. Always building. Let’s grow together.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-100 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500"
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
      </div>

      {/* Chatbot Box */}
      <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
        {/* Name Input */}
        {inputVisible && (
          <div className="mb-3 p-3 bg-white text-black rounded-xl shadow-lg flex flex-col items-center gap-2 w-56">
            <label className="text-sm font-semibold">What's your name?</label>
            <input
              type="text"
              className="px-3 py-1 w-full text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
            />
            <button
              onClick={handleNameSubmit}
              className="text-xs px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        )}

        {/* Greeting bubble */}
        {isGreeting && (
          <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-lg shadow-md animate-bounce">
            Hello, {userName}!
          </div>
        )}

        {/* Robot Image */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="Robot"
          className="w-full h-full"
          animate={isGreeting ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
