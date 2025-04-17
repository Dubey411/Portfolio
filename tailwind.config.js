// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',  // Enable dark mode
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': '#1E40AF', // Custom blue color
//         'custom-green': '#10B981', // Custom green color
//       },
//       fontFamily: {
//         sans: ['Helvetica', 'Arial', 'sans-serif'], // Custom sans font
//         serif: ['Georgia', 'serif'], // Custom serif font
//       },
//     },
//   },
//   plugins: [
//     // eslint-disable-next-line no-undef
//     require('@tailwindcss/typography'), // Add typography plugin if needed
//   ],
// };

  

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': '#1E40AF',
//         'custom-green': '#10B981',
//       },
//       fontFamily: {
//         sans: ['Helvetica', 'Arial', 'sans-serif'],
//         serif: ['Georgia', 'serif'],
//       },
//       animation: {
//         wave: 'wave 1.5s infinite ease-in-out',
//       },
//       keyframes: {
//         wave: {
//           '0%, 100%': { transform: 'rotate(0deg)' },
//           '25%': { transform: 'rotate(10deg)' },
//           '75%': { transform: 'rotate(-10deg)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//   ],
// };


// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      'custom-blue': '#1E40AF',
      'custom-green': '#10B981',
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    animation: {
      wave: 'wave 1.5s infinite ease-in-out',
      reflection: 'reflection 1s ease-in-out forwards',
    },
    keyframes: {
      wave: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(10deg)' },
        '75%': { transform: 'rotate(-10deg)' },
      },
      reflection: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(200%)' },
      },
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('@tailwindcss/typography'),
];


  

  
