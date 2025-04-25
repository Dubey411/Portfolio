


// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { useState } from "react";
// // import MyImage from "../assets/MyImage.jpg";

// // const Hero = () => {
// //   const [userName, setUserName] = useState("");
// //   const [tempName, setTempName] = useState("");
// //   const [isGreeting, setIsGreeting] = useState(false);
// //   const [inputVisible, setInputVisible] = useState(true);

// //   const handleNameSubmit = () => {
// //     if (tempName.trim()) {
// //       setUserName(tempName.trim());
// //       setInputVisible(false);
// //       setIsGreeting(true);
// //       setTimeout(() => setIsGreeting(false), 3000);
// //     }
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-6 md:px-12 overflow-hidden"
// //     >
// //       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16">
// //         {/* Left Side */}
// //         <div className="text-center md:text-left w-full md:w-1/2">
// //           <motion.h2
// //             className="text-xl md:text-3xl font-light mb-4"
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             Hi, I'm
// //           </motion.h2>

// //           {/* Name */}
// //           <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] flex flex-wrap gap-2">
// //             <span className="flex">
// //               {"SHUBHAM".split("").map((letter, index) => (
// //                 <motion.span
// //                   key={"shubham-" + index}
// //                   initial={{ opacity: 0, y: -100 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
// //                 >
// //                   {letter}
// //                 </motion.span>
// //               ))}
// //             </span>
// //             <span className="flex ml-3">
// //               {"DUBEY".split("").map((letter, index) => (
// //                 <motion.span
// //                   key={"dubey-" + index}
// //                   initial={{ opacity: 0, y: -100 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: (index + 7) * 0.1, type: "spring", stiffness: 300 }}
// //                 >
// //                   {letter}
// //                 </motion.span>
// //               ))}
// //             </span>
// //           </div>

// //           {/* Typing Effect */}
// //           <div className="mt-8 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
// //             <TypeAnimation
// //               sequence={[
// //                 "🌟 Web Developer by passion, Designer by curiosity.",
// //                 2000,
// //                 "💻 Crafting responsive, elegant, and user-friendly web experiences.",
// //                 2000,
// //                 "🚀 Always learning. Always building. Let’s grow together.",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               repeat={Infinity}
// //             />
// //           </div>

// //           {/* CV Button */}
// //           <motion.a
// //             href="/cv.pdf"
// //             download
// //             className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-100 transition duration-300"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.8 }}
// //           >
// //             Download CV
// //           </motion.a>
// //         </div>

// //         {/* Profile Image */}
// //         <motion.div
// //           className="mt-10 md:mt-0 w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500"
// //           initial={{ scale: 0, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.2, delay: 0.8 }}
// //         >
// //           <img
// //             src={MyImage}
// //             alt="Shubham Dubey"
// //             className="w-full h-full object-cover"
// //           />
// //         </motion.div>
// //       </div>

// //       {/* Robot Chat Box */}
// //       <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
// //         {/* Input */}
// //         {inputVisible && (
// //           <div className="mb-3 p-3 bg-white text-black rounded-xl shadow-lg flex flex-col items-center gap-2 w-56">
// //             <label className="text-sm font-semibold">What's your name?</label>
// //             <input
// //               type="text"
// //               className="px-3 py-1 w-full text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={tempName}
// //               onChange={(e) => setTempName(e.target.value)}
// //               onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
// //             />
// //             <button
// //               onClick={handleNameSubmit}
// //               className="text-xs px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         )}

// //         {/* Greeting bubble */}
// //         {isGreeting && (
// //           <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-lg shadow-md animate-bounce">
// //             Hello, {userName}!
// //           </div>
// //         )}

// //         {/* Robot Image */}
// //         <motion.img
// //           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
// //           alt="Robot"
// //           className="w-full h-full"
// //           animate={isGreeting ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
// //           transition={{ duration: 1 }}
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



// // import { motion } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";
// // import { useState } from "react";
// // import MyImage from "../assets/MyImage.jpg";

// // const Hero = () => {
// //   const [userName, setUserName] = useState("");
// //   const [tempName, setTempName] = useState("");
// //   const [isGreeting, setIsGreeting] = useState(false);
// //   const [inputVisible, setInputVisible] = useState(true);

// //   const handleNameSubmit = () => {
// //     if (tempName.trim()) {
// //       setUserName(tempName.trim());
// //       setInputVisible(false);
// //       setIsGreeting(true);
// //       setTimeout(() => setIsGreeting(false), 3000);
// //     }
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] text-white px-6 md:px-12 overflow-hidden"
// //     >
// //       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16 gap-10">
// //         {/* Left Content */}
// //         <div className="text-center md:text-left w-full md:w-1/2">
// //           <motion.h2
// //             className="text-xl md:text-3xl font-light mb-4"
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             Hi, I'm
// //           </motion.h2>

// //           {/* Animated Name */}
// //           <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl flex flex-wrap justify-center md:justify-start">
// //             {["Shubham", "Dubey"].map((word, wIndex) => (
// //               <div key={wIndex} className="flex gap-1 ml-0 md:ml-2">
// //                 {word.split("").map((letter, i) => (
// //                   <motion.span
// //                     key={`${word}-${i}`}
// //                     initial={{ opacity: 0, y: -80 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{
// //                       delay: (wIndex * 6 + i) * 0.1,
// //                       type: "spring",
// //                       stiffness: 300,
// //                     }}
// //                   >
// //                     {letter}
// //                   </motion.span>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Typing Animation */}
// //           <div className="mt-8 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
// //             <TypeAnimation
// //               sequence={[
// //                 "🌟 Web Developer by passion, Designer by curiosity.",
// //                 2000,
// //                 "💻 Crafting responsive, elegant, and user-friendly web experiences.",
// //                 2000,
// //                 "🚀 Always learning. Always building. Let’s grow together.",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               repeat={Infinity}
// //             />
// //           </div>

// //           {/* Download CV */}
// //           <motion.a
// //             href="/cv.pdf"
// //             download
// //             className="inline-block mt-10 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-xl hover:bg-indigo-100 transition duration-300"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.8 }}
// //           >
// //             Download CV
// //           </motion.a>
// //         </div>

// //         {/* Right Content – Profile Image */}
// //         <motion.div
// //           className="w-60 h-60 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500"
// //           initial={{ scale: 0, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 1.2, delay: 0.8 }}
// //         >
// //           <img
// //             src={MyImage}
// //             alt="Shubham Dubey"
// //             className="w-full h-full object-cover"
// //           />
// //         </motion.div>
// //       </div>

// //       {/* Chatbot Widget */}
// //       <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
// //         {inputVisible && (
// //           <div className="mb-3 p-3 bg-white text-black rounded-xl shadow-lg flex flex-col items-center gap-2 w-56">
// //             <label className="text-sm font-semibold">What's your name?</label>
// //             <input
// //               type="text"
// //               className="px-3 py-1 w-full text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               value={tempName}
// //               onChange={(e) => setTempName(e.target.value)}
// //               onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
// //             />
// //             <button
// //               onClick={handleNameSubmit}
// //               className="text-xs px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         )}

// //         {isGreeting && (
// //           <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-80 text-white text-sm px-4 py-1 rounded-lg shadow-md animate-bounce">
// //             Hello, {userName}!
// //           </div>
// //         )}

// //         <motion.img
// //           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
// //           alt="Robot"
// //           className="w-full h-full"
// //           animate={isGreeting ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
// //           transition={{ duration: 1 }}
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



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
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-12 overflow-hidden"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16 gap-12">
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

//           {/* Glowing Full Name */}
//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             SHUBHAM DUBEY
//           </motion.h1>

//           {/* Typing Text */}
//           <div className="mt-6 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
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

//       {/* Chatbot Box */}
//       <div className="absolute bottom-6 right-6 w-20 h-20 z-50 flex flex-col items-center">
//         {/* Name Input */}
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
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const handleSend = () => {
//     const trimmed = inputText.trim();
//     if (trimmed) {
//       setMessages((prev) => [
//         ...prev,
//         { text: trimmed, sender: "user" },
//         { text: `Hello, ${trimmed}! 👋`, sender: "bot" },
//       ]);
//       setInputText("");
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6 md:px-12 overflow-hidden"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between relative py-16 gap-12">
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

//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             SHUBHAM DUBEY
//           </motion.h1>

//           <div className="mt-6 text-lg md:text-2xl font-medium text-white/90 min-h-[60px]">
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

//         {/* Right Side - Profile Image */}
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

//       {/* WhatsApp Style Chat Box */}
//       <div className="fixed bottom-6 right-6 w-72 md:w-80 max-h-[60vh] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden z-50">
//         {/* Chat Header */}
//         <div className="bg-green-600 text-white px-4 py-2 font-semibold flex items-center gap-2">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
//             alt="Bot"
//             className="w-6 h-6"
//           />
//           Shubham Bot
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 p-3 overflow-y-auto bg-gray-100 space-y-2 text-sm">
//           {messages.map((msg, i) => (
//             <div
//               key={i}
//               className={`flex ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`px-3 py-2 rounded-lg max-w-[80%] ${
//                   msg.sender === "user"
//                     ? "bg-green-500 text-white"
//                     : "bg-white text-gray-900 border"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input Area */}
//         <div className="flex items-center border-t border-gray-300 px-3 py-2 bg-white">
          

// <input
//   type="text"
//   placeholder="Type your name..."
//   className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//   value={inputText}
//   onChange={(e) => setInputText(e.target.value)}
//   onKeyDown={(e) => e.key === "Enter" && handleSend()}
// />

//           <button
//             onClick={handleSend}
//             className="ml-2 text-green-600 hover:text-green-800 font-bold"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import MyImage from "../assets/MyImage.jpg";
// Optional: import your sound file
// import sendSound from "../assets/send.mp3"; 

const Hero = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // const handleSend = () => {
  //   const trimmed = inputText.trim();
  //   if (trimmed) {
  //     // Optional: play sound
  //     // new Audio(sendSound).play();

  //     setMessages((prev) => [
  //       ...prev,
  //       { text: trimmed, sender: "user" },
  //     ]);
  //     setInputText("");
  //     setIsTyping(true);

  //     setTimeout(() => {
  //       if (["experience", "certificates", "education", "projects"].includes(trimmed.toLowerCase())) {
  //         const response = getBotResponse(trimmed);
  //         setMessages((prev) => [
  //           ...prev,
  //           { text: response, sender: "bot" },
  //         ]);
  //       } else {
  //         setMessages((prev) => [
  //           ...prev,
  //           { text: `Hello, ${trimmed}! 👋`, sender: "bot" },
  //           { text: "What do you want to know about me?", sender: "bot" },
  //         ]);
  //         setWaitingForResponse(true);
  //       }
  //       setIsTyping(false);
  //     }, 1500);
  //   }
  // };

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (trimmed) {
      setMessages((prev) => [
        ...prev,
        { text: trimmed, sender: "user" },
      ]);
      setInputText("");
      setIsTyping(true);
  
      setTimeout(() => {
        const lower = trimmed.toLowerCase();
        if (!waitingForResponse) {
          // First time, user entering name
          setMessages((prev) => [
            ...prev,
            { text: `Hello, ${trimmed}! 👋`, sender: "bot" },
            { text: "What do you want to know about me?", sender: "bot" },
          ]);
          setWaitingForResponse(true); // Now start expecting options
        } else {
          // User is selecting options
          if (["experience", "certificates", "education", "projects"].includes(lower)) {
            const response = getBotResponse(lower);
            setMessages((prev) => [
              ...prev,
              { text: response, sender: "bot" },
            ]);
          } else {
            setMessages((prev) => [
              ...prev,
              { text: "Sorry, I didn't get that. Please choose one of the following options:", sender: "bot" },
            ]);
          }
        }
        setIsTyping(false);
      }, 1500);
    }
  };
  
  

  const handleOptionClick = (option) => {
    setMessages((prev) => [
      ...prev,
      { text: `You clicked on: ${option}`, sender: "user" },
      { text: getBotResponse(option), sender: "bot" },
    ]);
    setWaitingForResponse(false);
  };

  const getBotResponse = (option) => {
    switch (option.toLowerCase()) {
      case "experience":
        return "I have experience in web development, working with React, Node.js, and more.";
      case "certificates":
        return "I am learning MERN.";
      case "education":
        return "I’m pursuing a degree in Computer Engineering at Datta Meghe College of Engineering.";
      case "projects":
        return "I've built personal websites and web applications Like College management and airbnd clone and many more small projects.";
      default:
        return "I'm not sure about that. Want to go back to the main menu?";
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

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SHUBHAM DUBEY
          </motion.h1>

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

        {/* Right Side - Profile Image */}
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

      {/* Chatbot Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-700 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Chatbot"
            className="w-6 h-6"
          />
        </button>
      )}

      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            key="chatbox"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-72 md:w-80 max-h-[60vh] bg-[#102331]/90 backdrop-blur-lg rounded-xl shadow-xl flex flex-col overflow-hidden z-50 border border-white/20"
          >
            {/* Chat Header */}
            <div className="bg-green-600 text-white px-4 py-2 font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="Bot"
                  className="w-6 h-6"
                />
                My Bot
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-green-500 text-white"
                        : "bg-white text-gray-900 border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg bg-white text-gray-800 border animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              {waitingForResponse && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg max-w-[80%] bg-white text-gray-900 border space-y-1">
                    {["Experience", "Certificates", "Education", "Projects"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="block text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="flex items-center px-3 py-2 bg-[#203a43] border-t border-white/10">
              <input
                type="text"
                placeholder="Type your name..."
                className="flex-1 text-sm px-3 py-2 rounded-md bg-[#102331] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-2 text-green-400 hover:text-green-600 font-bold"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
